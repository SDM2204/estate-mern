import React, { useState } from 'react';
import teamMemberImage from '../assets/clg-blue.png';

export default function About() {
  const [hoveredProfile, setHoveredProfile] = useState(null);
  

  return (
    <div className='py-20 px-6 max-w-7xl mx-auto'>
      {/* Header Section */}
      <header className='text-center mb-16'>
        <h1 className='text-4xl md:text-5xl font-extrabold text-gray-900 mb-4'>About Mandal Estate</h1>
        <p className='text-lg md:text-xl text-gray-600'>Bringing you the finest in real estate with unparalleled expertise and dedication.</p>
      </header>

      {/* Mission Section */}
      <section className='flex flex-col md:flex-row items-center mb-16'>
        <div className='md:w-1/2 mb-8 md:mb-0'>
          <h2 className='text-3xl font-semibold text-gray-900 mb-6'>Our Mission</h2>
          <p className='text-base md:text-lg text-gray-700 leading-relaxed my-2 max-w-xl py-6'>
            At Mandal Estate, our mission is to redefine the real estate experience with unparalleled expertise and personalized service. We are committed to guiding our clients through every step of their journey with professionalism and care.
          </p>
        </div>
        <div className='md:w-1/2'>
          <img src='https://www.zillowstatic.com/bedrock/app/uploads/sites/2/2024/02/2024_About-Zillow-page_Browsing_1.png' alt='Mission' className='w-full h-auto object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105' />
        </div>
      </section>

      {/* Our Story Section */}
      <section className='mb-16'>
        <h2 className='text-3xl font-semibold text-gray-900 mb-6'>Our Story</h2>
        <p className='text-base md:text-lg text-gray-700 leading-relaxed'>
          Founded on the principles of integrity and excellence, Mandal Estate has evolved from a small team of dedicated professionals into a premier real estate agency. Our story is characterized by passion, commitment, and a relentless drive to surpass our clients' expectations.
        </p>
      </section>

      {/* Team Section */}
      <section className='bg-gray-100 py-16 shadow-lg rounded-lg mb-16'>
        <div className='text-center mb-10'>
          <h2 className='text-3xl font-semibold text-gray-900 mb-4'>Meet the Team</h2>
          <p className='text-base md:text-lg text-gray-600'>Our experienced team is here to make your real estate journey smooth and successful.</p>
        </div>
        <div className='relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          {/* Team Member */}
          <div
            className={`relative text-center transition-transform transform ${hoveredProfile === 1 ? 'scale-105 z-10' : 'scale-100'} ${hoveredProfile && hoveredProfile !== 1 ? 'blur-sm' : ''}`}
            onMouseEnter={() => setHoveredProfile(1)}
            onMouseLeave={() => setHoveredProfile(null)}
          >
            <img src={teamMemberImage} alt='Team Member' className='w-32 h-32 rounded-full mx-auto mb-4 shadow-md transition-transform transform' />
            <h3 className='text-lg font-semibold text-gray-900 mb-1'>Swapna Dip Mandal</h3>
            <p className='text-gray-600'>Developer</p>
          </div>
          {/* Team Member */}
          <div
            className={`relative text-center transition-transform transform ${hoveredProfile === 2 ? 'scale-105 z-10' : 'scale-100'} ${hoveredProfile && hoveredProfile !== 2 ? 'blur-sm' : ''}`}
            onMouseEnter={() => setHoveredProfile(2)}
            onMouseLeave={() => setHoveredProfile(null)}
          >
            <img src='https://www.janesmitheditor.com/uploads/3/1/8/3/31835563/published/06-janesmith-2019_1.jpg?1626576973' alt='Team Member' className='w-32 h-32 rounded-full mx-auto mb-4 shadow-md transition-transform transform' />
            <h3 className='text-lg font-semibold text-gray-900 mb-1'>Jane Smith</h3>
            <p className='text-gray-600'>Senior Agent</p>
          </div>
          {/* Team Member */}
          <div
            className={`relative text-center transition-transform transform ${hoveredProfile === 3 ? 'scale-105 z-10' : 'scale-100'} ${hoveredProfile && hoveredProfile !== 3 ? 'blur-sm' : ''}`}
            onMouseEnter={() => setHoveredProfile(3)}
            onMouseLeave={() => setHoveredProfile(null)}
          >
            <img src='https://d2gjqh9j26unp0.cloudfront.net/profilepic/a21935363f6d5670bf8aba32bb01d4cb' alt='Team Member' className='w-32 h-32 rounded-full mx-auto mb-4 shadow-md transition-transform transform' />
            <h3 className='text-lg font-semibold text-gray-900 mb-1'>Mike Johnson</h3>
            <p className='text-gray-600'>Marketing Specialist</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className='text-center mb-16'>
        <h2 className='text-3xl font-semibold text-gray-900 mb-6'>Get in Touch</h2>
        <p className='text-lg text-gray-600 mb-6'>
          Have questions or want to start your real estate journey? We’re here to help. Contact us today!
        </p>
        <a href='/contact' className='inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors'>
          Contact Us
        </a>
      </section>
    </div>
  );
}
