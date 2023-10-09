import React from 'react';
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
export declare const Base: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0a347bb9").R, {
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
} & {
    children?: React.ReactNode;
}>;
