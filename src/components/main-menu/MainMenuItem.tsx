type MainMenuItemProps = {
    label: string;
    active?: boolean;
    onClick?: () => void;
};

export function MainMenuItem({
                             label,
                             active = false,
                             onClick,
                         }: MainMenuItemProps) {
    return (
        <button
            className={[
                'ui-menu-item',
                active && 'ui-menu-item--active',
            ]
                .filter(Boolean)
                .join(' ')}
            onClick={onClick}
        >
            {label}
        </button>
    );
}
