import type { Meta, StoryFn } from '@storybook/react';
import { CustomInput } from '../components';
import React from 'react';
import { JSX } from 'react/jsx-runtime';

const meta: Meta<typeof CustomInput> = {
    title: 'Input',
    component: CustomInput,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        type: {
            control: 'select',
            options: [
                'text',
                'email',
                'password',
                'tel',
                'number',
                'search',
                'date',
                'cpf',
            ],
        },
        variant: {
            control: 'select',
            options: ['solid', 'outline'],
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
            options: ['sm', 'md', 'lg', 'xl'],
        },
        multiline: {
            control: 'boolean',
        },
        disabled: {
            control: 'boolean',
        },
        loading: {
            control: 'boolean',
        },
        autoValidate: {
            control: 'boolean',
        },
        icon: {
            control: false,
        },
        regex: {
            control: false,
        },
        onChange: {
            action: 'changed',
        },
    },
};

export default meta;

const Template: StoryFn<typeof CustomInput> = (
    args: JSX.IntrinsicAttributes & React.ComponentProps<typeof CustomInput>
) => (
    <div style={{ width: 320 }}>
        <CustomInput {...args} />
    </div>
);

export const Primary = Template.bind({});
Primary.args = {
    label: 'Nome',
    placeholder: 'Digite seu nome',
    type: 'text',
    variant: 'solid',
    color: 'main',
};
