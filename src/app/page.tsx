import Image from 'next/image';
import DramaCarousel from './components/DramaCarousel';

export default function Home() {
  return (
    <div className="flex flex-col bg-black h-full">
      <div className="flex flex-col items-center pt-10 w-full  bg-center bg-cover opacity-90 rounded-lg shadow-lg"
      // style={{ backgroundImage: "url('/images/bg-image-3.jpeg')" }}
      >
        <h1 className="font-Caprasimo text-3xl xl:text-7xl text-gray-50 font-bold">CAI-DRAMAS</h1>
        <p className="text-gray-50 xl:text-4xl text-xl font-semibold text-center p-4">
          A LIST OF OUR FAVOURITE <br />K-DRAMAS
        </p>
      </div>
      <div>
        <Image
          src="/images/bg-image-3.jpeg"
          alt="Background Image"
          width={1920}
          height={1080}
          className="w-full h-60 object-cover opacity-90 rounded-lg shadow-lg"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2 md:p-10">
        <div>
          <h2 className='text-xl text-white font-bold text-center'>Alchemy Of Souls</h2>
          <DramaCarousel images={[
            '/images/alchemy-image-2.jpeg',
            '/images/alchemy-image-3.jpg',
            '/images/alchemy-image-4.webp',
            // '/images/alchemy-image-5.jpeg',
            '/images/alchemy-image-6.webp',
            '/images/alchemy-image-7.webp',
          ]} />
        </div>

        <div>
          <h2 className='text-xl text-white font-bold text-center'>Dear Hongrang</h2>
          <DramaCarousel images={[
            '/images/hongrang-image-3.jpg',
            '/images/hongrang-image-2.webp',
            '/images/hongrang-image-4.webp',
            '/images/hongrang-image-5.jpg',
          ]} />
        </div>

        <div>
          <h2 className='text-xl text-white font-bold text-center'>Extraordinary Attorney Woo</h2>
          <DramaCarousel images={[
            // '/images/woo-image-1.jpg',
            '/images/woo-image-2.jpg',
            '/images/woo-image-3.png',
            '/images/woo-image-4.webp',
          ]} />
        </div>

        <div>
          <h2 className='text-xl text-white font-bold text-center'>Vincenzo</h2>
          <DramaCarousel images={[
            // '/images/vincenzo-image-1.jpg',
            '/images/vincenzo-image-2.webp',
            '/images/vincenzo-image-3.jpg',
            '/images/vincenzo-image-4.webp',
          ]} />
        </div>

        <div>
          <h2 className='text-xl text-white font-bold text-center'>Weak Hero</h2>
          <DramaCarousel images={[
            '/images/weak-hero-image-1.jpg',
            '/images/weak-hero-image-3.webp',
            '/images/weak-hero-image-4.webp',
          ]} />
        </div>

        <div>
          <h2 className='text-xl text-white font-bold text-center'>Hometown Cha Cha Cha</h2>
          <DramaCarousel images={[
            // '/images/hometown-image-1.jpg',
            '/images/hometown-image-2.jpg',
            '/images/hometown-image-3.webp',
            '/images/hometown-image-4.webp',
          ]} />
        </div>
      </div>
    </div>
  );
}
