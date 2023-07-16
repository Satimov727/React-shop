import React from "react";
import { Product } from '../components/Product'
import { goods } from '../goods/goods'

export function MainPage() {
  return (
    <>
      <h1 className="text-center font-bold font-mono text-xl pt-3 text-teal-500 border py-2 px-4 rounded w-1/3 ml-auto mr-auto mt-3 shadow-sm">
        Welcome to react shop
      </h1>
        <div className='grid grid-cols-5 gap-10 pt-10 pl-10 pr-10'>
          {goods.map(product => <Product product={product} key={product.id} />)}
      </div>
    </>
  )
}