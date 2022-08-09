import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {ImCross} from 'react-icons/im'
import { removeFromCart, showCart } from './cartSlice'
import {useNavigate} from 'react-router-dom'

export const CartDropdown = () => {
const product = useSelector((state)=>state.cart.cart)
const dispatch= useDispatch()
const navigate = useNavigate()
console.log(product);
  return (
    <div className={`  fixed border border-black p-3 h-64 z-40 w-56 lg:top-20 top-14 right-2 lg:right-2 bg-white   `}>
    <div className={`${product.length===0 ?'items-center justify-center':''} h-[182px]
scroll overflow-scroll
flex flex-col scrollbar-hide`}>

{product.length>0? product.map(p=>(
<div key={p.id} className="flex  p-2 items-center   ">
<div className="w-1/4">

<img src={p.img} alt="" className='h-10 w-10 mr-4 ' />
</div>
    <h1 className='text-sm w-3/4 pl-2'>{p.title.slice(0,15)}</h1>
    <div className="text-sm w-3" onClick={()=>dispatch(removeFromCart(p))}>
        <ImCross/>
    </div>
</div>
)): <h1>
  Your cart is empty
</h1>}
    </div>
  <button className="bg-yellow-400 w-full rounded-lg h-10 my-2" onClick={()=>{navigate('/cart'); dispatch(showCart())}}>
            Go To Cart
        </button>
</div>
  )
}
