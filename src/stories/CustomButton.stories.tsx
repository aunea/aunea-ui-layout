import type { Meta, StoryObj } from '@storybook/react';
import { CustomButton } from './CustomButton';

const meta: Meta<typeof CustomButton> = {
    title: 'Components/CustomButton',
    component: CustomButton,
    args: {
        label: 'Button',
        size: 'lg',
        variant: 'solid',
        color: 'main',
    },
};

export default meta;

type Story = StoryObj<typeof CustomButton>;

export const Solid: Story = {};
