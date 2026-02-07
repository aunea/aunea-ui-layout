import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Card, VariationType } from '../components/card/Card'

const meta: Meta<typeof Card> = {
    title: 'Card',
    component: Card,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        variationType: {
            name: 'variation.type',
            control: { type: 'radio' },
            options: ['positive', 'negative', 'neutral'],
        },
        variationText: {
            name: 'variation.text',
            control: 'text',
        },

        isActive: { control: false },
    },
}

export default meta

type Story = StoryObj<typeof Card>

export const Interactive: Story = {
    args: {
        title: 'Título do Card',
        content: 'Conteúdo do card',

        variationType: 'neutral',
        variationText: 'Texto da variação',

        hasActionArea: true,
        hasUpscaling: true,
        isForcedActive: false,
        disabled: false,
    },

    render: args => {
        const [active, setActive] = useState(false)

        const variation =
            args.variationType
                ? {
                    type: args.variationType as VariationType,
                    text: args.variationText || undefined,
                }
                : undefined

        function activate() {
            if (args.disabled || args.isForcedActive) return
            setActive(true)
        }

        function deactivate() {
            if (args.disabled || args.isForcedActive) return
            setActive(false)
        }

        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    minHeight: '30vh',
                    background: 'transparent',
                }}
                onClick={deactivate}
            >
                <div onClick={e => e.stopPropagation()}>
                    <div style={{ width: 360 }} onClick={activate}>
                        <Card
                            {...args}
                            variation={variation}
                            isActive={active}
                        />
                    </div>
                </div>
            </div>
        )
    },
}
