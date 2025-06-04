import React from 'react'

const ContactSection = () => {
  return (
    <section className='py-16 bg-gray-50 dark:bg-gray-900'>
      <div className='max-w-4xl mx-auto px-8'>
        <h2 className='text-3xl font-bold mb-8 text-center'>
          Ready to Build a Transparent Future?
        </h2>

        <div className='mt-12 grid md:grid-cols-2 gap-8 items-center'>
          <button className='bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold py-3 px-8 rounded-lg transition'>
            <a href='mailto:theoelect@yahoo.com?subject=Consultation Request&body=Please provide details about your consultation needs.'>
              Send a Message
            </a>
          </button>
          <div>
            <h3 className='font-bold mb-4'>Our Office</h3>
            <p>B32, Post Service Housing Scheme,</p>
            <p>Eleyele. Ibadan,</p>
            <p className=''>Oyo, State</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection