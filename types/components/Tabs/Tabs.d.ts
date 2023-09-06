import React from 'react';
type TabsItem = {
    title: string;
    value: string;
    name: string;
    disabled?: boolean;
};
export type TabsProp = {
    items: TabsItem[];
    activeTab: string | string[];
    counts?: any;
    onClick: (value: string) => void;
};
declare const Tabs: React.FC<TabsProp>;
export default Tabs;
