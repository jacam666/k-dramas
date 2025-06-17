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
            <div className="relative z-10 px-4 md:px-20 py-6 backdrop-blur-sm">
                {/* Title */}
                <h1 className="text-4xl md:text-6xl text-center mb-8">
                    Dear Hongrang
                </h1>

                {/* Description Section */}
                <div className="max-w-4xl mx-auto text-lg md:text-xl text-gray-200 leading-relaxed mb-12">
                    <p>
                        Hong-rang was born into an influential merchant family and disappeared without a trace as a child. More than a decade passes until Hong-rang suddenly reappears without any memory of the last few years. While part of the family is overjoyed about Hong-rang's return, the other half has doubts about the young man's identity. In the course of the story, the abysses within the family that have opened up in the past and influence the present are revealed, while a family member goes in search of the truth in order to clarify the events around Hong-rang.
                    </p>
                    <p className="mt-4">
                        
                    </p>
                </div>

                {/* Image Gallery Placeholder */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="rounded-lg overflow-hidden shadow-lg bg-black">
                        <Image
                            src="/images/hongrang-image-1.jpg"
                            alt="hongrang Scene 1"
                            width={500}
                            height={300}
                            className="w-full h-[300px] object-contain"
                        />
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-lg bg-black">
                        <video
                            src="/videos/hongrang-video-1.mp4"
                            controls
                            className="w-full h-[300px] object-contain"
                        />
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-lg bg-black">
                        <Image
                            src="/images/hongrang-image-3.jpg"
                            alt="hongrang Scene 3"
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
