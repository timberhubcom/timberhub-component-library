import React from 'react';
import { ComponentStory } from '@storybook/react';
declare const _default: {
    title: string;
    component: React.FC<{
        option: import("./Radio").RadioOptionType;
        checked?: boolean | undefined;
        disabled?: boolean | undefined;
        onChange?: ((e: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
    }>;
};
export default _default;
export declare const Base: ComponentStory<React.FC<{
    option: import("./Radio").RadioOptionType;
    checked?: boolean | undefined;
    disabled?: boolean | undefined;
    onChange?: ((e: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
}>>;
export declare const Disabled: ComponentStory<React.FC<{
    option: import("./Radio").RadioOptionType;
    checked?: boolean | undefined;
    disabled?: boolean | undefined;
    onChange?: ((e: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
}>>;
