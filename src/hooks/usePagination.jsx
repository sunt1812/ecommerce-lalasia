import React, { useMemo} from 'react'
import { useGlobalContext } from '../context/StateContext';
import useCustomRouter from './useCustomRouter';

const usePagination = (totalPages) => {

  const {page ,sort,order} = useGlobalContext()
    const {pushQuery} = useCustomRouter()
    
    const {firstArray , lastArray } = useMemo(() => {
      const newArr = Array.from({length:totalPages},(_,i) => i + 1)
        if(totalPages < 4) {
         return {
             firstArray:newArr,
             lastArray:[]
         }
        }

        if(totalPages - page >= 4) {
          return {
            firstArray:newArr.slice(page -1 ,page  + 2),
            lastArray:newArr.slice(totalPages -1 )
            }
        }else {
          return {
            firstArray:newArr.slice(totalPages - 4 ,totalPages),
            lastArray:[]
            }
        }
      
    }, [totalPages,page]);

    const handlePrevPage = () => {
        const newPage = Math.max(page - 1,1)
        pushQuery({
          _page:newPage,
          _sort:sort,
          _order:order
        })
    }
    const handleNextPage = () => {
        const newPage = Math.min(page + 1,totalPages)
        pushQuery({
          _page:newPage,
          _sort:sort,
          _order:order
        })
    }
    const activePage = (index) => {
      pushQuery({
        _page:index,
        _sort:sort,
        _order:order
      })
    }
  return (
    {firstArray,lastArray,handleNextPage,handlePrevPage,activePage}
  )
}

export default usePagination