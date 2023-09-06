import React from 'react';
export declare const ChipColorEnum: {
    readonly GREEN: "green";
    readonly ORANGE: "orange";
    readonly GREY: "grey";
    readonly BLUE: "blue";
    readonly RED: "red";
};
export type ChipColorEnum = (typeof ChipColorEnum)[keyof typeof ChipColorEnum];
type ChipProps = {
    text: string;
    color?: ChipColorEnum;
    prefix?: string;
};
declare const Chip: React.FC<ChipProps>;
export default Chip;
