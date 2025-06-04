const Testimonials = () => {
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

  return (
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
  );
};

export default Testimonials;
