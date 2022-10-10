import React from 'react';
import { ComponentStory } from '@storybook/react';
declare const _default: {
    title: string;
    component: React.FC<{
        label?: string | undefined;
        name: string;
        options: {
            value: string;
            label: string;
        }[];
        placeholder?: string | undefined;
        labelClass?: string | undefined;
        onChange: (opt: {
            value: string;
            label: string;
        }) => void;
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
    label?: string | undefined;
    name: string;
    options: {
        value: string;
        label: string;
    }[];
    placeholder?: string | undefined;
    labelClass?: string | undefined;
    onChange: (opt: {
        value: string;
        label: string;
    }) => void;
    defaultValue?: {
        value: string;
        label: string;
    } | undefined;
    searchable?: boolean | undefined;
    required?: boolean | undefined;
}>>;
