import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-navy-900 text-white py-12 px-8'>
      <div className='max-w-6xl mx-auto pt-'>
        <p className='text-sm text-center'>
          © {new Date().getFullYear()} Theo-Elect Global Consulting Ltd. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer