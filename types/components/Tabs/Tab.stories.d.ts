import React from 'react';
import { TabsProp } from './Tabs';
declare const _default: {
    title: string;
    component: React.FC<TabsProp>;
};
export default _default;
export declare const WithoutCounter: {
    args: {
        items: {
            title: string;
            value: string;
            name: string;
            disabled: boolean;
        }[];
        activeTab: string;
    };
};
export declare const WithCounter: {
    args: {
        counts: {
            open: number;
            closed: number;
            draft: number;
        };
        items: {
            title: string;
            value: string;
            name: string;
            disabled: boolean;
        }[];
        activeTab: string;
    };
};
export declare const WithOnClick: {
    render: () => React.JSX.Element;
};
export declare const WithDisabled: {
    render: () => React.JSX.Element;
};
