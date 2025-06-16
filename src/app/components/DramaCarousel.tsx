'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { useEffect, useCallback, useState } from 'react';

interface DramaCarouselProps {
    images: string[];
}

export default function DramaCarousel({ images }: DramaCarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

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
        <div className="relative w-full max-w-md mx-auto">
            <div className="overflow-hidden rounded-lg shadow-lg" ref={emblaRef}>
                <div className="flex">
                    {images.map((src, index) => (
                        <div className="min-w-full relative" key={index}>
                            <Image
                                src={src}
                                alt={`Drama Slide ${index}`}
                                width={500}
                                height={500}
                                className="w-full h-[300px] object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                className="absolute top-1/2 left-2 transform -translate-y-1/2  bg-opacity-50 text-white px-2 py-1 rounded"
            >
                ◀
            </button>
            <button
                onClick={scrollNext}
                disabled={!canScrollNext}
                className="absolute top-1/2 right-2 transform -translate-y-1/2  bg-opacity-50 text-white px-2 py-1 rounded"
            >
                ▶
            </button>
        </div>
    );
}
