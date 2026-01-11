import React from 'react';

type ButtonVariant = 'solid' | 'outline' | 'ghost';
type ButtonColor =
    | 'all-state'
    | 'success'
    | 'warning'
    | 'danger'
    | 'processing'
    | 'gray'
    | 'main';

type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';
type ButtonShape = 'default' | 'round';

type Props = {
    label?: string;
    icon?: React.ReactNode;
    variant?: ButtonVariant;
    color?: ButtonColor;
    size?: ButtonSize;
    shape?: ButtonShape;
    disabled?: boolean;
    onClick?: () => void;
};

export function CustomButton({
                                 label,
                                 icon,
                                 variant = 'solid',
                                 color = 'main',
                                 size = 'md',
                                 shape = 'default',
                                 disabled = false,
                                 onClick,
                             }: Props) {
    const isIconOnly = !!icon && !label;
    const isAllState = color === 'all-state';

    return (
        <button
            className={[
                'ui-button',
                `ui-button--${variant}`,
                !isAllState && `ui-button--${color}`,
                isAllState && 'ui-button--all-state',
                `ui-button--${size}`,
                shape === 'round' ? 'ui-button--round' : '',
                isIconOnly ? 'ui-button--icon-only' : '',
            ]
                .filter(Boolean)
                .join(' ')}
            disabled={disabled}
            onClick={onClick}
        >
            {icon && <span className="ui-button__icon">{icon}</span>}
            {label && <span className="ui-button__label">{label}</span>}
        </button>
    );
}
