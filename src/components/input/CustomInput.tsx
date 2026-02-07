import React, { useState, useEffect } from 'react';

type InputVariant = 'solid' | 'outline';

type InputColor =
    | 'all-state'
    | 'success'
    | 'warning'
    | 'danger'
    | 'processing'
    | 'gray'
    | 'main';

type InputSize = 'sm' | 'md' | 'lg' | 'xl';

type InputType =
    | 'text'
    | 'email'
    | 'password'
    | 'tel'
    | 'number'
    | 'search'
    | 'date'
    | 'cpf';

type Props = {
    value?: string;
    label?: string;
    placeholder?: string;
    icon?: React.ReactNode;

    type?: InputType;
    multiline?: boolean;
    rows?: number;

    variant?: InputVariant;
    color?: InputColor;
    size?: InputSize;

    disabled?: boolean;
    loading?: boolean;

    regex?: RegExp;
    autoValidate?: boolean;

    errorMessage?: string;

    onChange?: (value: string) => void;
};

const maskPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '').slice(0, 11);

    if (numbers.length <= 10) {
        return numbers.replace(
            /(\d{2})(\d{4})(\d{0,4})/,
            (_, ddd, part1, part2) =>
                part2 ? `(${ddd}) ${part1}-${part2}` : `(${ddd}) ${part1}`
        );
    }

    return numbers.replace(
        /(\d{2})(\d{5})(\d{0,4})/,
        (_, ddd, part1, part2) =>
            part2 ? `(${ddd}) ${part1}-${part2}` : `(${ddd}) ${part1}`
    );
};

const maskCPF = (value: string) =>
    value
        .replace(/\D/g, '')
        .slice(0, 11)
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2');

export function CustomInput({
                                value,
                                label,
                                placeholder,
                                icon,

                                type = 'text',
                                multiline = false,
                                rows = 3,

                                variant = 'solid',
                                color = 'main',
                                size = 'md',

                                disabled = false,
                                loading = false,

                                regex,
                                autoValidate = false,

                                errorMessage,

                                onChange,
                            }: Props) {
    const [showPassword, setShowPassword] = useState(false);
    const [isValid, setIsValid] = useState<boolean | null>(null);

    const hasIcon = !!icon;
    const hasValue = !!value;

    useEffect(() => {
        if (!autoValidate || !regex || !value) {
            setIsValid(null);
            return;
        }

        setIsValid(regex.test(value));
    }, [value, regex, autoValidate]);

    const visualState: InputColor =
        isValid === true
            ? 'success'
            : isValid === false
                ? 'danger'
                : color;

    const wrapperClass = [
        'ui-input',
        `ui-input--${variant}`,
        `ui-input--${visualState}`,
        `ui-input--${size}`,
        hasIcon && 'ui-input--with-icon',
        loading && 'ui-input--loading',
        isValid === false && 'ui-input--shake',
        hasValue && 'ui-input--filled',
    ]
        .filter(Boolean)
        .join(' ');

    const handleChange = (raw: string) => {
        let formatted = raw;

        if (type === 'tel') formatted = maskPhone(raw);
        if (type === 'cpf') formatted = maskCPF(raw);

        onChange?.(formatted);
    };

    const inputType =
        type === 'password'
            ? showPassword
                ? 'text'
                : 'password'
            : type === 'cpf'
                ? 'text'
                : type;

    return (
        <div className="ui-input-wrapper">
            <div className={wrapperClass}>
                {icon && <span className="ui-input__icon">{icon}</span>}

                {multiline ? (
                    <textarea
                        className="ui-input__field"
                        rows={rows}
                        value={value}
                        placeholder={placeholder}
                        disabled={disabled || loading}
                        onChange={(e) => handleChange(e.target.value)}
                    />
                ) : (
                    <input
                        className="ui-input__field"
                        type={inputType}
                        value={value}
                        placeholder={placeholder}
                        disabled={disabled || loading}
                        onChange={(e) => handleChange(e.target.value)}
                    />
                )}

                {label && <label className="ui-input__label">{label}</label>}

                {type === 'password' && !multiline && (
                    <button
                        type="button"
                        className="ui-input__toggle-password"
                        onClick={() => setShowPassword((v) => !v)}
                    >
                        {showPassword ? 'Ocultar' : 'Mostrar'}
                    </button>
                )}

                {loading && <span className="ui-input__loader" />}
            </div>

            {isValid === false && errorMessage && (
                <span className="ui-input__error-message">
                    {errorMessage}
                </span>
            )}
        </div>
    );
}
