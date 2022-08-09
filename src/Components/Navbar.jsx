import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {IoMdCart} from 'react-icons/io'
import { showCart } from './Cart/cartSlice'
import { CartDropdown } from './Cart/CartDropdown'
import { useNavigate } from 'react-router-dom'
export const Navbar = () => {
  const show = useSelector((state)=> state.cart.show)
  const dispatch= useDispatch()
  const navigate = useNavigate()
 
  return (
    <>

<nav class=" px-2  sm:px-4 py-2.5 bg-gray-900 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div class=" flex flex-wrap justify-between items-center ">
  <span onClick={()=>navigate('/')}  class=" cursor-pointer flex items-center">
      <img src="https://e7.pngegg.com/pngimages/731/184/png-clipart-orange-character-holding-stick-illustration-punjabi-language-bhangra-music-song-zumba-miscellaneous-orange.png" class="mr-3 rounded-full  h-6 sm:h-9" alt="Flowbite Logo"/>
      <span class="self-center text-xl font-semibold whitespace-nowrap text-white">E-Punjabi</span>
  </span>
  <div class="flex md:order-2">
  <div className='text-3xl text-white cursor-pointer' onClick={()=>dispatch(showCart())}  >

     <IoMdCart />
  </div>
    
  </div>
  <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4 mt-4  rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0  md:border-0 ">
      <li>
        <a href="/" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
      </li>
      <li>
        <a href="/" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li>
        <a href="/" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
      </li>
      <li>
        <a href="/" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
{show?<CartDropdown/>:
null
}

    </>
    
    
  )
}
