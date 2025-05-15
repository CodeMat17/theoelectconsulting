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
      img: "/olukile.png",
      name: "Olukile Olusesan",
      position: "Security Psychologist, Ex-Commissioner",
      experience: [
        "M.Sc. Legal Criminology",
        "Member, National Institute for Policy and Strategic Studies",
        ,
        "15+ years in governance consulting",
      ],
    },
    {
      img: "",
      name: "Bako Gad Nathan",
      position: "Legal Expert, ICPC Leadership",
      experience: [
        "International training (RIPA, FBI)",
        "12+ years in anti-corruption enforcement",
        ,
        "Specializes in legal compliance",
      ],
    },
    {
      img: "",
      name: "Ilabor Samuel",
      position: "Technical Director",
      experience: [
        "PhD in Public Administration",
        "8+ years in research and policy",
        ,
        "Data-driven solutions expert",
      ],
    },
    {
      img: "",
      name: "Olayinka A. Aiyegbayo ",
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
      <header className='bg-navy-900 text-white py-20 px-8 text-center'>
        <div className='max-w-4xl mx-auto'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            Driving Transparency, Accountability, and Ethical Excellence
          </h1>
          <p className='text-xl mb-8'>
            Empowering institutions through strategic governance,
            anti-corruption frameworks, and ethical intelligence.
          </p>
          <button className='bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold py-3 px-8 rounded-lg transition'>
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
                  {item.img ? <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 mx-auto "><Image alt='' fill src={item.img} /></div> : <div className="flex items-center justify-center w-24 h-24 mx-auto rounded-full bg-gray-600 mb-4"><User size={50} /></div>}
                  
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
              <p>123 Governance Avenue, Abuja, Nigeria</p>
              <p className='mt-2'>Global reach with local expertise</p>
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
