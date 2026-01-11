import type {Meta, StoryObj} from '@storybook/react';
import {CustomCard} from '../components/card/CustomCard';

const meta: Meta<typeof CustomCard> = {
    title: 'CustomCard',
    component: CustomCard,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        tone: {
            control: 'select',
            options: ['positive', 'neutral', 'negative', 'info'],
        },
        icon: {
            control: false,
        },
        delta: {
            control: false,
        },
    },
};

export default meta;
type Story = StoryObj<typeof CustomCard>;

export const ResponsiveGrid: Story = {
    render: () => (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(14rem, 1fr))',
                gap: '1rem',
                width: '100%',
                maxWidth: '64rem',
            }}
        >
            <CustomCard
                title="Peso"
                value={78}
                unit="kg"
                tone="positive"
                delta={{ value: -1, label: 'semana', direction: 'down' }}
            />

            <CustomCard
                title="Saldo"
                value="R$ 1.245"
                tone="positive"
                delta={{ value: '+300', label: 'mês', direction: 'up' }}
            />

            <CustomCard
                title="Treinos"
                value={4}
                tone="info"
                delta={{ value: '+1', label: 'semana', direction: 'up' }}
            />

            <CustomCard
                title="Humor"
                value="🙂"
                tone="neutral"
                delta={{ value: 'estável', direction: 'flat' }}
            />
        </div>
    ),
};
