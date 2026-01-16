import { useMemo } from 'react';
import type { ReactNode } from 'react';

import '../../styles/components/card.css';

export type VariationType = 'positive' | 'negative' | 'neutral';

type Variation = {
    type: VariationType;
    text: string;
};

type CardProps = {
    title: string;

    content?: ReactNode;
    variation?: Variation;

    disabled?: boolean;

    insideCarousel?: boolean;

    carouselHoverActive?: boolean;
    isSingleInCarousel?: boolean;

    selfHoverEnabled?: boolean;
    selfHoverActive?: boolean;

    actionLabel?: string;
};

export function Card({
                         title,
                         content,
                         variation,

                         disabled = false,

                         insideCarousel = false,
                         carouselHoverActive = false,
                         isSingleInCarousel = false,

                         selfHoverEnabled = false,
                         selfHoverActive = false,

                         actionLabel = 'Ação',
                     }: CardProps) {
    const isHoverActive = useMemo(() => {
        if (disabled) return false;

        if (insideCarousel) {
            if (isSingleInCarousel) return true;
            return carouselHoverActive;
        }

        if (!selfHoverEnabled) return false;

        return selfHoverActive;
    }, [
        disabled,
        insideCarousel,
        isSingleInCarousel,
        carouselHoverActive,
        selfHoverEnabled,
        selfHoverActive,
    ]);

    return (
        <div
            className={[
                'card',
                isHoverActive && 'card--hover',
                disabled && 'card--disabled',
            ]
                .filter(Boolean)
                .join(' ')}
        >
            <div className="card__header">
                <span className="card__title">{title}</span>

                {variation && (
                    <span
                        className={[
                            'card__variation',
                            `card__variation--${variation.type}`,
                        ].join(' ')}
                    >
                        <span className="card__variation-symbol">
                            {variation.type === 'positive' && '↑'}
                            {variation.type === 'negative' && '↓'}
                            {variation.type === 'neutral' && '-'}
                        </span>
                        <span className="card__variation-text">
                            {variation.text}
                        </span>
                    </span>
                )}
            </div>

            <div className="card__body">
                {content && (
                    <div className="card__content">
                        {content}
                    </div>
                )}
            </div>

            <div className="card__action">
                <button disabled={disabled}>{actionLabel}</button>
            </div>
        </div>
    );
}
