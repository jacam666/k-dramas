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
                    The Kings Affection
                </h1>

                {/* Description Section */}
                <div className="max-w-4xl mx-auto text-lg md:text-xl text-gray-200 leading-relaxed mb-12">
                    <p>
                        The King's Affection is a historical romance K-Drama set in the Joseon Dynasty, where societal rules and royal secrets collide. The story follows a young woman, Dam-i, who is forced to assume the identity of her twin brother, the crown prince, after his untimely death. Living as Lee Hwi, she must conceal her true identity to survive in a male-dominated palace — all while navigating the complexities of court politics, loyalty, and forbidden love.

                        As she rises to power, Lee Hwi forms a close bond with her royal tutor, Jung Ji-woon, who has no idea of her true identity. Their growing connection is as dangerous as it is heartfelt, testing the boundaries of gender, duty, and love in a world that demands silence and sacrifice.
                    </p>
                    <p className="mt-4">
                        With breathtaking costumes, palace intrigue, and a slow-burning romance at its heart, The King's Affection offers a bold twist on historical drama, blending emotional storytelling with themes of identity, honor, and resilience.
                    </p>
                </div>

                {/* Image Gallery Placeholder */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="rounded-lg overflow-hidden shadow-lg bg-black">
                        <Image
                            src="/images/kings-image-1.webp"
                            alt="Alchemy of Souls Scene 1"
                            width={500}
                            height={300}
                            className="w-full h-[300px] object-contain"
                        />
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-lg bg-black">
                        <video
                            src="/videos/affection-video-1.mp4"
                            controls
                            className="w-full h-[300px] object-contain"
                        />
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-lg bg-black">
                        <Image
                            src="/images/kings-image-3.webp"
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
