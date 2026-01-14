import { useState, type ReactNode } from 'react';
import { MobileMenuDrawer } from './MobileMenuDrawer';

type Props = {
    left?: ReactNode;
    center?: ReactNode;
    right?: ReactNode;
};

export function MainMenu({ left, center, right }: Props) {
    const [open, setOpen] = useState(false);

    return (
        <header className="ui-main-menu-wrapper">
            <div className="ui-main-menu">
                <div className="ui-main-menu__left">
                    {left}
                </div>

                <div className="ui-main-menu__center">
                    {center}

                    <button
                        className="menu-toggle"
                        onClick={() => setOpen(v => !v)}
                        aria-label="Abrir menu">
                        ☰
                    </button>
                </div>

                <div className="ui-main-menu__right">
                    {right}
                </div>
            </div>

            {open && (
                <MobileMenuDrawer
                    onClose={() => setOpen(false)}
                >
                    {center}
                </MobileMenuDrawer>
            )}
        </header>
    );
}
