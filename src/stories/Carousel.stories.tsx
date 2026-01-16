import type { Meta, StoryObj } from '@storybook/react'
import { Carousel } from '../components/carousel/Carousel'

import "../styles/components/carousel.css"

type StoryArgs = {
    length: number;
};

const meta: Meta<StoryArgs> = {
    title: 'Carousel',
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        length: {
            control: {
                type: 'number',
                min: 1,
                max: 20,
                step: 1,
            },
            description: 'Quantidade total de cards',
        },
    },
    args: {
        length: 5,
    },
};

export default meta;

type Story = StoryObj<StoryArgs>;

/* =========================
   MOCK CARD
   ========================= */

function MockCard({ index }: { index: number }) {
    return (
        <div
            style={{
                height: '100%',
                minHeight: 240,
                background: 'linear-gradient(135deg, #222, #444)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 24,
                borderRadius: 12,
                userSelect: 'none',
            }}
        >
            Card {index + 1}
        </div>
    );
}

/* =========================
   STORY
   ========================= */

export const Playground: Story = {
    render: ({ length }) => (
        <div style={{ width: '100vw', height: '100dvh', padding: 24 }}>
            <Carousel length={length}>
                {(index) => <MockCard index={index} />}
            </Carousel>
        </div>
    ),
};
