import React from 'react'

const HeroContent = () => {
  return (
    <div className='max-w-4xl mx-auto px-4 py-20 text-center'>
      <h2 className='text-4xl md:text-5xl font-bold mb-6 leading-tight'>
        Driving Transparency, Accountability, and Ethical Excellence
      </h2>
      <p className='text-xl mb-10 text-gray-300'>
        Empowering institutions through strategic governance, anti-corruption
        frameworks, and ethical intelligence.
      </p>
      <button className='bg-white hover:bg-gray-100 text-navy-900 font-bold py-3 px-8 rounded-lg transition-all shadow-lg'>
        <a href='mailto:theoelect@yahoo.com?subject=Consultation Request&body=Please provide details about your consultation needs.'>
          Schedule a Consultation
        </a>
      </button>
    </div>
  );
}

export default HeroContent