import './button.css';
import React from 'react';

type ButtonVariant = 'solid' | 'outline' | 'ghost';
type ButtonColor =
    | 'success'
    | 'warning'
    | 'danger'
    | 'processing'
    | 'gray'
    | 'light'
    | 'dark';

type ButtonSize = 'sm' | 'md' | 'lg';
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
                                 color = 'dark',
                                 size = 'md',
                                 shape = 'default',
                                 disabled = false,
                                 onClick,
                             }: Props) {
    const isIconOnly = !!icon && !label;

    return (
        <button
            className={[
                'ui-button',
                `ui-button--${variant}`,
                `ui-button--${color}`,
                `ui-button--${size}`,
                shape === 'round' ? 'ui-button--round' : '',
                isIconOnly ? 'ui-button--icon-only' : '',
            ].join(' ')}
            disabled={disabled}
            onClick={onClick}
        >
            {icon && <span className="ui-button__icon">{icon}</span>}
            {label && <span className="ui-button__label">{label}</span>}
        </button>
    );
}
