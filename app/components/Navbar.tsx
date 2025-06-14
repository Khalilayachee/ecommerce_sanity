import React from 'react'
import { Link } from "@remix-run/react"
import { useCartState } from '~/lib/useCart';

const Navbar = () => {
  const toggleCart = useCartState((state) => state.toggleShowCart);
  const totalItems = useCartState((state) => state.totalItems);
  return (
    <header className='relative z-50'>
      <div className='bg-white'>
        <div className='border-b border-gray-200'>
          <div className='max-w-7xl mx-auto px-4 py-4 flex items-center justify-between'>
            <div className='h-16 flex items-center justify-between w-full'>
              <div className='flex items-center gap-4'>
                <Link to='/'>
                  <h1 className='text-2xl font-bold'>
                    E-commerce<span className='text-blue-500'>Natra</span>
                  </h1>
                </Link>
              </div>
              <button 
                onClick={toggleCart} 
                className='group -m-2 p-2 flex items-center'
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={1.5} 
                  stroke="currentColor" 
                  className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" 
                  />
                </svg>
                <span className='ml-2 text-sm font-medium text-white bg-red-500 px-3 py-1 rounded-full'>
                  {totalItems}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar