import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loader from '../components/Loader';
import { ProductCart, ProductInfo } from '../components/product';
import useFecth from '../hooks/useFecth'

const ProductDetail = () => {
	const [related, setRelated] = useState([]);
    const { id } = useParams()
	
    const { data:product, loading} = useFecth(`/product/${id}`)
    const { data } = useFecth(`/product`)

	useEffect(() => {
		if(!data) return;
		setRelated(data)
	},[data ])

	useEffect(() => {
		window.scrollTo(0,0)
	},[])

	if(loading) {
		return <Loader />
	}
  return (
	<div className="product-detail section container">
		{ product && <ProductInfo product={product}/> }
		<div className="product-detail__related">
			<h2 className="product-detail__related-title">Related Items</h2>
			<div className="product-detail__related-grid">
				{related && related
					.filter(item => item.category === product.category)
					.slice(0,3)
					.map(item => (
						<Link to={`/product/${item.id}`} key={item.id}>
							<ProductCart {...item} />
						</Link>
					))
				}
			</div>
		</div>
	</div>
  )
}

export default ProductDetail