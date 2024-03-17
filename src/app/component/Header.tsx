import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
      <div className=''>
          <div className='top md:px-16 my-2 px-3'>
              <ul className='flex justify-end gap-5'>
                <li> <Link href="/Login">
          Login
        </Link></li>
                <li><Link href="/SignUp">SignUp</Link></li>
              </ul>
          </div>
          <div className="down flex justify-between items-center md:px-16 mb-2 px-3">
              <div className="first">
              <Link href="/"><h2 className='text-3xl font-bold'>ECOMMERCE</h2></Link>
              </div>
              <div className="sec hidden sm:block md:block lg:block">
                  <ul className='flex gap-5'>
                      <li className='text-base font-semibold'>Categories</li>
                      <li className='text-base font-semibold'>Sale</li>
                      <li className='text-base font-semibold'>Clearance</li>
                      <li className='text-base font-semibold'>New stock</li>
                      <li className='text-base font-semibold'>Trending</li>
                  </ul>
              </div>
              <div className="three flex gap-5">
                  <img src="/mag.svg" alt="" className='w-6' />
                  <img src="/cart.svg" alt="" className='w-6' />
              </div>
          </div>
          <div className="lower bg-[#F4F4F4] text-center">
              <p className='py-2 font-medium'>
                  <span className='mx-4'>{"<"}</span>Get 10% off on business sign up <span className='mx-3'>{">"}</span>
              </p>
          </div>
    </div>
  )
}

export default Header