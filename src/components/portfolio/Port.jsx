import React from 'react'
import Consult from '../form/Consult';

function Port() {
  return (
    <div className='bg-black'>
      <div className="container mx-auto flex flex-col justify-center px-6 pt-44 items-center py-8">
        <h3 className='text-center font-semibold  md:text-2xl mb-4 bg-gradient-to-r from-[#e7cd22] via-[#b29f1f] to-[#575125] bg-clip-text text-transparent'>Before and After Hair Removal at MediLaser </h3>
       <p className=' text-center  md:text-3xl font-semibold mb-4 bg-gradient-to-r from-[#e7cd22] via-[#b29f1f] to-[#575125] bg-clip-text text-transparent'>Experience beautifully smooth skin: prepare thoroughly for your hair removal treatment </p>
       <p className=' text-center  md:text-3xl mb-4 font-semibold bg-gradient-to-r from-[#e7cd22] via-[#b29f1f] to-[#575125] bg-clip-text text-transparent'>       and revel in the remarkable results with our expert care.
       </p>

       <div className="container mx-auto">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
    <div>
      <img src="13.png" alt="Image 13" className=" h-96" />
    </div>
    <div>
      <img src="14.png" alt="Image 14" className="h-96" />
    </div>
    <div>
      <img src="15.png" alt="Image 15" className=" h-96" />
    </div>
  </div>
 
</div>



<div className="container mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 mt-12 gap-2">
    <div>
      <img src="16.png" alt="Image 16" className=" h-96" />
    </div>
    <div>
      <img src="17.png" alt="Image 17" className="h-96" />
    </div>
    <div>
      <img src="18.png" alt="Image 18" className=" h-96" />
    </div>
  </div>
 
</div>

      </div>
      <Consult/>
    </div>
  )
}

export default Port;
