import React from 'react';
import { ComponentStory } from '@storybook/react';
declare const _default: {
    title: string;
    component: React.FC<{
        name: string;
        label?: string | undefined;
        options?: import("../SelectItem/SelectItem").SelectOption[] | undefined;
        placeholder?: string | undefined;
        labelClass?: string | undefined;
        onChange?: ((opt: import("react-select").SingleValue<import("../SelectItem/SelectItem").SelectOption>) => void) | undefined;
        defaultValue?: import("../SelectItem/SelectItem").SelectOption | undefined;
        searchable?: boolean | undefined;
        required?: boolean | undefined;
        disabled?: boolean | undefined;
        reverse?: boolean | undefined;
    }>;
};
export default _default;
export declare const Base: ComponentStory<React.FC<{
    name: string;
    label?: string | undefined;
    options?: import("../SelectItem/SelectItem").SelectOption[] | undefined;
    placeholder?: string | undefined;
    labelClass?: string | undefined;
    onChange?: ((opt: import("react-select").SingleValue<import("../SelectItem/SelectItem").SelectOption>) => void) | undefined;
    defaultValue?: import("../SelectItem/SelectItem").SelectOption | undefined;
    searchable?: boolean | undefined;
    required?: boolean | undefined;
    disabled?: boolean | undefined;
    reverse?: boolean | undefined;
}>>;
