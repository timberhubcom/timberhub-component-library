import React from 'react';
import { ExtendedSelectProps } from './Select';
declare const _default: {
    title: string;
    component: <T = unknown>({ options, children, required, emptyOptionText, ...props }: ExtendedSelectProps<T>) => React.JSX.Element;
};
export default _default;
export declare const Default: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0a347bb9").R, ExtendedSelectProps<string>>;
export declare const WithEmptyOption: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0a347bb9").R, ExtendedSelectProps<string>>;
export declare const Required: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0a347bb9").R, ExtendedSelectProps<string>>;
export declare const CustomStyles: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0a347bb9").R, ExtendedSelectProps<string>>;
export declare const WithChildren: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0a347bb9").R, ExtendedSelectProps<string>>;
