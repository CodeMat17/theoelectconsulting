"use client";

import ThemeToggle from "@/components/theme/theme-toggle";
import { User } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const expertise = [
    {
      icon: "🌐",
      title: "Good Governance",
      points: [
        "Leadership Training",
        "Policy Development",
        "Institutional Reforms",
      ],
      desc: "We design compliance strategies to eliminate ethical risks.",
    },
    {
      icon: "⚖️",
      title: "Corruption Prevention",
      points: [
        "Fraud Investigation",
        "Risk Assessment",
        "Whistleblower Systems",
      ],
      desc: "Comprehensive frameworks to detect and prevent corruption.",
    },
    {
      icon: "🛡️",
      title: "Ethics Intelligence",
      points: [
        "Code of Conduct Design",
        "Ethical Audits",
        "Compliance Monitoring",
      ],
      desc: "Building ethical cultures through measurable interventions.",
    },
  ];

  const testimonials = [
    {
      name: "Federal Ministry of Justice",
      department: "Government Agency",
      note: "Theo-Elect's governance framework transformed our compliance processes, reducing ethical violations by 40% in the first year.",
    },
    {
      name: "First Bank Nigeria",
      department: "Financial Institution",
      note: "Their whistleblower system implementation helped us uncover and address critical fraud cases we weren't detecting before.",
    },
    {
      name: "NNPC Limited",
      department: "Energy Sector",
      note: "The ethical audits conducted by Theo-Elect provided actionable insights that improved our corporate governance rating.",
    },
    {
      name: "Lagos State Government",
      department: "State Government",
      note: "Their leadership training program for our civil servants has significantly improved service delivery and accountability",
    },
    {
      name: "EFCC",
      department: "Law Enforcement",
      note: "Theo-Elect's research has been invaluable in shaping our anti-corruption strategies and training programs.",
    },
    {
      name: "UNODC Nigeria",
      department: "International Organization",
      note: "Their local expertise combined with global best practices makes them an ideal partner for governance projects in Nigeria.",
    },
  ];

  const leadership = [
    {
      img: "/team/olukile.png",
      name: "Olukile Olusesan",
      position: "Chief Vision Driver & Ex-Commissioner (ICPC)",
      experience: [
        "M.Sc. Legal Criminology & Security Psychology, University of Ibadan",
        "35+ years experience spanning administration, investigation, and training",
        "Former Commissioner, Independent Corrupt Practices Commission (ICPC)",
        "Member, National Institute for Policy and Strategic Studies",
        "Expert in Security Psychology, Administration & Governance",
      ],
    },
    {
      img: "/team/dauda.png",
      name: "Dr. Bello Dauda O., fsi",
      position: "Director, Administration and Human Resources (ICPC)",
      experience: [
        "Ph.D. Political Economy & Development Studies",
        "Fellow, National Institute for Security Studies",
        "Expert in Anti-Corruption Strategy & Organizational Ethics",
        "Multiple Excellence Awards in Public Service",
      ],
    },
    {
      img: "/team/justin.jpg",
      name: "Justin Kuatsea",
      position: "Deputy Director (Rtd.), ICPC",
      experience: [
        "B.Sc. Political Science, Ahmadu Bello University",
        "Policy and Strategic Leadership - NIPSS, Kuru",
        "Former Head, Anti-Corruption & Transparency Unit, ICPC",
        "Expert in Policy Development and Anti-Corruption Strategies",
      ],
    },
    {
      img: "/team/ayo.jpg",
      name: "Barrister Ayo Oluwasina",
      position: "Legal and Management Consultant",
      experience: [
        "B.A. & Masters in Industrial Relations (OAU, UI)",
        "LLB Law, University of Ibadan",
        "25+ years consulting experience",
        "Specialist in Organizational Transformation",
      ],
    },
    {
      img: "",
      name: "Bako Gad Nathan",
      position: "Legal Expert, ICPC Leadership",
      experience: [
        "International training (RIPA, FBI)",
        "12+ years in anti-corruption enforcement",
        "Specializes in legal compliance",
      ],
    },
    {
      img: "/team/ilabor.jpg",
      name: "Ilabor Samuel",
      position: "Technical Director",
      experience: [
        "PhD in Public Administration",
        "8+ years in research and policy",
        "Data-driven solutions expert",
      ],
    },
    {
      img: "/team/olayinka.png",
      name: "Olayinka A. Aiyegbayo",
      position: "Security Psychologist, Ex-Commissioner",
      experience: [
        "Resident Commissioner, ICPC (Benue, Nasarawa, Plateau)",
        "Trainer in security, conflict resolution, and anti-corruption practices",
        "20+ years in law enforcement, security, and public administration",
      ],
    },
  ];

  return (
    <div className='w-full min-h-screen font-sans bg-white dark:bg-gray-900 text-navy-900 dark:text-white'>
      {/* Theme Toggle */}
      <div className='fixed bottom-8 right-8 z-50'>
        <ThemeToggle />
      </div>
      {/* Hero Section */}

      <header className='bg-navy-900 text-white'>
        {/* Navigation Bar */}
        <nav className='border-b border-white/10'>
          <div className='max-w-6xl mx-auto px-4 py-4'>
            <div className='flex justify-between items-center'>
              {/* Logo Section */}
              <div className='flex items-center gap-3'>
                <Image
                  alt='TheoElect Logo'
                  priority
                  width={60}
                  height={60}
                  src='/logo.png'
                  className='object-contain'
                />
                <div className='flex flex-col'>
                  <h1 className='font-bold text-2xl tracking-wide'>
                    TheoElect
                  </h1>
                  <p className='text-sm tracking-widest text-gold-500'>
                    Consulting
                  </p>
                </div>
              </div>

              {/* Contact Button */}
              <button className='bg-gold-500 hover:bg-gold-600 text-navy-900 font-medium py-2 px-6 rounded-lg transition-all'>
                <a href='mailto:theoelect@yahoo.com?subject=Consultation Request&body=Please provide details about your consultation needs.'>
                  Contact Us
                </a>
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className='max-w-4xl mx-auto px-4 py-20 text-center'>
          <h2 className='text-4xl md:text-5xl font-bold mb-6 leading-tight'>
            Driving Transparency, Accountability, and Ethical Excellence
          </h2>
          <p className='text-xl mb-10 text-gray-300'>
            Empowering institutions through strategic governance,
            anti-corruption frameworks, and ethical intelligence.
          </p>
          <button className='bg-white hover:bg-gray-100 text-navy-900 font-bold py-3 px-8 rounded-lg transition-all shadow-lg'>
            <a href='mailto:theoelect@yahoo.com?subject=Consultation Request&body=Please provide details about your consultation needs.'>
              Schedule a Consultation
            </a>
          </button>
        </div>
      </header>
      {/* About Us */}
      <section className='py-16 px-8 max-w-6xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-center'>Who We Are</h2>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div>
            <p className='text-lg mb-6'>
              A registered research and consultancy firm dedicated to systemic
              reforms, anti-corruption strategies, and ethical compliance across
              Nigeria and beyond.
            </p>
            <p className='mb-6'>
              We&apos;ve published 5 Quarterly Anti-Corruption Reports analyzing
              critical governance challenges and solutions.
            </p>
            {/* <Link href='/reports' className='text-gold-500 hover:underline'>
              Download Sample Reports →
            </Link> */}
          </div>
          <div className='py-8 rounded-lg flex justify-center'>
            <Image
              src='/aboutus.jpg'
              alt='About Theo-Elect'
              width={700}
              height={427}
              className='w-full aspect-video object-cover overflow-hidden rounded-xl'
            />
          </div>
        </div>
      </section>
      {/* Core Services */}
      <section className='py-16 bg-gray-100 dark:bg-navy-900'>
        <div className='max-w-6xl mx-auto px-8'>
          <h2 className='text-3xl font-bold mb-12 text-center'>
            Our Expertise
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4'>
            {expertise &&
              expertise.map((item, i) => (
                <div
                  key={i}
                  className='bg-white dark:bg-gray-600 p-8 rounded-lg shadow-md'>
                  <div className='text-4xl mb-4'>{item.icon}</div>
                  <h3 className='text-xl font-bold mb-4'>{item.title}</h3>
                  {item.points.map((point, i) => (
                    <ul key={i} className='list-disc pl-5 mb-1.5 space-y-2'>
                      <li>{point}</li>
                    </ul>
                  ))}

                  <p className='mt-3'>{item.desc}</p>
                </div>
              ))}
          </div>
        </div>
      </section>
      {/* Transformation Section */}
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
                      Pinpoint areas prone to corruption and assess the
                      likelihood of corrupt practices.
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
                      Implement measures to increase openness and
                      accountability, reducing opportunities for corrupt
                      activities.
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
                  institutions can proactively address potential corruption
                  risks and promote a more transparent and accountable
                  environment.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Reports Showcase */}
      <section className='py-16 px-8 max-w-6xl mx-auto'>
        <h2 className='text-3xl font-bold mb-12 text-center'>
          Quarterly Anti-Corruption Insights
        </h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {[1, 2, 3, 4, 5].map((edition) => (
            <div
              key={edition}
              className='bg-gray-100 dark:bg-gray-700 rounded-lg p-6 hover:shadow-md transition'>
              <h3 className='font-bold text-lg mb-2'>Edition {edition}</h3>
              <p className='text-sm text-gray-600 dark:text-gray-400 mb-4'>
                Public Institutions & Anti-Corruption Measures
              </p>
              <p className='text-sm'>
                Strategies to curb systemic excesses in government agencies.
              </p>
              <button className='mt-4 text-gold-500 text-sm font-medium hover:underline'>
                View Report
              </button>
            </div>
          ))}
        </div>
      </section>
      {/* Team Section */}
      <section className='py-16 bg-navy-900 text-white'>
        <div className='max-w-6xl mx-auto px-8'>
          <h2 className='text-3xl font-bold mb-12 text-center'>
            Our Leadership
          </h2>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {leadership &&
              leadership.map((item, i) => (
                <div
                  key={i}
                  className='bg-white/10 p-6 rounded-lg backdrop-blur-sm'>
                  {item.img ? (
                    <div className='relative w-24 h-24 rounded-full overflow-hidden mb-4 mx-auto '>
                      <Image alt='' fill src={item.img} />
                    </div>
                  ) : (
                    <div className='flex items-center justify-center w-24 h-24 mx-auto rounded-full bg-gray-600 mb-4'>
                      <User size={50} />
                    </div>
                  )}

                  <h3 className='text-xl font-bold mb-2 text-center'>
                    {item.name}
                  </h3>
                  <p className='text-sm text-center mb-4'>{item.position}</p>
                  {item.experience.map((exp, i) => (
                    <ul key={i} className='mb-2'>
                      <li>• {exp}</li>
                    </ul>
                  ))}
                </div>
              ))}
          </div>
          <div className='text-center mt-12'>
            <button className='bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold py-3 px-8 rounded-lg transition'>
              Learn How We Can Transform Your Institution
            </button>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
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
                Our team brings decades of practical experience in governance
                and compliance.
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
              <h3 className='font-bold'>
                Global insights, local implementation
              </h3>
              <p className='text-gray-600'>
                We adapt international best practices to Nigeria&apos;s unique
                context.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='py-16 bg-gray-100 dark:bg-navy-900'>
        <div className='max-w-6xl mx-auto px-8'>
          <h2 className='text-3xl font-bold mb-12 text-center'>
            What Our Clients Say
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {testimonials &&
              testimonials.map((client, i) => (
                <div
                  key={i}
                  className='bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md'>
                  <div className='flex items-center mb-4'>
                    <div className='w-12 h-12 bg-gray-300 rounded-full mr-4'></div>
                    <div>
                      <h3 className='font-bold'>{client.name}</h3>
                      <p className='text-sm'>{client.department}</p>
                    </div>
                  </div>
                  <p className='italic'>{client.note}</p>
                </div>
              ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}

      {/* Contact Section */}
      <section className='py-16 bg-gray-50 dark:bg-gray-900'>
        <div className='max-w-4xl mx-auto px-8'>
          <h2 className='text-3xl font-bold mb-8 text-center'>
            Ready to Build a Transparent Future?
          </h2>
          {/* <form className='grid md:grid-cols-2 gap-6'>
            <div>
              <label className='block mb-2 font-medium'>Name</label>
              <input type='text' className='w-full p-3 border rounded-lg' />
            </div>
            <div>
              <label className='block mb-2 font-medium'>Email</label>
              <input type='email' className='w-full p-3 border rounded-lg' />
            </div>
            <div className='md:col-span-2'>
              <label className='block mb-2 font-medium'>Institution</label>
              <input type='text' className='w-full p-3 border rounded-lg' />
            </div>
            <div className='md:col-span-2'>
              <label className='block mb-2 font-medium'>Message</label>
              <textarea
                rows={4}
                className='w-full p-3 border rounded-lg'></textarea>
            </div>
            <button className='md:col-span-2 bg-navy-900 hover:bg-navy-800 text-white font-bold py-3 px-8 rounded-lg transition'>
              Send Message
            </button>
          </form> */}

          <div className='mt-12 grid md:grid-cols-2 gap-8 items-center'>
            <button className='bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold py-3 px-8 rounded-lg transition'>
              <a href='mailto:theoelect@yahoo.com?subject=Consultation Request&body=Please provide details about your consultation needs.'>
                Sean a Message
              </a>
            </button>
            <div>
              <h3 className='font-bold mb-4'>Our Office</h3>
              <p>B32, Post Service Housing Scheme,</p>
              <p>Eleyele. Ibadan,</p>
              <p className=''>Oyo, State</p>
            </div>
            {/* <div>
              <h3 className='font-bold mb-4'>Bank Details</h3>
              <p>Theo-Elect Global Consulting Ltd</p>
              <p>UBA: 1234567890</p>
              <p className='mt-2'>For report purchases and consultations</p>
            </div> */}
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className='bg-navy-900 text-white py-12 px-8'>
        {/* <div className='max-w-6xl mx-auto grid md:grid-cols-4 gap-8'>
          <div>
            <h3 className='font-bold mb-4'>Services</h3>
            <ul className='space-y-2'>
              <li>
                <Link href='#' className='hover:underline'>
                  Good Governance
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:underline'>
                  Corruption Prevention
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:underline'>
                  Ethics Intelligence
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='font-bold mb-4'>Reports</h3>
            <ul className='space-y-2'>
              <li>
                <Link href='#' className='hover:underline'>
                  Latest Edition
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:underline'>
                  Archive
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:underline'>
                  Methodology
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='font-bold mb-4'>Company</h3>
            <ul className='space-y-2'>
              <li>
                <Link href='#' className='hover:underline'>
                  About Us
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:underline'>
                  Our Team
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:underline'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='font-bold mb-4'>Connect</h3>
            <div className='flex gap-4'>
              <Link href='#'>
                <Image
                  src='/linkedin.svg'
                  alt='LinkedIn'
                  width={24}
                  height={24}
                />
              </Link>
              <Link href='#'>
                <Image
                  src='/twitter.svg'
                  alt='Twitter'
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
        </div> */}
        <div className='max-w-6xl mx-auto pt-'>
          <p className='text-sm text-center'>
            © {new Date().getFullYear()} Theo-Elect Global Consulting Ltd. All
            rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
