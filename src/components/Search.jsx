import React, { useRef } from 'react'
import search from '../assets/icon/search.svg'
import Button from '../components/Button'
import useCustomRouter from '../hooks/useCustomRouter'

const Search = () => {
  const refInput = useRef(null)
  const { pushQuery } = useCustomRouter()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const value = refInput.current.value
    
    if(!value.trim()) return;
    pushQuery({search:value})
  }

  return (
    <form className="search" onSubmit={handleSubmit}>
        <input type="text" placeholder="Search property" className="search__input" ref={refInput}/>
        <img src={search} alt="search icon" className="search__icon"/>
        <Button className="btn-primary">Search</Button>
    </form>
  )
}

export default Search