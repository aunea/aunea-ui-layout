import '../../styles/main-menu.css';

type Props = {
    left?: React.ReactNode;
    center?: React.ReactNode;
    right?: React.ReactNode;
};

export function MainMenu({ left, center, right }: Props) {
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
