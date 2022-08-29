import React, { memo } from 'react'
import PropsTypes from 'prop-types'
import usePagination from '../hooks/usePagination'
import arrowLeft from '../assets/icon/prev.svg'
import arrowRight from '../assets/icon/next.svg'

const Pagination = ({totalPages ,page}) => {

	const {handleNextPage,handlePrevPage,activePage,firstArray,lastArray} = usePagination(totalPages)

	return (
		<div className="pagination">
			<button onClick={handlePrevPage}><img src={arrowLeft} alt="" className="pagination__icon"/></button>
			{
				firstArray.map(num => (
					<button key={num} 
						className={`${num === page ? "pagination__btn active" : "pagination__btn "}`} 
						onClick={() => activePage(num)}>
						{num}
					</button>
				))
			}
			{lastArray.length > 0 && <button className="pagination__load">...</button>}
			{
				lastArray.map(num => (
					<button key={num} 
						className={`${num === page ? "pagination__btn active" : "pagination__btn"}`} 
						onClick={() => activePage(num)}>
						{num}
					</button>
				))
			}
			<button  onClick={handleNextPage}><img src={arrowRight} alt="" className="pagination__icon"/></button>
		</div>
	)
}
Pagination.propsTypes = {
  totalPages:PropsTypes.number,
  page:PropsTypes.number
}
export default memo(Pagination)