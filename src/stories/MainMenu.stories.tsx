import type { Meta, StoryObj } from '@storybook/react';
import { MainMenu, MainMenuItem } from '../components';

const meta: Meta<typeof MainMenu> = {
    title: 'MainMenu',
    component: MainMenu,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

type Story = StoryObj<typeof MainMenu>;

export const Default: Story = {
    render: () => (
        <div style={{ padding: 24 }}>
            <MainMenu
                left={
                    <div style={{ fontWeight: 600 }}>
                        AUNE-A
                    </div>
                }
                center={
                    <>
                        <MainMenuItem label="Home" active />
                        <MainMenuItem label="Body metrics" />
                        <MainMenuItem label="Settings" />
                    </>
                }
                right={
                    <div>
                        Toggle
                    </div>
                }
            />
        </div>
    ),
};
