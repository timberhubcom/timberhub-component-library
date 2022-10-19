import React from 'react';
import { ComponentStory } from '@storybook/react';
declare const _default: {
    title: string;
    component: React.FC<{
        name: string;
        className?: string | undefined;
        label?: string | undefined;
        options?: import("./SelectItem").SelectOption[] | undefined;
        placeholder?: string | undefined;
        labelClass?: string | undefined;
        onChange?: ((opt: import("react-select").SingleValue<import("./SelectItem").SelectOption>) => void) | undefined;
        defaultValue?: import("./SelectItem").SelectOption | undefined;
        searchable?: boolean | undefined;
        required?: boolean | undefined;
    }>;
};
export default _default;
export declare const Base: ComponentStory<React.FC<{
    name: string;
    className?: string | undefined;
    label?: string | undefined;
    options?: import("./SelectItem").SelectOption[] | undefined;
    placeholder?: string | undefined;
    labelClass?: string | undefined;
    onChange?: ((opt: import("react-select").SingleValue<import("./SelectItem").SelectOption>) => void) | undefined;
    defaultValue?: import("./SelectItem").SelectOption | undefined;
    searchable?: boolean | undefined;
    required?: boolean | undefined;
}>>;
export declare const Empty: ComponentStory<React.FC<{
    name: string;
    className?: string | undefined;
    label?: string | undefined;
    options?: import("./SelectItem").SelectOption[] | undefined;
    placeholder?: string | undefined;
    labelClass?: string | undefined;
    onChange?: ((opt: import("react-select").SingleValue<import("./SelectItem").SelectOption>) => void) | undefined;
    defaultValue?: import("./SelectItem").SelectOption | undefined;
    searchable?: boolean | undefined;
    required?: boolean | undefined;
}>>;
export declare const Default: ComponentStory<React.FC<{
    name: string;
    className?: string | undefined;
    label?: string | undefined;
    options?: import("./SelectItem").SelectOption[] | undefined;
    placeholder?: string | undefined;
    labelClass?: string | undefined;
    onChange?: ((opt: import("react-select").SingleValue<import("./SelectItem").SelectOption>) => void) | undefined;
    defaultValue?: import("./SelectItem").SelectOption | undefined;
    searchable?: boolean | undefined;
    required?: boolean | undefined;
}>>;
