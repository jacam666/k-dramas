'use client';

import Image from 'next/image';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function AlchemyPage() {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <Link href="/">
                <div className='bg-black flex justify-center items-center'>
                    <Image
                        src="/images/logo-removebg-preview.png"
                        alt="Background Image"
                        width={920}
                        height={920}
                        className="w-1/3 h-36 bg-black object-contain shadow-lg"
                    />
                </div>
            </Link>

            {/* 🔹 Overlay Content */}
            <div className="relative z-10 px-4 md:px-20 py-6 backdrop-blur-sm">
                {/* Title */}
                <h1 className="text-4xl md:text-6xl font-bold  text-center mb-8">
                    Extraordinary Attorney Woo
                </h1>

                {/* Description Section */}
                <div className="max-w-4xl mx-auto text-lg md:text-xl text-gray-200 leading-relaxed mb-12">
                    <p>
                        It follows Woo Young-woo, an autistic female rookie attorney hired by a major law firm in Seoul. Because she is different from her neurotypical peers, her manner of communication is seen by them as odd, awkward, and blunt. With each legal case and through her intelligence and photographic memory, she becomes an increasingly competent attorney and earns recognition from other legal professionals and appreciation from her clients.
                    </p>
                    {/* <p className="mt-4">
                        With breathtaking visuals, intense magical combat, and layered character development, this
                        series explores themes of destiny, loyalty, love, and power.
                    </p> */}
                </div>

                {/* Image Gallery Placeholder */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="rounded-lg overflow-hidden shadow-lg bg-black">
                        <Image
                            src="/images/woo-image-2.jpg"
                            alt="Alchemy of Souls Scene 1"
                            width={500}
                            height={300}
                            className="w-full h-[300px] object-contain"
                        />
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-lg bg-black">
                        <video
                            src="/videos/woo-video-1.mp4"
                            controls
                            className="w-full h-[300px] object-contain"
                        />
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-lg bg-black">
                        <Image
                            src="/images/woo-image-3.png"
                            alt="Alchemy of Souls Scene 3"
                            width={500}
                            height={300}
                            className="w-full h-[300px] object-contain"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
