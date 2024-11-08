import React from 'react'
import Service from '../service/Service'

function Price() {
  return (
    <div className='bg-black'>
      <div className="container mx-auto flex flex-col justify-center px-6 pt-44 items-center py-8">
        <h3 className='text-center font-semibold  md:text-2xl mb-4 text-[#e7cd22] '>Personalized Treatment Plan With The Latest Laser Technology For Permanent Hair Removal</h3>
        <p className=' text-center  md:text-3xl font-semibold mb-4 text-[#e7cd22] '>Our Triple Ice Quattaro Diode Laser Ensure A </p>
        <p className=' text-center  md:text-3xl mb-4 font-semibold text-[#e7cd22] '>       Painless And Effective Treatment
        </p>
        <Service />
      </div>
    </div>
  )
}

export default Price
