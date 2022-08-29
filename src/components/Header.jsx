import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import menu from '../assets/icon/menu.svg'
import bag from '../assets/icon/bag.svg'
import user from '../assets/icon/user.svg'
import { useCartContext } from '../context/CartContext'
import { useGlobalContext } from '../context/StateContext'

const navLinks = [
	{
		path:"/product",
		display:"product"
	},
	{
		path:"/services",
		display:"services"
	},
	{
		path:"/article",
		display:"article"
	},
	{
		path:"/about",
		display:"about us"
	},
	{
		path:"/cart",
		display:"Cart"
	}
]
const Header = () => {
	const headerRef = useRef(null)
	const [isOpen, setIsOpen] = useState(false);

	const { pathname } = useLocation()
	const activeNav = navLinks.findIndex(e => e.path === pathname )

	const { amount } = useCartContext()
	const { setModalCart } = useGlobalContext()

	const handleShowMenu = () => {
		setIsOpen(true)
	}

	useEffect(() => {
		setIsOpen(false); // Close the navigation panel
	  }, [ pathname ]);
	  
    useEffect(() => {
        const scroll = window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('shrink')
            } else {
                headerRef.current.classList.remove('shrink')
            }
        })
        return () => {
            window.removeEventListener("scroll",scroll)
        };
    }, []);

  return (
	<header className="header" ref={headerRef}>
		<div className="nav">
			<div className="nav__container container">
				<Link to="/home" className="nav__logo">
					<img src={logo} alt="logo" />
				</Link>
				<ul className={`nav__menu ${ isOpen ? "show-menu" : ""}`}>
					{navLinks.map((item,index) => (
						<li className="nav__item" key={index}>
							<Link to={item.path} className={`nav__link ${ index === activeNav ? "active" : ""}`}>{item.display}</Link>
						</li>
					))}
				</ul>
				<div className="nav__btns">
					<img src={menu} alt="menu" className="nav__btns-toggle" onClick={handleShowMenu}/>
					<div className="nav__btns-cart" onClick={()=> setModalCart(true)}>
						<img src={bag} alt="bag" className="nav__btns-bag" />
						<span className="nav__btns-amount">{amount}</span>
					</div>
					<Link to="/login"><img src={user} alt="user" className="nav__btns-user" /></Link>
				</div>
			</div>
		</div>
	</header>
  )
}

export default Header