import React from 'react';
import { Meta, StoryObj } from '@storybook/nextjs';

import Button from './button';

const meta: Meta = {
    title: 'Button',
    component: Button,
    argTypes: {

    },
};

export default meta;
type Button = StoryObj<typeof Button>;
export const Default = () => <Button href={"#"}>Default</Button>;
export const Primary = () => <Button href={"#"} color="primary">Primary</Button>;
