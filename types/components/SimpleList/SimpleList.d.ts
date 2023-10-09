import React from 'react';
type SimpleItem = {
    text: string;
    style?: 'default' | 'bold';
};
export type SimpleListProps = {
    items: SimpleItem[][];
    className?: string;
};
export declare const SimpleList: React.ForwardRefExoticComponent<SimpleListProps & React.RefAttributes<HTMLDivElement>>;
export default SimpleList;
