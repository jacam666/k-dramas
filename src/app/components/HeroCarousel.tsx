'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

const images = [
    '/images/bg-image-1.jpeg',
    '/images/bg-image-2.jpeg',
    '/images/bg-image-3.jpeg',
];

export default function HeroCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on('select', onSelect);
        onSelect();
    }, [emblaApi, onSelect]);

    return (
        <div className="relative">
            {/* Carousel */}
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {images.map((src, index) => (
                        <div className="min-w-full relative" key={index}>
                            <Image
                                src={src}
                                alt={`Slide ${index}`}
                                width={1500}
                                height={500}
                                className="w-full h-[500px] object-cover"
                            />
                            <div className="absolute bottom-4 left-4 text-white bg-black bg-opacity-50 p-4 rounded">
                                <h2 className="text-xl">K-Drama Slide {index + 1}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-2 rounded hover:bg-opacity-70"
            >
                ◀
            </button>
            <button
                onClick={scrollNext}
                disabled={!canScrollNext}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-2 rounded hover:bg-opacity-70"
            >
                ▶
            </button>
        </div>
    );
}
