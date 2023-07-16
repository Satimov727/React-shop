import React, {useState} from 'react'
import { IGoods } from '../intGoods'

interface ProductProps {
  product: IGoods
}

export function Product({ product }: ProductProps) {
  const [more, setMore] = useState(false)
  return (
    <div className='border py-2 px-4 rounded flex flex-col items-center mb-7 bg-teal-400 text-white font-bold text-xl'>
      <img src={product.image} alt={product.title}/>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <button className='bg-pink-800 text-black border py-2 px-6 shadow-xl' onClick={() => setMore(prev => !prev)}>{more ? 'Hide': 'More'}</button>

      {more && <div>
        <p>{product.description}</p>
        <p>Rate:{product.rating.rate}</p>
      </div>}

      <button className='bg-yellow-400 text-black border py-2 px-8 shadow-xl mt-3'>Buy</button>
    </div>
  )
}