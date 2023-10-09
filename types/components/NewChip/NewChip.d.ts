import React from 'react';
export declare const ChipColorEnum: Readonly<{
    PRIMARY: "primary";
    GREY: "grey";
    ERROR: "error";
    WARNING: "warning";
    INFO: "info";
}>;
type ChipSize = 'small' | 'default';
type NewChipProps = {
    label: string;
    size?: ChipSize;
    addonStart?: React.ReactNode;
    color?: (typeof ChipColorEnum)[keyof typeof ChipColorEnum];
    onClick?: () => void;
    isLoading?: boolean;
    className?: string;
};
export declare const NewChip: React.ForwardRefExoticComponent<NewChipProps & React.RefAttributes<HTMLDivElement>>;
export {};
