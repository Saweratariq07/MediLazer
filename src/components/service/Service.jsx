import React, { useState } from 'react';

const Service = () => {
  const [activeTab, setActiveTab] = useState('women');

  const servicesWomen = [
    {
      image: '7.png',
      title: 'Complete Face',
      price: '€69',
      details: [
        { name: 'Nose', price: '€25' },
        { name: 'Upper Lip', price: '€30' },
        { name: 'Throat', price: '€35' },
        { name: 'Chin', price: '€35' },
        { name: 'Neck', price: '€40' },
      ],
    },
    {
      image: '8.png',
      title: 'Complete Arms',
      price: '€69',
      details: [
        { name: 'Armpits', price: '€35' },
        { name: 'Fingers', price: '€20' },
        { name: 'Forearms', price: '€50' },
        { name: 'Upperarms', price: '€50' },
        { name: 'Fingers', price: '€20' },

      ],
    },
    {
      image: '9.png',
      title: 'Complete Legs',
      price: '€79',
      details: [
        { name: 'Toes', price: '€25' },
        { name: 'Lower Legs', price: '€65' },
        { name: 'Toes', price: '€25' },

        { name: 'Upper Legs', price: '€55' },
        { name: 'Lower Legs', price: '€65' },

      ],
    },
    {
      image: '11.png',
      title: 'Complete Bikini',
      price: '€79',
      details: [],
    },
    {
      image: '12.png',
      title: 'Complete Body',
      price: '€169',
      details: [],
    },
  ];

  const servicesMen = [
    {
      image: 'face.jpg',
      title: 'Complete Face',
      price: '€69',
      details: [
        { name: 'Nose', price: '€25' },
        { name: 'Eyebrow bridge', price: '€25' },
        { name: 'Throat', price: '€40' },
        { name: 'neck', price: '€45' },

        { name: 'Beard', price: '€40' },
      ],
    },
    {
      image: 'arm.jpg',
      title: 'Complete Arms',
      price: '€69',
      details: [
        { name: 'Armpits', price: '€35' },
        { name: 'Fingers', price: '€20' },
        { name: 'Forearms', price: '€55' },
        { name: 'Upperarms', price: '€55' },
        { name: 'Forearms', price: '€55' },


      ],
    },
    {
      image: 'legs.jpg',
      title: 'legs and Butt',
      price: '€79',
      details: [
        { name: 'Toes', price: '€30' },
        { name: 'Lower Legs', price: '€75' },
        { name: 'Toes', price: '€30' },

        { name: 'Upper Legs', price: '€70' },
        { name: 'Lower Legs', price: '€75' },

      ],
    },
    {
      image: 'chest.jpg',
      title: 'chest/Belly',
      price: '€99',
      details: [
        { name: 'Abdominal line', price: '€35' },
        { name: 'Chest', price: '€50' },

        { name: 'Belly', price: '€70' },
        { name: 'Chest', price: '€50' },

        { name: 'Abdominal line', price: '€35' },

      ],
    },
    {
      image: 'back.jpg',
      title: 'Back/ Shoulders',
      price: '€99',
      details: [
        { name: 'Lower Back', price: '€50' },
        { name: 'Shoulders', price: '€65' },
        { name: 'Back', price: '€70' },
        { name: 'Lower Back', price: '€50' },
        { name: 'Shoulders', price: '€65' },
      ],
    },
  
  ];

  const activeServices = activeTab === 'women' ? servicesWomen : servicesMen;

  return (
    <div className="bg-black text-yellow-400 min-h-screen py-12">
      {/* Tabs */}
      <div className="text-center mb-8">
        <button
          className={`text-2xl font-bold px-6 py-2 focus:outline-none ${
            activeTab === 'women'
              ? 'text-yellow-400 border-b-2 border-yellow-400'
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('women')}
        >
          Women
        </button>
        <button
          className={`text-2xl font-bold px-6 py-2 focus:outline-none ${
            activeTab === 'men'
              ? 'text-yellow-400 border-b-2 border-yellow-400'
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('men')}
        >
          Men
        </button>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {activeServices.map((service, index) => (
          <div key={index} className="bg-black text-[#d6be20] rounded-lg shadow-lg overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-xl font-semibold text-yellow-400 mb-4">
                {service.price}
              </p>
              <ul className="mb-4 space-y-1">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex justify-between">
                    <span>{detail.name}</span>
                    <span>{detail.price}</span>
                  </li>
                ))}
              </ul>
              <div className="btn">
                            <button className="bg-gradient-to-r font-semibold from-[#e7cd22] via-[#b29f1f] to-[#373317] text-black py-2 px-4 rounded-md w-full md:w-auto animate-button">
                            Book now!
                            </button>
                        </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
