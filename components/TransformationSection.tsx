import React from 'react'

const TransformationSection = () => {
  return (
    <section className='py-20 bg-white dark:bg-gray-800'>
      <div className='max-w-6xl mx-auto px-8'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left Column - Content */}
          <div>
            <h2 className='text-3xl font-bold mb-6 text-navy-900 dark:text-white'>
              Transformation through Corruption Risk Assessment
            </h2>
            <p className='text-gray-600 dark:text-gray-300 mb-8 text-lg'>
              We help public institutions implement comprehensive corruption
              risk assessment frameworks that drive meaningful transformation
              and establish lasting integrity.
            </p>

            <div className='space-y-6'>
              <div className='flex items-start gap-4 group'>
                <div className='w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/20 transition-all'>
                  <svg
                    className='w-6 h-6 text-gold-500'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                    />
                  </svg>
                </div>
                <div>
                  <h3 className='font-semibold text-lg mb-2 text-navy-900 dark:text-white'>
                    Identify Vulnerabilities
                  </h3>
                  <p className='text-gray-600 dark:text-gray-300'>
                    Pinpoint areas prone to corruption and assess the likelihood
                    of corrupt practices.
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4 group'>
                <div className='w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/20 transition-all'>
                  <svg
                    className='w-6 h-6 text-gold-500'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
                    />
                  </svg>
                </div>
                <div>
                  <h3 className='font-semibold text-lg mb-2 text-navy-900 dark:text-white'>
                    Develop Targeted Strategies
                  </h3>
                  <p className='text-gray-600 dark:text-gray-300'>
                    Create tailored plans to mitigate identified corruption
                    risks and strengthen internal controls.
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4 group'>
                <div className='w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/20 transition-all'>
                  <svg
                    className='w-6 h-6 text-gold-500'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                    />
                  </svg>
                </div>
                <div>
                  <h3 className='font-semibold text-lg mb-2 text-navy-900 dark:text-white'>
                    Enhance Transparency
                  </h3>
                  <p className='text-gray-600 dark:text-gray-300'>
                    Implement measures to increase openness and accountability,
                    reducing opportunities for corrupt activities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Additional Points */}
          <div className='bg-navy-900 text-white rounded-2xl p-8 shadow-xl'>
            <h3 className='text-xl font-semibold mb-6'>
              Additional Transformation Pillars
            </h3>
            <div className='space-y-6'>
              <div className='flex items-start gap-4'>
                <div className='w-8 h-8 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0'>
                  <svg
                    className='w-4 h-4 text-gold-500'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                </div>
                <div>
                  <h4 className='font-semibold mb-2'>Improve Governance</h4>
                  <p className='text-gray-300'>
                    Strengthen institutional frameworks, policies, and
                    procedures to prevent corruption.
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='w-8 h-8 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0'>
                  <svg
                    className='w-4 h-4 text-gold-500'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                </div>
                <div>
                  <h4 className='font-semibold mb-2'>
                    Promote Integrity Culture
                  </h4>
                  <p className='text-gray-300'>
                    Foster a culture that values ethics, integrity, and
                    accountability among employees.
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='w-8 h-8 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0'>
                  <svg
                    className='w-4 h-4 text-gold-500'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                    />
                  </svg>
                </div>
                <div>
                  <h4 className='font-semibold mb-2'>Monitor and Evaluate</h4>
                  <p className='text-gray-300'>
                    Regularly assess the effectiveness of anti-corruption
                    measures and make adjustments as needed.
                  </p>
                </div>
              </div>
            </div>

            <div className='mt-8 pt-6 border-t border-white/10'>
              <p className='text-gray-300 italic'>
                &ldquo;By incorporating corruption risk assessment, public
                institutions can proactively address potential corruption risks
                and promote a more transparent and accountable
                environment.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TransformationSection