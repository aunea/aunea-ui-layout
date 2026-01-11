//import "../../styles/card.css"

export type CardTone = 'positive' | 'neutral' | 'negative' | 'info';

export type CardDelta = {
    value: string | number;
    label?: string;
    direction?: 'up' | 'down' | 'flat';
};

type Props = {
    title: string;
    icon?: React.ReactNode;

    value: string | number;
    unit?: string;

    tone?: CardTone;
    delta?: CardDelta;

    className?: string;
};

export function CustomCard({
                               title,
                               icon,
                               value,
                               unit,
                               tone = 'neutral',
                               delta,
                               className,
                           }: Props) {
    return (
        <div
            className={[
                'ui-card',
                `ui-card--${tone}`,
                className,
            ]
                .filter(Boolean)
                .join(' ')}
        >
            <div className="ui-card__header">
                {icon && <span className="ui-card__icon">{icon}</span>}
                <span className="ui-card__title">{title}</span>
            </div>

            <div className="ui-card__value">
                <span className="ui-card__number">{value}</span>
                {unit && <span className="ui-card__unit">{unit}</span>}
            </div>

            {delta && (
                <div className="ui-card__footer">
          <span
              className={[
                  'ui-card__delta',
                  delta.direction && `ui-card__delta--${delta.direction}`,
              ]
                  .filter(Boolean)
                  .join(' ')}
          >
            {delta.direction === 'up' && '↗'}
              {delta.direction === 'down' && '↘'}
              {delta.direction === 'flat' && '→'}

              <span className="ui-card__delta-value">{delta.value}</span>

              {delta.label && (
                  <span className="ui-card__delta-label">
                {delta.label}
              </span>
              )}
          </span>
                </div>
            )}
        </div>
    );
}
