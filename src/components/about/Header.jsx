import React from 'react';
import './styles.css';
import { IoPlayCircle } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";
import Slider from '../carosoul/Slider';
import Slide from '../men/Slide';
import FAQSection from '../faq/FAQ';
import Consult from '../form/Consult';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <div className='bg-black'>
            

            <div style={{ position: "relative", overflow: "hidden" }}>
            <video
                src="1.mp4"
                autoPlay
                loop
                muted
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: 0,
                }}
            />
        
            <div
                className="content"
                style={{
                    position: "relative",
                    zIndex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    color: "white",
                    width: "100%",
                    height: "100%",
                    padding: "20px",
                }}
            >
                <div className="pt-32">
                    <img src="s.png" alt="img" className="h-[196px] w-[256px]" />
                </div>
                <div>
                    <h1 className="text-lg md:text-3xl pt-8 text-[#EAD023]">
                        Welcome to MediLaser, your go-to for safe and effective hair removal. Achieve smooth, hair-free skin - schedule your consultation today.
                    </h1>
                </div>
                <div>
                    <h1 className="text-lg md:text-3xl text-[#EAD023] pt-4">
                        Package Deal 5+1 Free
                    </h1>
                </div>
        
                <div className="font-normal mt-16 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
                    <div className="btn">
                    <a href="https://medi-laser-aesthetic-lucy.as.me/schedule/f0c5d1b7/?locations=Dreef%202%2C%204875%20AC%20Etten-Leur" target="_blank" rel="noopener noreferrer">
  <button className="bg-gradient-to-r font-semibold from-[#e7cd22] via-[#b29f1f] to-[#373317] text-black py-2 px-4 rounded-md w-full md:w-auto animate-button">
    Book an Appointment
  </button>
</a>

                    </div>
                </div>
            </div>
        
            <div className="service" style={{ position: "relative", zIndex: 2 }}>
    <div className="justify-center items-center px-4 py-4 sm:px-6 w-full">
        <h1 className="text-[#EAD023] text-3xl md:text-4xl lg:text-5xl font-semibold text-center">
            Our Service
        </h1>
        <div className="border-t-4 border-[#EAD023] mt-2 mx-auto" style={{ width: '120px' }}></div> 
        <div className="w-full mt-8">
            <Slider />
        </div>
    </div>
</div>

        </div>
        

            <div className=" container-fluid flex flex-col justify-center px-6 items-center ">

                <div className=" py-8">
                    <div className="justify-center items-center bg-black px-6">
                        <h1 className=" text-[#e7cd22]  inline-block text-3xl md:text-4xl lg:text-5xl font-semibold" style={{ borderBottom: "2px solid #eab308" }}>
                            Before and after
                        </h1>
                        <h4 className=' text-[#e7cd22]  text-3xl'>
                            From underarms to bikini lines and legs to lips, the results of laser hair removal at MedLaser are exceptional and truly unrivaled.
                        </h4>
                        <h6 className='text-[#e7cd22] text-lg text-start'>Our laser hair removal treatment is versatile enough to target any area of the body and is safe for all skin tones. Whether you have dark or fair skin,
                            we can customize our laser settings to deliver the most effective results tailored to your complexion.</h6>

                        <Slide />
                    </div>
                </div>

                <div className="container mx-auto px-6 py-4">
                    <FAQSection />
                </div>

                <div className="container mx-auto px-6 py-10">
                    <div className="flex flex-col md:flex-row md:space-x-0">
                        <div className="md:w-1/2 flex items-center justify-center relative">
                            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black to-transparent z-10" />
                            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-10" />

                            <div className="relative w-full overflow-hidden rounded-lg shadow-inner">
                                <video
                                    className="w-full h-[500px] object-cover rounded-lg"
                                    autoPlay
                                    loop
                                    muted
                                    src="video.mp4"
                                >
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>

                        <div className="md:w-1/2 items-center justify-center md:justify-start mt-8 mx-auto px-6">
                            <h1 className="text-2xl font-bold text-center md:text-left text-[#e7cd22]  ">
                                Benefits of removing hair with laser
                            </h1>

                            <div className="flex  text-[#e7cd22] gap-3 py-2">
                                <FaCircleCheck className="mt-1 text-yellow-500" /> Long lasting results
                            </div>
                            <div className="flex  text-[#e7cd22] gap-3 py-2">
                                <FaCircleCheck className="mt-1 text-yellow-500" /> Precision and speed
                            </div>
                            <div className="flex text-[#e7cd22]  gap-3 py-2">
                                <FaCircleCheck className="mt-1 text-yellow-500" /> Painless procedure
                            </div>

                            <div className="flex  text-[#e7cd22] gap-3 py-2">
                                <FaCircleCheck className="mt-1 text-yellow-500" /> Book appointment with us and get an extra 20% discount
                            </div>

                            <div className="flex items-center justify-start md:justify-start space-x-4 mt-4">
                                <img src="sun.png" alt="Sun" className="w-10 h-10" />
                                <button className="bg-gradient-to-r font-semibold from-[#e7cd22] via-[#b29f1f] to-[#373317] text-black py-2 px-4 rounded-md w-full md:w-auto animate-button">
                                    Book Appointment
                                </button>
                                <img src="sun.png" alt="Sun" className="w-10 h-10" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <Consult />
            <div className="max-w-7xl mx-auto mt-12">
                <h2 className="text-2xl  text-[#e7cd22]  bg-clip-text text-transparent font-bold mb-4 text-left">
                    Why You Choose Us?
                </h2>
                <div className="flex justify-center flex-wrap">
                    <div className="text-center mx-2">
                        <img
                            src="19.jpg"
                            alt="Safety"
                            className="w-80 h-64 object-cover rounded-lg"
                        />
                        <p className="mt-2 text-lg text-[#e7cd22]  font-bold">Safety</p>
                    </div>

                    <div className="text-center mx-2">
                        <img
                            src="2.jpg"
                            alt="Expertise"
                            className="w-64 h-80 object-cover rounded-lg"
                        />
                        <p className="mt-2  text-[#e7cd22]   font-bold">Expertise</p>
                    </div>

                    <div className="text-center mx-2">
                        <img
                            src="3.jpg"
                            alt="Advanced Technology"
                            className="w-80 h-64 object-cover rounded-lg"
                        />
                        <p className="mt-2  text-[#e7cd22] bg-clip-text text-transparent text-lg font-bold">Advanced Technology</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
