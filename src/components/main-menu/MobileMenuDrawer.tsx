import type {ReactNode} from 'react';

type MobileMenuDrawerProps = {
    children: ReactNode;
    onClose: () => void;
};

export function MobileMenuDrawer({children, onClose}: MobileMenuDrawerProps) {
    return (
        <div className="mobile-menu-overlay" onClick={onClose}>
            <nav className="ui-mobile-menu" onClick={e => e.stopPropagation()}>
                {children}
            </nav>
        </div>
    );
}
