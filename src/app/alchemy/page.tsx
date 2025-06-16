'use client';

import Image from 'next/image';
import Footer from '../components/Footer';

export default function AlchemyPage() {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <div className='bg-black flex justify-center items-center'>
                <Image
                    src="/images/logo-removebg-preview.png"
                    alt="Background Image"
                    width={920}
                    height={920}
                    className="w-1/3 h-36 bg-black object-contain shadow-lg"
                />
            </div>
            {/* 🔹 Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
                style={{ backgroundImage: "url('/images/alchemy-bg.jpg')" }}
            ></div>

            {/* 🔹 Overlay Content */}
            <div className="relative z-10 px-4 md:px-20 py-6 backdrop-blur-sm">
                {/* Title */}
                <h1 className="text-4xl md:text-6xl font-bold font-[var(--font-caprasimo)] text-center mb-8">
                    Alchemy of Souls
                </h1>

                {/* Description Section */}
                <div className="max-w-4xl mx-auto text-lg md:text-xl text-gray-200 leading-relaxed mb-12">
                    <p>
                        *Alchemy of Souls* is a captivating fantasy K-Drama that follows the lives of powerful
                        mages whose fates become twisted due to a forbidden magic called the “alchemy of souls.”
                        Set in the fictional country of Daeho, the story centers around Jang Uk, a young nobleman
                        born under a mysterious secret, and Mu-deok, a fierce assassin trapped in a frail body.
                    </p>
                    <p className="mt-4">
                        With breathtaking visuals, intense magical combat, and layered character development, this
                        series explores themes of destiny, loyalty, love, and power.
                    </p>
                </div>

                {/* Image Gallery Placeholder */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Replace these with your own images later */}
                    <div className="rounded-lg overflow-hidden shadow-lg bg-black">
                        <Image
                            src="/images/alchemy-image-2.jpeg"
                            alt="Alchemy of Souls Scene 1"
                            width={500}
                            height={300}
                            className="w-full h-[300px] object-contain"
                        />
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-lg bg-black">
                        <video
                            src="/videos/alchemy-video-1.mp4"
                            controls
                            className="w-full h-[300px] object-contain"
                            // poster="/images/alchemy-image-2.jpeg"
                        />
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-lg bg-black">
                        <Image
                            src="/images/alchemy-image-3.jpg"
                            alt="Alchemy of Souls Scene 3"
                            width={500}
                            height={300}
                            className="w-full h-[300px] object-contain"
                        />
                    </div>
                </div>
                <h2>
                    <span className="font-[var(--font-caprasimo)] text-2xl md:text-3xl bg-gray-900 rounded p-4  mt-8 block text-center">
                        Caidee Cameron we need a season 3 of Alchemy of Souls!!!!!
                    </span>
                </h2>
            </div>
            <Footer />
        </div>
    );
}
