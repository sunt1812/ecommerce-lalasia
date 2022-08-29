import React, {  useEffect, useMemo, useState} from 'react'
import PropTypes from 'prop-types'
import { Swiper , SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import { Link } from 'react-router-dom'

import filter from '../assets/icon/filter.svg'
import sort_icon from '../assets/icon/sort.svg'
import Search from '../components/Search'
import PaginationPage from '../components/Pagination'
import productSlideData from '../assets/pake-data/productSlide'
import useFecth from '../hooks/useFecth'
import { useGlobalContext } from '../context/StateContext'
import useCustomRouter from '../hooks/useCustomRouter'
import filterData from '../assets/pake-data/filterData'
import sortData from '../assets/pake-data/sortData'
import { SectionHeading } from '../components/section'
import { ProductCart } from '../components/product'
import Loader from '../components/Loader'

const Product = () => {
	const [product, setProduct] = useState([]);
	const [isSortOpen, setIsSortOpen] = useState(false);
	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const [limit, setLimit] = useState(12);
	const { page ,sort,order,category,keywork} = useGlobalContext()
	const { pushQuery } = useCustomRouter()

	const {data, loading} = useFecth(`product?_limit=${limit}&_page=${page}&_sort=${sort}&_order=${order}&title_like=${category}&q=${keywork}`)

	useEffect(() => {
		if(!data?.data) return;
		setProduct(data?.data)
	},[data?.data])

	const totalPages = useMemo(() => {
		if(!data?.pagination._totalRows) {
			return 0
		} 
		return Math.ceil(data?.pagination._totalRows / limit)
	  },[data?.pagination._totalRows,limit])

	  const handleFilterDropdow = (category) => {
		pushQuery(
			{
				_page:page,
				_sort:sort,
				_order:order,
				category
			})
	  }
	  const handleSortDropdow = (sort,order) => {
		pushQuery(
			{
				_page:page,
				_sort:sort,
				_order:order
			})
	  }
	if(loading) {
		return <Loader />
	}
  return (
   	<div className="product">
		<SectionHeading
			className="product-slide"
			title="Product"
			desc="We display products based on the latest products we have, if you want to see our old products please enter the name of the item"
		>
			<div className="product-slide__container">
				<Swiper
					slidesPerView={1}
					grabCursor={true}
					loop={true}
					modules={[Navigation , Pagination]}
					navigation
					pagination={{ clickable: true }}
					>
						{productSlideData.map((item,index) => (
							<SwiperSlide key={index}>
								<ProductSlideItem {...item} />
							</SwiperSlide>
						))}
				</Swiper>
			</div>
		</SectionHeading>
		<div className="product-content container">
			<section className="product-search">
				<Search />
				<div className="product-search__filter" onClick={() => setIsFilterOpen(!isFilterOpen)}>
					<img src={filter} alt="" className="product-search__filter-img" />
					<div className="product-search__filter-text">Filter</div>
					<ul className={`product-dropdow ${isFilterOpen ? "open" : ""}`}>
						{filterData.map((item,index) =>(
							<li className="product-dropdow__item" key={index} 
								onClick={()=> handleFilterDropdow(item.category)}>
								{item.category}
							</li>
						))}
					</ul>
				</div>
			</section>
			<section className="product-sort">
				<div className="product-sort__text">
					<h2 className="product-sort__title">
						Total Product
					</h2>
					<div className="product-sort__number">
						{data?.pagination._totalRows}
					</div>
				</div>
				<div className="product-sort__filter" onClick={() => setIsSortOpen(!isSortOpen)}>
					<img src={sort_icon} alt="" className="product-sort__icon" />
					<div className="product-sort__name">Sort By</div>
					<ul className={`product-dropdow ${isSortOpen ? "open" : ""}`}>
						{sortData.map((item,index) =>(
							<li className="product-dropdow__item" key={index} 
								onClick={()=> handleSortDropdow(item.sort,item.order)}>
								{item.display}
							</li>
						))}
					</ul>
				</div>
			</section>
			<section className="product-grid grid">
				{product && product.map(item => (
					<Link to={`/product/${item.id}`} key={item.id}>
						<ProductCart {...item}/>
					</Link>
				))}
			</section>
			<PaginationPage totalPages={totalPages} page={page}/>
		</div>
    </div>
  )
}

const ProductSlideItem = ({ subtitle , title , desc , img}) => {
	return (
		<div className="product-slide__item">
			<img src={img} alt="" className="product-slide__img" />
			<div className="product-slide__content">
				<div className="product-slide__subtitle">{subtitle}</div>
				<div className="product-slide__title">{title}</div>
				<div className="product-slide__desc">{desc}</div>
			</div>
		</div>
	)
}

ProductSlideItem.propTypes = {
	img : PropTypes.string,
	subtitle : PropTypes.string,
	title : PropTypes.string,
	desc : PropTypes.string,
  }
export default Product