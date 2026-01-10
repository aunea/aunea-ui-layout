import '../../styles/main-menu.css';
import type {ReactNode} from "react";
import React from "react";

type Props = {
    left?: ReactNode;
    center?: ReactNode;
    right?: ReactNode;
};


export function MainMenu({ left, center, right }: Props): React.JSX.Element {
    return (
        <header className="ui-main-menu">
            <div className="ui-main-menu__left">
                {left}
            </div>

            <div className="ui-main-menu__center">
                {center}
            </div>

            <div className="ui-main-menu__right">
                {right}
            </div>
        </header>
    );
}
