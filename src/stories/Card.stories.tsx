import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Card, VariationType } from '../components/card/Card';

const meta: Meta<typeof Card> = {
    title: 'Card',
    component: Card,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        title: { control: 'text' },
        content: { control: 'text' },
        actionLabel: { control: 'text' },

        disabled: { control: 'boolean' },

        selfHoverEnabled: { control: 'boolean' },

        variation: { control: 'object' },

        /* esconder coisas que não fazem sentido aqui */
        insideCarousel: { table: { disable: true } },
        carouselHoverActive: { table: { disable: true } },
        isSingleInCarousel: { table: { disable: true } },
        selfHoverActive: { table: { disable: true } },
    },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
    args: {
        title: 'Peso',
        content: '78 kg',
        actionLabel: 'Ver detalhes',
        disabled: false,
        selfHoverEnabled: true,
        variation: {
            type: 'negative' as VariationType,
            text: '1 semana',
        },
    },
    render: (args) => {
        const [hover, setHover] = useState(false);

        return (
            <div
                style={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 32,
                    boxSizing: 'border-box',
                }}
            >
                <div
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    <Card
                        {...args}
                        insideCarousel={false}
                        selfHoverActive={hover}
                    />
                </div>
            </div>
        );
    },
};
