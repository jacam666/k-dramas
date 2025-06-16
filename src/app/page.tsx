// import Image from 'next/image';
import Image from 'next/image';
import DramaCarousel from './components/DramaCarousel';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col bg-black h-full">
      <div className='bg-black flex justify-center items-center'>
        <Image
          src="/images/logo-removebg-preview.png"
          alt="Background Image"
          width={920}
          height={920}
          className="w-1/3 h-36 bg-black object-contain shadow-lg"
        />
      </div>
      <div className="flex flex-col items-center w-full  bg-center bg-cover opacity-90 rounded-lg shadow-lg"
      // style={{ backgroundImage: "url('/images/bg-image-3.jpeg')" }}
      >
        <h1 className="font-[var(--font-caprasimo)] text-4xl xl:text-7xl text-gray-50 font-bold ">CAI-DRAMAS</h1>
        <p className="font-[var(--font-caprasimo)] text-gray-50 xl:text-4xl text-xl font-semibold  text-center p-4">
          A LIST OF OUR FAVOURITE <br />K-DRAMAS
        </p>
      </div>
      {/* <div className='flex justify-center items-center mb-8'>
        <Image
          src="/images/bg-image-3.jpeg"
          alt="Background Image"
          width={1920}
          height={1080}
          className="w-full h-60 object-cover opacity-90 rounded-lg shadow-lg"
        />
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2 md:p-10">
        <div>
          <DramaCarousel images={[
            '/images/alchemy-image-2.jpeg',
            '/images/alchemy-image-3.jpg',
            '/images/alchemy-image-4.webp',
            // '/images/alchemy-image-5.jpeg',
            '/images/alchemy-image-6.webp',
            '/images/alchemy-image-7.webp',
          ]} />
          <h2 className='text-xl text-white font-bold text-center'>Alchemy Of Souls</h2>
        </div>

        <div>
          <DramaCarousel images={[
            '/images/kings-image-1.webp',
            '/images/kings-image-2.webp',
            '/images/kings-image-3.webp',
            '/images/kings-image-4.webp',
            '/images/kings-image-5.jpg',
          ]} />
          <h2 className='text-xl text-white font-bold text-center'>The Kings Affection</h2>
        </div>

        <div>
          <DramaCarousel images={[
            '/images/hongrang-image-3.jpg',
            '/images/hongrang-image-2.webp',
            '/images/hongrang-image-4.webp',
            '/images/hongrang-image-5.jpg',
          ]} />
          <h2 className='text-xl text-white font-bold text-center'>Dear Hongrang</h2>
        </div>

        <div>
          <DramaCarousel images={[
            // '/images/woo-image-1.jpg',
            '/images/woo-image-2.jpg',
            '/images/woo-image-3.png',
            '/images/woo-image-4.webp',
          ]} />
          <h2 className='text-xl text-white font-bold text-center'>Extraordinary Attorney Woo</h2>
        </div>

        <div>
          <DramaCarousel images={[
            '/images/plankton-image-1.webp',
            '/images/plankton-image-2.webp',
            '/images/plankton-image-3.webp',
          ]} />
          <h2 className='text-xl text-white font-bold text-center'>Mr Plankton</h2>
        </div>

        <div>
          <DramaCarousel images={[
            '/images/vincenzo-image-2.webp',
            '/images/vincenzo-image-3.jpg',
            '/images/vincenzo-image-4.webp',
          ]} />
          <h2 className='text-xl text-white font-bold text-center'>Vincenzo</h2>
        </div>

        <div>
          <DramaCarousel images={[
            '/images/weak-hero-image-1.jpg',
            '/images/weak-hero-image-3.webp',
            '/images/weak-hero-image-4.webp',
          ]} />
          <h2 className='text-xl text-white font-bold text-center'>Weak Hero</h2>
        </div>

        <div>
          <DramaCarousel images={[
            // '/images/hometown-image-1.jpg',
            '/images/hometown-image-2.jpg',
            '/images/hometown-image-3.webp',
            '/images/hometown-image-4.webp',
          ]} />
          <h2 className='text-xl text-white font-bold text-center'>Hometown Cha Cha Cha</h2>
        </div>

        <div>
          <DramaCarousel images={[
            '/images/diva-image-1.jpg',
            '/images/diva-image-2.jpg',
            '/images/diva-image-3.png',
            '/images/diva-image-4.webp',
          ]} />
          <h2 className='text-xl text-white font-bold text-center'>Castaway Diva</h2>
        </div>
      </div>
      <Footer />
    </div>
  );
}
