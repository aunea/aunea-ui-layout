import type { Meta, StoryObj } from '@storybook/react';
import { CardProntoARefazer, VariationType } from '../components/card/CardProntoARefazer';
import { Carousel } from '../components/carousel/Carousel';

type StoryArgs = {
    itemsCount: number;
    disabled: boolean;
    cardsAllowHover: boolean;
};

const meta: Meta<StoryArgs> = {
    title: 'CardCarousel',
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        itemsCount: {
            control: {
                type: 'number',
                min: 1,
                max: 6,
                step: 1,
            },
        },
        disabled: {
            control: 'boolean',
        },
        cardsAllowHover: {
            control: 'boolean',
        },
    },
};

export default meta;

type Story = StoryObj<StoryArgs>;

export const Default: Story = {
    args: {
        itemsCount: 3,
        disabled: false,
        cardsAllowHover: true,
    },
    render: ({ itemsCount, disabled, cardsAllowHover }) => {
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
                <Carousel length={itemsCount}>
                    {({ index, isHovered, isSingle }) => (
                        <CardProntoARefazer
                            title={`Card ${index + 1}`}
                            content="78 kg"
                            variation={{
                                type: 'negative' as VariationType,
                                text: '1 semana',
                            }}
                            disabled={disabled}
                            insideCarousel
                            isSingleInCarousel={isSingle}
                            carouselHoverActive={
                                cardsAllowHover && (isSingle || isHovered)
                            }
                            actionLabel="Ver detalhes"
                        />
                    )}
                </Carousel>
            </div>
        );
    },
};
