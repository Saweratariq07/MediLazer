import { FaMoneyBillWave, FaStethoscope, FaUserMd } from 'react-icons/fa'

const FeesSection = () => {
  return (
    <div className="">
        <div className="relative w-full h-auto overflow-hidden">
                <video
                    className="absolute w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                >
                    <source src="/contact.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>


                <div className="relative z-10 pt-44 flex flex-col items-center justify-center h-full p-10  text-white space-y-8">
    
   
      <h2 className="text-2xl md:text-3xl mt-20 rounded-lg px-2 font-bold bg-[#1977cc] bg-opacity-50 text-[#ffffff] mb-4 inline-block p-2">Fees</h2>

      <div className="mb-10">
        <h3 className="text-2xl md:text-3xl rounded-lg px-2 font-bold bg-[#1977cc] bg-opacity-50 text-[#ffffff] mb-4 inline-flex p-2">
          <FaUserMd className="mr-2 text-white" /> Private Patients
        </h3>
        <table className="w-full border-collapse bg-transparent shadow-md">
        <tbody className='bg-blue-500 bg-opacity-50'> {/* Use bg-opacity for transparency */}
  <tr className="border-b">
    <td className="p-4">Meet & Greet (New Patients)</td>
    <td className="p-4 text-right font-semibold">&euro;40</td>
  </tr>
  <tr className="border-b">
    <td className="p-4">Consultation</td>
    <td className="p-4 text-right font-semibold">&euro;60</td>
  </tr>
  <tr className="border-b">
    <td className="p-4">Blood Test</td>
    <td className="p-4 text-right font-semibold">&euro;30</td>
  </tr>
</tbody>

        </table>
      </div>

      <div className="mb-10">
        <h3 className="text-2xl md:text-3xl rounded-lg px-2 font-bold bg-[#1977cc] bg-opacity-50 text-[#ffffff] mb-4 inline-flex p-2">
          <FaStethoscope className="mr-2 text-white" /> GMS Patients
        </h3>
        <table className="w-full  border-collapse bg-transparent shadow-md">
        <tbody className='bg-blue-500 bg-opacity-50'> {/* Use bg-opacity for semi-transparency */}
  <tr className="border-b">
    <td className="p-4">Blood Test</td>
    <td className="p-4 text-right font-semibold">&euro;20</td>
  </tr>
  <tr className="border-b">
    <td className="p-4">Joint Injection</td>
    <td className="p-4 text-right font-semibold">&euro;40</td>
  </tr>
</tbody>

        </table>
      </div>

      <div className="mb-10">
        <h3 className="text-2xl md:text-3xl rounded-lg px-2 font-bold bg-[#1977cc] bg-opacity-50 text-[#ffffff] mb-4 inline-flex p-2">
          <FaMoneyBillWave className="mr-2 text-white" /> All Patients
        </h3>
        <table className="w-full border-collapsez bg-transparent shadow-md">
        <tbody className='bg-blue-500 bg-opacity-50'> {/* Use bg-opacity for semi-transparency */}
  <tr className="border-b">
    <td className="p-4">Medical Certificate (more than 3 days)</td>
    <td className="p-4 text-right font-semibold">&euro;20</td>
  </tr>
  <tr className="border-b">
    <td className="p-4">Driving Licence</td>
    <td className="p-4 text-right font-semibold">&euro;50</td>
  </tr>
</tbody>

        </table>
      </div>
    </div>
    </div>
    </div>
  )
}

export default FeesSection
