import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTocart} from '../Cart/cartSlice'

export const Products = () => {
    const products = useSelector((state)=>state.products.items)
    console.log(products);
    const dispatch = useDispatch()
  return (
    <div className=' w-full mt-[88px] mb-3'>
    <div className="flex items-center justify-center w-full  ">

    <div className="grid lg:grid-cols-3 sm:grid-cols-1 w-full gap-5  gap-x-8 px-6  ">

    {products.map(p=>(
        <div key={p.id} className="    flex flex-col      ">
        <div className="bg-gray-100   h-[340px] relative w-full flex items-center justify-center">

            <img src={p.img} className=" absolute h-56 w-52 mix-blend-multiply " alt="" />
        </div>
        <div className="px-2 border border-gray-100 pt-2 border-t-0  ">

        <h2 className='h-16'>
            {p.title.slice(0,100)}
        </h2>
        <h1 className="text-orange-700 font-bold my-2">
        ₹{p.price}
        </h1>
        <button className="bg-yellow-400 w-full rounded-lg h-10 my-2" onClick={()=>dispatch(addTocart(p))}>
            Add To Cart
        </button>
        </div>
        </div>
    ))}
    </div>
    </div>
    </div>
  )
}
