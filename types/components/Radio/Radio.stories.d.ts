import React from 'react';
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
export declare const Base: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0a347bb9").R, {
    option: import("./Radio").RadioOptionType;
    checked?: boolean | undefined;
    disabled?: boolean | undefined;
    onChange?: ((e: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
} & {
    children?: React.ReactNode;
}>;
export declare const Disabled: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0a347bb9").R, {
    option: import("./Radio").RadioOptionType;
    checked?: boolean | undefined;
    disabled?: boolean | undefined;
    onChange?: ((e: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
} & {
    children?: React.ReactNode;
}>;
