import React from 'react'

const WhyChooseUs = () => {
  return (
    <section className='py-16 px-8 max-w-4xl mx-auto'>
      <h2 className='text-3xl font-bold mb-12 text-center'>
        Why Partner With Theo-Elect?
      </h2>
      <div className='space-y-6'>
        <div className='flex items-start gap-4'>
          <span className='text-2xl'>🏆</span>
          <div>
            <h3 className='font-bold'>
              35+ years of combined anti-corruption expertise
            </h3>
            <p className='text-gray-600'>
              Our team brings decades of practical experience in governance and
              compliance.
            </p>
          </div>
        </div>
        <div className='flex items-start gap-4'>
          <span className='text-2xl'>📊</span>
          <div>
            <h3 className='font-bold'>
              Proven frameworks from 5+ Quarterly Reports
            </h3>
            <p className='text-gray-600'>
              Research-backed strategies that deliver measurable results.
            </p>
          </div>
        </div>
        <div className='flex items-start gap-4'>
          <span className='text-2xl'>🌍</span>
          <div>
            <h3 className='font-bold'>Global insights, local implementation</h3>
            <p className='text-gray-600'>
              We adapt international best practices to Nigeria&apos;s unique
              context.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs