import type {Meta, StoryObj} from '@storybook/react';
import {AssistantFrame} from '../components/assistant/AssistantFrame';

const meta: Meta<typeof AssistantFrame> = {
    title: 'AssistantFrame',
    component: AssistantFrame,
    parameters: {
        layout: 'centered',
    },
};

export default meta;

type Story = StoryObj<typeof  AssistantFrame>;

export const Default: Story = {
    render: () => (
        <div
            style={{
                width: '1000px',
                height: '500px',
                aspectRatio: '2 / 1'
            }}
        >
            <AssistantFrame />
        </div>
    ),
};
