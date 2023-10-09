import React from 'react';
export type DataItemsProps = {
    icon: string;
    title: string;
    description?: string;
    className?: string;
};
export declare const DataItem: React.ForwardRefExoticComponent<DataItemsProps & React.RefAttributes<HTMLDivElement>>;
export default DataItem;
