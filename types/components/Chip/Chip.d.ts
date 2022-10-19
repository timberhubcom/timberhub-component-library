import React from 'react';
declare type ChipProps = {
    text: string;
    color: 'green' | 'orange' | 'grey';
    prefix?: string;
};
declare const Chip: React.FC<ChipProps>;
export default Chip;
