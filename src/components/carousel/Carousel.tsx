import { useEffect, useMemo, useRef, useState } from 'react';
import type { TouchEvent, ReactNode } from 'react';

type CarouselProps = {
    length: number;
    children: (params: {
        index: number;
        isHovered: boolean;
        isSingle: boolean;
    }) => React.ReactNode;
};

type Mode =
    | 'mobile'
    | 'tablet'
    | 'laptop'
    | 'desktop'
    | 'ultrawide';

type Phase = 'idle' | 'next' | 'prev';

const ANIMATION_DURATION = 400;

export function Carousel({
                             length,
                             children,
                         }: CarouselProps) {
    const [current, setCurrent] = useState(0);
    const [mode, setMode] = useState<Mode>('mobile');
    const [phase, setPhase] = useState<Phase>('idle');

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const touchStartX = useRef<number | null>(null);

    useEffect(() => {
        const updateMode = () => {
            const w = window.innerWidth;
            const ratio = window.innerWidth / window.innerHeight;

            if (w < 768) setMode('mobile');
            else if (w < 1024) setMode('tablet');
            else if (w < 1440) setMode('laptop');
            else if (w >= 1920 && ratio >= 21 / 9) setMode('ultrawide');
            else setMode('desktop');
        };

        updateMode();
        window.addEventListener('resize', updateMode);
        return () => window.removeEventListener('resize', updateMode);
    }, []);

    const visibleCount = useMemo(() => {
        if (length <= 2) return length;

        switch (mode) {
            case 'mobile':
                return 1;
            case 'tablet':
                return 2;
            case 'laptop':
                return 3;
            case 'desktop':
                return 4;
            case 'ultrawide':
                return length;
            default:
                return 1;
        }
    }, [mode, length]);

    const next = () => {
        if (phase !== 'idle' || length <= 1) return;
        setPhase('next');

        setTimeout(() => {
            setCurrent((i) => (i + 1) % length);
            setPhase('idle');
        }, ANIMATION_DURATION);
    };

    const prev = () => {
        if (phase !== 'idle' || length <= 1) return;
        setPhase('prev');

        setTimeout(() => {
            setCurrent((i) => (i - 1 + length) % length);
            setPhase('idle');
        }, ANIMATION_DURATION);
    };

    const onTouchStart = (e: TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const onTouchEnd = (e: TouchEvent) => {
        if (touchStartX.current === null || phase !== 'idle') return;

        const delta =
            e.changedTouches[0].clientX - touchStartX.current;

        if (Math.abs(delta) > 50) {
            delta < 0 ? next() : prev();
        }

        touchStartX.current = null;
    };

    const indices = useMemo(() => {
        if (length === 0) return [];

        const result: {
            index: number;
            buffer: boolean;
            side: 'left' | 'right' | 'none';
        }[] = [];

        result.push({
            index: (current - 1 + length) % length,
            buffer: true,
            side: 'left',
        });

        for (let i = 0; i < visibleCount; i++) {
            result.push({
                index: (current + i) % length,
                buffer: false,
                side: 'none',
            });
        }

        result.push({
            index: (current + visibleCount) % length,
            buffer: true,
            side: 'right',
        });

        return result;
    }, [current, visibleCount, length]);

    const isSingle = length === 1;

    return (
        <div
            className="carousel"
            data-mode={mode}
            data-phase={phase}
            style={{
                ['--slot-size' as any]: `${100 / visibleCount}%`,
            }}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
        >
            <div className="carousel-inner">
                <button
                    className="carousel-arrow left"
                    type="button"
                    aria-label="previous"
                    onClick={prev}
                    disabled={phase !== 'idle'}
                >
                    ‹
                </button>

                <div className="carousel-viewport">
                    <div className="carousel-track">
                        {indices.map(({ index, buffer, side }, i) => (
                            <div
                                key={`${index}-${i}`}
                                className="carousel-slot"
                                data-buffer={buffer}
                                data-side={side}
                                aria-hidden={buffer ? 'true' : 'false'}
                                onMouseEnter={() => {
                                    if (!buffer) setHoveredIndex(index);
                                }}
                                onMouseLeave={() => {
                                    if (!buffer) setHoveredIndex(null);
                                }}
                            >
                                {buffer && visibleCount === 1
                                    ? null
                                    : children({
                                        index,
                                        isHovered:
                                            visibleCount === 1 ||
                                            hoveredIndex === index,
                                        isSingle,
                                    })}
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    className="carousel-arrow right"
                    type="button"
                    aria-label="next"
                    onClick={next}
                    disabled={phase !== 'idle'}
                >
                    ›
                </button>
            </div>
        </div>
    );
}
