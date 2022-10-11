import React from 'react';
import { ComponentStory } from '@storybook/react';
declare const _default: {
    title: string;
    component: React.FC<{
        name: string;
        label?: string | undefined;
        options?: {
            value: string;
            label: string;
        }[] | undefined;
        placeholder?: string | undefined;
        labelClass?: string | undefined;
        onChange?: ((opt: import("react-select").SingleValue<{
            value: string;
            label: string;
        }>) => void) | undefined;
        defaultValue?: {
            value: string;
            label: string;
        } | undefined;
        searchable?: boolean | undefined;
        required?: boolean | undefined;
    }>;
};
export default _default;
export declare const Base: ComponentStory<React.FC<{
    name: string;
    label?: string | undefined;
    options?: {
        value: string;
        label: string;
    }[] | undefined;
    placeholder?: string | undefined;
    labelClass?: string | undefined;
    onChange?: ((opt: import("react-select").SingleValue<{
        value: string;
        label: string;
    }>) => void) | undefined;
    defaultValue?: {
        value: string;
        label: string;
    } | undefined;
    searchable?: boolean | undefined;
    required?: boolean | undefined;
}>>;
export declare const Empty: ComponentStory<React.FC<{
    name: string;
    label?: string | undefined;
    options?: {
        value: string;
        label: string;
    }[] | undefined;
    placeholder?: string | undefined;
    labelClass?: string | undefined;
    onChange?: ((opt: import("react-select").SingleValue<{
        value: string;
        label: string;
    }>) => void) | undefined;
    defaultValue?: {
        value: string;
        label: string;
    } | undefined;
    searchable?: boolean | undefined;
    required?: boolean | undefined;
}>>;
export declare const Default: ComponentStory<React.FC<{
    name: string;
    label?: string | undefined;
    options?: {
        value: string;
        label: string;
    }[] | undefined;
    placeholder?: string | undefined;
    labelClass?: string | undefined;
    onChange?: ((opt: import("react-select").SingleValue<{
        value: string;
        label: string;
    }>) => void) | undefined;
    defaultValue?: {
        value: string;
        label: string;
    } | undefined;
    searchable?: boolean | undefined;
    required?: boolean | undefined;
}>>;
