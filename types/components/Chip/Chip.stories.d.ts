import React from 'react';
declare const _default: {
    title: string;
    component: React.FC<{
        text: string;
        color?: import("./Chip").ChipColorEnum | undefined;
        prefix?: string | undefined;
    }>;
};
export default _default;
export declare const Base: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0a347bb9").R, {
    text: string;
    color?: import("./Chip").ChipColorEnum | undefined;
    prefix?: string | undefined;
} & {
    children?: React.ReactNode;
}>;
export declare const Color: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0a347bb9").R, any>;
export declare const Prefix: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0a347bb9").R, {
    text: string;
    color?: import("./Chip").ChipColorEnum | undefined;
    prefix?: string | undefined;
} & {
    children?: React.ReactNode;
}>;
