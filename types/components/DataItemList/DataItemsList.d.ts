import React from 'react';
import { DataItemsProps } from '../DataItem/DataItem';
export type DataItemsListProps = {
    items: DataItemsProps[];
    className?: string;
};
export declare const DataItemsList: React.ForwardRefExoticComponent<DataItemsListProps & React.RefAttributes<HTMLDivElement>>;
export default DataItemsList;
