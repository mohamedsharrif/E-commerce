import React from 'react'
import '../style.css'
import { Link } from 'react-router-dom'
import { useShop } from '../ShopContext'

const Header = () => {
  const {products} = useShop();
  return (
    <div className='menu'>
      <Link className='logo' to='/'>BurgerBite</Link>
      <div className='links'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/cart'>Cart</Link>
       </div>
      <Link to={'/cart'}><span className='cart'>{products.length}</span></Link>
    </div>
  )
}

export default Header
