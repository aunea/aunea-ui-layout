import type {Meta, StoryObj} from '@storybook/react';
import {MainMenu, MainMenuItem} from '../components';

import "../styles/components/main-menu.css"

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
        <MainMenu
            left={<strong>AUNE-A</strong>}
            center={
                <nav className="menu-items">
                    <MainMenuItem label="Home" active/>
                    <MainMenuItem label="Body metrics"/>
                    <MainMenuItem label="Settings"/>
                </nav>
            }
            right={<div>Toggle</div>}
        />
    ),
};

