import { User } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const TeamSection = () => {

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
    <section className='py-16 bg-navy-900 text-white'>
      <div className='max-w-6xl mx-auto px-8'>
        <h2 className='text-3xl font-bold mb-12 text-center'>Our Leadership</h2>
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
  );
}

export default TeamSection