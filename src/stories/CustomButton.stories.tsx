import type {Meta, StoryFn} from '@storybook/react';
import {CustomButton} from '../components';
import React from 'react';
import { JSX } from 'react/jsx-runtime';

const meta: Meta<typeof CustomButton> = {
    title: 'Button',
    component: CustomButton,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['solid', 'outline', 'ghost'],
        },
        color: {
            control: 'select',
            options: [
                'main',
                'gray',
                'success',
                'warning',
                'danger',
                'processing',
                'all-state',
            ],
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        shape: {
            control: 'select',
            options: ['default', 'round'],
        },
        disabled: {
            control: 'boolean',
        },
        onClick: {
            action: 'clicked',
        },
        icon: {
            control: false,
        },
    },
};

export default meta;

const Template: StoryFn<typeof CustomButton> = (args: JSX.IntrinsicAttributes & { label?: string | undefined; icon?: React.ReactNode; variant?: ("solid" | "outline" | "ghost") | undefined; color?: ("main" | "gray" | "success" | "warning" | "danger" | "processing" | "all-state") | undefined; size?: ("sm" | "md" | "lg") | undefined; shape?: ("default" | "round") | undefined; disabled?: boolean | undefined; onClick?: (() => void) | undefined; }) => (
    <CustomButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    label: 'Primary Button',
    variant: 'solid',
    color: 'main',
};
