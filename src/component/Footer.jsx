import React from 'react'
import { footerLinks } from '../constants'
import { div } from 'three/webgpu'

const Footer = () => {
  return (
   <footer className='py-5 sm:px-10 px-5'>
    <div className='screen-max-width'>

       <p className='font-semibold text-gray text-xs'>

            More ways to Shop:{' '}
            <span className='underline text-blue'>
                  Find an Apple Store {' '}
            </span>
            or{' '}
            <span className='underline text-blue'>
                  other retailer{' '}
            </span>
            near you.
       </p>

       < div className='bg-neutral-700 my-5 h-[1px] w-full' />
    </div>
    <div className='flex flex-center px-10'>
      <p className='font-semibold  text-gray-50 text-sm'>
            Copyright &copy; Apple Inc. All rights reverved.
      </p>
    </div>
    <div className='lg:flex-center md:justify-center sm:items-center py-10'>
      {footerLinks.map(link=>(
            <div key={link} className=' text-xs cursor-pointer px-3 leading-5  text-blue'>
                  <ul className='hover:underline'>
                  {link}
                  </ul>
                
            </div>
      ))}

    </div>
   </footer>
  )
}

export default Footer