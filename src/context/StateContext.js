import React, { useContext, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom';
const StateContext = React.createContext()

export const useGlobalContext = () => useContext(StateContext);

const StateContextProvider = ({children}) => {
  const [modalCart, setModalCart] = useState(false)
  const {search} = useLocation()

  const {page ,sort,order,category,keywork} = useMemo(()=>{
    const page = new URLSearchParams(search).get('_page') || 1;
    const sort = new URLSearchParams(search).get('_sort') || "createdAt";
    const order = new URLSearchParams(search).get('_order') || "desc";
    const category = new URLSearchParams(search).get('category') || "";
    const keywork = new URLSearchParams(search).get('search') || "";
      return { 
        page:Number(page),
        sort ,
        order,
        category,
        keywork
      }
    },[search])
    const value = {page ,sort,order,category,keywork}
  return (
    <StateContext.Provider value={{...value,modalCart, setModalCart}}>
        {children}
    </StateContext.Provider>
  )
}


export {StateContextProvider,StateContext}