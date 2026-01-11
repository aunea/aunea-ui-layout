import React, { useMemo, useState } from 'react'
//import '../../styles/carousel.css'

type CarouselProps = {
    children: React.ReactNode[]
    itemsPerView?: number
    itemWidth?: number | string
    gap?: number
    className?: string
}

export function Carousel({
                             children,
                             itemsPerView,
                             itemWidth,
                             gap = 16,
                             className = ''
                         }: CarouselProps) {
    if (process.env.NODE_ENV !== 'production') {
        if (!itemsPerView && !itemWidth) {
            throw new Error(
                'Carousel: you must provide either itemsPerView or itemWidth'
            )
        }
    }

    const totalItems = children.length

    const pages = useMemo(() => {
        if (itemsPerView) {
            return Math.ceil(totalItems / itemsPerView)
        }
        return totalItems
    }, [itemsPerView, totalItems])

    const [page, setPage] = useState(0)

    const translateX = useMemo(() => {
        if (itemsPerView) {
            return page * 100
        }
        return page * 100
    }, [page])

    const styleVars = {
        '--gap': `${gap}px`,
        '--items-per-view': itemsPerView ?? 1,
        '--item-width':
            typeof itemWidth === 'number' ? `${itemWidth}px` : itemWidth
    } as React.CSSProperties

    return (
        <div className={`ui-carousel ${className}`} style={styleVars}>
            <button
                className="ui-carousel-arrow left"
                onClick={() => setPage(p => Math.max(p - 1, 0))}
                disabled={page === 0}
            >
                ‹
            </button>

            <div className="ui-carousel-viewport">
                <div
                    className="ui-carousel-track"
                    style={{ transform: `translateX(-${translateX}%)` }}
                >
                    {children.map((child, i) => (
                        <div className="ui-carousel-item" key={i}>
                            {child}
                        </div>
                    ))}
                </div>
            </div>

            <button
                className="ui-carousel-arrow right"
                onClick={() => setPage(p => Math.min(p + 1, pages - 1))}
                disabled={page === pages - 1}
            >
                ›
            </button>

            <div className="ui-carousel-dots">
                {Array.from({ length: pages }).map((_, i) => (
                    <button
                        key={i}
                        className={`dot ${i === page ? 'active' : ''}`}
                        onClick={() => setPage(i)}
                    />
                ))}
            </div>
        </div>
    )
}
