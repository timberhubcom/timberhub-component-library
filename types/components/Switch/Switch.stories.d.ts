import React from 'react';
import { ComponentStory } from '@storybook/react';
declare const _default: {
    title: string;
    component: React.FC<{
        label?: string | undefined;
        name?: string | undefined;
        option: {
            name: string;
            children?: React.ReactNode;
        };
        labelClass?: string | undefined;
        defaultValue?: boolean | undefined;
        disabled?: boolean | undefined;
        onChange?: ((e: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
        required?: boolean | undefined;
        error?: string | undefined;
    }>;
};
export default _default;
export declare const Base: ComponentStory<React.FC<{
    label?: string | undefined;
    name?: string | undefined;
    option: {
        name: string;
        children?: React.ReactNode;
    };
    labelClass?: string | undefined;
    defaultValue?: boolean | undefined;
    disabled?: boolean | undefined;
    onChange?: ((e: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
    required?: boolean | undefined;
    error?: string | undefined;
}>>;
