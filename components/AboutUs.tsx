import Image from 'next/image';

const AboutUs = () => {
  return (
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
  );
}

export default AboutUs