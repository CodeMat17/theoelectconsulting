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
    points: ["Fraud Investigation", "Risk Assessment", "Whistleblower Systems"],
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


const CoreServices = () => {
  return (
    <section className='py-16 bg-gray-100 dark:bg-navy-900'>
      <div className='max-w-6xl mx-auto px-8'>
        <h2 className='text-3xl font-bold mb-12 text-center'>Our Expertise</h2>
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
  );
};

export default CoreServices;
