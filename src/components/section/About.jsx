import React from "react";
import Faq from "../faqq/Faq";

const About = () => {
  return (
    <div className="bg-black">
  <div className="bg-black t min-h-screen py-12 flex items-center justify-center">
  <div className="container mx-auto bg-gradient-to-r from-[#e7cd22] via-[#b29f1f] to-[#373317] bg-clip-text text-transparent grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 items-center px-4 md:px-16">
    <div className="text-left">
      <h1 className="text-3xl font-normal leading-snug">
        Welcome To MediLaser, Your Go-To Destination For Achieving Smooth, Hair-Free Skin. Our Experienced Team Of Certified Professionals Specializes In Safe And Effective Laser Hair Removal Tailored To Your Unique Needs. With Cutting-Edge Technology, We Prioritize Your Comfort And Safety At Every Step. From Your Initial Consultation To Personalized Follow-Up Care, We’re Dedicated To Providing An Exceptional Experience In A Welcoming Environment. Discover The Confidence That Comes With Beautifully Smooth Skin—Schedule Your Consultation At MediLaser Today!
      </h1>
    </div>

    <div className="md:w-96 flex items-center justify-end relative h-[500px]">
  <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black to-transparent z-10" />
  
  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black to-transparent z-10" />
  
  <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent z-10" />
  
  <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent z-10" />

  <div className="relative w-full overflow-hidden rounded-lg shadow-inner h-full">
    <img src="2.jpg" alt="MediLaser" className="w-full h-full object-cover" />
  </div>
</div>

  </div>
</div>

<Faq/>
    <div className="max-w-7xl mx-auto mt-12">
        <h2 className="text-xl bg-gradient-to-r from-[#e7cd22] via-[#b29f1f] to-[#373317] bg-clip-text text-transparent font-bold mb-4 text-left">
          Why You Choose Us?
        </h2>
        <div className="flex justify-center flex-wrap">
          <div className="text-center mx-2">
            <img
              src="19.jpg"
              alt="Safety"
              className="w-80 h-64 object-cover rounded-lg"
            />
            <p className="mt-2 bg-gradient-to-r from-[#e7cd22] via-[#b29f1f] to-[#373317] bg-clip-text text-transparent font-bold">Safety</p>
          </div>

          <div className="text-center mx-2">
            <img
              src="2.jpg"
              alt="Expertise"
              className="w-64 h-80 object-cover rounded-lg"
            />
            <p className="mt-2 bg-gradient-to-r from-[#e7cd22] via-[#b29f1f] to-[#373317] bg-clip-text text-transparent font-bold">Expertise</p>
          </div>

          <div className="text-center mx-2">
            <img
              src="3.jpg"
              alt="Advanced Technology"
              className="w-80 h-64 object-cover rounded-lg"
            />
            <p className="mt-2 bg-gradient-to-r from-[#e7cd22] via-[#b29f1f] to-[#373317] bg-clip-text text-transparent font-bold">Advanced Technology</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
