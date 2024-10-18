import React from 'react'

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
    <div className='flex flex-col'>
      <p className='font-semibold text-gray-50 text-sm'>
            Copyright &copy; Apple Inc. All rights reverved.
      </p>
    </div>
   </footer>
  )
}

export default Footer