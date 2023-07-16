import React from 'react'
import { Link } from 'react-router-dom'

export function Navigation() {

  return (
    <nav className='items-center py-6 bg-orange-600 font-bold flex justify-between text-white'>
      <h3 className='ml-4'>React shop</h3>
      <span>
        <Link to="/" className='mr-4'>Products</Link >
        <Link to="/basket" className='mr-4'>Basket</Link >
      </span>
    </nav>
  )

}