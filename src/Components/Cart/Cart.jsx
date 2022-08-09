import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {BsArrowLeftSquareFill,BsArrowRightSquareFill} from 'react-icons/bs'
import  { addTocart, decreaseItem } from './cartSlice.js'
export const Cart = () => {
    const product = useSelector((state)=>state.cart.cart)
    const dispatch = useDispatch()
    const total = useSelector((state)=>state.cart.total)
  return (
    <div className='lg:flex p-3 mt-20 w-full'>
    <div className="lg:hidden bg-white h-44 p-4 border ">
    <div className="flex  ">
        <div className="w-4">
            <img src="https://netjapan.hk/wp-content/uploads/2018/12/Green-Tick-PNG-Pic-1.png" className='mix-blend-multiply mt-1' alt="" />
        </div> 
        <div className="w-full text-[12px] text-green-700">
        Your order is eligible for FREE Delivery.
        <h1 className='text-gray-700'>
        Select this option at checkout.
        </h1>
        </div>
    </div>

    <div className="my-2">
        <h1 className="text-xl flex ">
            Subtotal : <h1 className="font-bold ml-1">₹{total}</h1>
        </h1>
    </div>
    <button className="bg-yellow-400 w-full rounded-lg h-10 my-2" >
           Proceed to buy
        </button>

    </div>
    <div className="lg:w-3/4 w-full bg-white h-full mr-3 p-3 border ">
    
    <div className={`${product.length===0?'items-center flex justify-center h-24':''}`}>

{product.length>0?product.map((p,i)=>(
    <div key={i} className="border-b flex mb-2 p-3  ">
<div className="w-36">

<img src={p.img} alt="" className='lg:h-32 lg:w-32 h-16 w-16  ' />
</div>
<div className="w-3/4 flex flex-col">

    <span className=' lg:hidden text-[12px] lg:text-lg '>{p.title.slice(0,50)}...</span>
    <span className='hidden lg:flex text-[12px] lg:text-lg '>{p.title}</span>
    <span className='text-green-700 text-sm'>
        In Stock
    </span>
    <div className="flex items-center mt-3 ">

    <div className="text-" onClick={()=>dispatch(decreaseItem(p))} >
        <BsArrowLeftSquareFill/>
    </div>
    <h1 className='px-2'>
       {p.itemCount}
    </h1>
    <div className="text-" onClick={()=>dispatch(addTocart(p))}>
        <BsArrowRightSquareFill/>
    </div>
    </div>
</div>
    <h2 className='font-bold w-14 pl-2'>₹{p.price}</h2>
    
   
</div>
)):<h1 className='text-xl'>Your cart is empty</h1>}
    </div>
    </div>
    <div className="w-1/4 bg-white h-44 p-4 border ">
    <div className="flex  ">
        <div className="w-4">
            <img src="https://netjapan.hk/wp-content/uploads/2018/12/Green-Tick-PNG-Pic-1.png" className='mix-blend-multiply mt-1' alt="" />
        </div> 
        <div className="w-full text-[12px] text-green-700">
        Your order is eligible for FREE Delivery.
        <h1 className='text-gray-700'>
        Select this option at checkout.
        </h1>
        </div>
    </div>

    <div className="my-2">
        <h1 className="text-xl flex ">
            Subtotal : <h1 className="font-bold ml-1">₹{total}</h1>
        </h1>
    </div>
    <button className="bg-yellow-400 w-full rounded-lg h-10 my-2" >
           Proceed to buy
        </button>

    </div>
    </div>
  )
}
