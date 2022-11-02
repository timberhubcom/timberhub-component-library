import React from 'react';
import { ComponentStory } from '@storybook/react';
declare const _default: {
    title: string;
    component: React.FC<{
        text: string;
        color?: "green" | "orange" | "grey" | undefined;
        prefix?: string | undefined;
    }>;
};
export default _default;
export declare const Base: ComponentStory<React.FC<{
    text: string;
    color?: "green" | "orange" | "grey" | undefined;
    prefix?: string | undefined;
}>>;
export declare const Color: ComponentStory<any>;
export declare const Prefix: ComponentStory<React.FC<{
    text: string;
    color?: "green" | "orange" | "grey" | undefined;
    prefix?: string | undefined;
}>>;
