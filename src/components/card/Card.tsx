import { useEffect, useRef, useState } from 'react'

export type VariationType = 'positive' | 'negative' | 'neutral'

export type CardVariation = {
    type: VariationType
    text?: string
}

const VARIATION_ICON: Record<VariationType, string> = {
    positive: '↗',
    negative: '↙',
    neutral: '−',
}

export type CardProps = {
    title?: string
    content?: React.ReactNode
    variation?: CardVariation

    isActive?: boolean
    isForcedActive?: boolean
    disabled?: boolean

    hasActionArea?: boolean
    hasUpscaling?: boolean
}

export function Card({
                         title,
                         content,
                         variation,

                         isActive = false,
                         isForcedActive = false,
                         disabled = false,

                         hasActionArea = false,
                         hasUpscaling = false,
                     }: CardProps) {
    const ref = useRef<HTMLDivElement | null>(null)
    const [internalActive, setInternalActive] = useState(false)

    const active = !disabled && (isForcedActive || isActive || internalActive)

    useEffect(() => {
        if (disabled || isForcedActive) return

        function handleOutside(e: PointerEvent) {
            if (!ref.current) return
            if (!ref.current.contains(e.target as Node)) {
                setInternalActive(false)
            }
        }

        document.addEventListener('pointerdown', handleOutside)
        return () => document.removeEventListener('pointerdown', handleOutside)
    }, [disabled, isForcedActive])

    function activate() {
        if (disabled || isForcedActive) return
        setInternalActive(true)
    }

    function deactivate() {
        if (disabled || isForcedActive) return
        setInternalActive(false)
    }

    return (
        <div
            ref={ref}
            className={[
                'ui-card-shell',
                active && hasUpscaling && 'ui-card-shell--expanded',
                disabled && 'ui-card-shell--disabled',
            ]
                .filter(Boolean)
                .join(' ')}
            onMouseEnter={activate}
            onMouseLeave={deactivate}
            onClick={activate}
        >
            <div className="ui-card">
                <div className="ui-card__top">
                    <div className="ui-card__top-left">
                        {title && (
                            <h3 className="ui-card__title">{title}</h3>
                        )}
                    </div>

                    <div className="ui-card__top-right">
                        {variation && (
                            <div className="ui-card__variation">
                                <span
                                    className={`ui-card__variation-icon ui-card__variation-icon--${variation.type}`}
                                    aria-hidden
                                >
                                    {VARIATION_ICON[variation.type]}
                                </span>

                                {variation.text && (
                                    <span className="ui-card__variation-text">
                                        {variation.text}
                                    </span>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                <div className="ui-card__bottom">
                    <div className="ui-card__content">
                        {content}
                    </div>

                    {active && hasActionArea && (
                        <button
                            className="ui-card__action"
                            disabled={disabled}
                            onClick={e => e.stopPropagation()}
                        >
                            Ação
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}
