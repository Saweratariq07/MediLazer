import React, { useState } from 'react';

const Service = () => {
  const [activeTab, setActiveTab] = useState('women');
  const [activeSubTab, setActiveSubTab] = useState('all'); // For secondary tabs within each main tab

  // Data for women's services
  const servicesWomen = [
    {
      section: 'face',
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
      section: 'arms',
      image: '8.png',
      title: 'Complete Arms',
      price: '€69',
      details: [
        { name: 'Armpits', price: '€35' },
        { name: 'Fingers', price: '€20' },
        { name: 'Forearms', price: '€50' },
        { name: 'Upper Arms', price: '€50' },
      ],
    },
    {
      section: 'legs',
      image: '9.png',
      title: 'Complete Legs',
      price: '€79',
      details: [
        { name: 'Toes', price: '€25' },
        { name: 'Lower Legs', price: '€65' },
        { name: 'Upper Legs', price: '€55' },
      ],
    },
    {
      section: 'bikini',
      image: '11.png',
      title: 'Complete Bikini',
      price: '€79',
      details: [],
    },
    {
      section: 'all',
      image: '12.png',
      title: 'Complete Body',
      price: '€169',
      details: [],
    },
  ];

  // Data for men's services
  const servicesMen = [
    {
      section: 'face',
      image: 'face.jpg',
      title: 'Complete Face',
      price: '€69',
      details: [
        { name: 'Nose', price: '€25' },
        { name: 'Eyebrow Bridge', price: '€25' },
        { name: 'Throat', price: '€40' },
        { name: 'Neck', price: '€45' },
      ],
    },
    {
      section: 'arms',
      image: 'arm.jpg',
      title: 'Complete Arms',
      price: '€69',
      details: [
        { name: 'Armpits', price: '€35' },
        { name: 'Fingers', price: '€20' },
        { name: 'Forearms', price: '€55' },
      ],
    },
    {
      section: 'legs',
      image: 'legs.jpg',
      title: 'Legs and Butt',
      price: '€79',
      details: [
        { name: 'Toes', price: '€30' },
        { name: 'Lower Legs', price: '€75' },
        { name: 'Upper Legs', price: '€70' },
      ],
    },
    {
      section: 'bikini',
      image: 'biki.jpg',
      title: 'Complete Bikini',
      price: '€79',
      details: [],
    },
    {
      section: 'chest',
      image: 'chest.jpg',
      title: 'Chest/Belly',
      price: '€99',
      details: [
        { name: 'Abdominal Line', price: '€35' },
        { name: 'Chest', price: '€50' },
        { name: 'Belly', price: '€70' },
      ],
    },
    {
      section: 'back',
      image: 'back.jpg',
      title: 'Back/Shoulders',
      price: '€99',
      details: [
        { name: 'Lower Back', price: '€50' },
        { name: 'Shoulders', price: '€65' },
      ],
    },
  ];

  const activeServices = activeTab === 'women' ? servicesWomen : servicesMen;

  const filteredServices =
    activeSubTab === 'all'
      ? activeServices
      : activeServices.filter((service) => service.section === activeSubTab);

  return (
    <div className="bg-black text-yellow-400 min-h-screen py-12">
      {/* Primary Tabs */}
      <div className="text-center mb-8">
        <button
          className={`text-2xl font-bold px-6 py-2 focus:outline-none ${
            activeTab === 'women'
              ? 'text-yellow-400 border-b-2 border-yellow-400'
              : 'text-gray-500'
          }`}
          onClick={() => {
            setActiveTab('women');
            setActiveSubTab('all');
          }}
        >
          Women
        </button>
        <button
          className={`text-2xl font-bold px-6 py-2 focus:outline-none ${
            activeTab === 'men'
              ? 'text-yellow-400 border-b-2 border-yellow-400'
              : 'text-gray-500'
          }`}
          onClick={() => {
            setActiveTab('men');
            setActiveSubTab('all');
          }}
        >
          Men
        </button>
      </div>

      {/* Secondary Tabs */}
      <div className="text-center mb-8">
        {['all', 'face', 'arms', 'legs', 'bikini', 'chest', 'back'].map(
          (section) => (
            <button
              key={section}
              className={`text-xl font-semibold px-4 py-2 mx-2 focus:outline-none ${
                activeSubTab === section
                  ? 'text-yellow-400 border-b-2 border-yellow-400'
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveSubTab(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          )
        )}
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {filteredServices.map((service, index) => (
          <div
            key={index}
            className="bg-black text-[#d6be20] rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
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
              </div>
              <button className="bg-gradient-to-r font-semibold from-[#e7cd22] via-[#b29f1f] to-[#373317] text-black py-2 px-4 rounded-md w-full md:w-auto mt-auto">
                Book now!
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
