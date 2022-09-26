import React from 'react';
import { ComponentStory } from '@storybook/react';
declare const _default: {
    title: string;
    component: React.FC<{
        name?: string | undefined;
        label?: string | undefined;
        labelClass?: string | undefined;
        option: {
            name: string;
            children?: React.ReactNode;
        };
        description?: string | undefined;
        defaultValue?: boolean | undefined;
        disabled?: boolean | undefined;
        onChange?: ((e: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
        required?: boolean | undefined;
    }>;
};
export default _default;
export declare const Base: ComponentStory<React.FC<{
    name?: string | undefined;
    label?: string | undefined;
    labelClass?: string | undefined;
    option: {
        name: string;
        children?: React.ReactNode;
    };
    description?: string | undefined;
    defaultValue?: boolean | undefined;
    disabled?: boolean | undefined;
    onChange?: ((e: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
    required?: boolean | undefined;
}>>;
export declare const Label: ComponentStory<React.FC<{
    name?: string | undefined;
    label?: string | undefined;
    labelClass?: string | undefined;
    option: {
        name: string;
        children?: React.ReactNode;
    };
    description?: string | undefined;
    defaultValue?: boolean | undefined;
    disabled?: boolean | undefined;
    onChange?: ((e: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
    required?: boolean | undefined;
}>>;
export declare const Disabled: ComponentStory<React.FC<{
    name?: string | undefined;
    label?: string | undefined;
    labelClass?: string | undefined;
    option: {
        name: string;
        children?: React.ReactNode;
    };
    description?: string | undefined;
    defaultValue?: boolean | undefined;
    disabled?: boolean | undefined;
    onChange?: ((e: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
    required?: boolean | undefined;
}>>;
export declare const Required: ComponentStory<React.FC<{
    name?: string | undefined;
    label?: string | undefined;
    labelClass?: string | undefined;
    option: {
        name: string;
        children?: React.ReactNode;
    };
    description?: string | undefined;
    defaultValue?: boolean | undefined;
    disabled?: boolean | undefined;
    onChange?: ((e: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
    required?: boolean | undefined;
}>>;
export declare const ChildComponent: ComponentStory<React.FC<{
    name?: string | undefined;
    label?: string | undefined;
    labelClass?: string | undefined;
    option: {
        name: string;
        children?: React.ReactNode;
    };
    description?: string | undefined;
    defaultValue?: boolean | undefined;
    disabled?: boolean | undefined;
    onChange?: ((e: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
    required?: boolean | undefined;
}>>;
