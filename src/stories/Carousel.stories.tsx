import type { Meta, StoryObj } from '@storybook/react'
import { Carousel } from '../components/carousel/Carousel'

const meta: Meta<typeof Carousel> = {
    title: 'UI/Carousel',
    component: Carousel,
    parameters: {
        layout: 'centered'
    }
}

export default meta
type Story = StoryObj<typeof Carousel>

/* Card fake só para visualização */
function Card({ label }: { label: string }) {
    return (
        <div
            style={{
                height: '180px',
                borderRadius: '12px',
                background: '#d9d9d9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.1rem',
                fontWeight: 500
            }}
        >
            {label}
        </div>
    )
}

export const ItemsPerView: Story = {
    render: () => (
        <div style={{ width: '900px' }}>
            <Carousel itemsPerView={3}>
                <Card label="Página 1" />
                <Card label="Página 2" />
                <Card label="Página 3" />
                <Card label="Página 4" />
                <Card label="Página 5" />
            </Carousel>
        </div>
    )
}

