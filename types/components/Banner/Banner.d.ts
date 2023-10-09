import React from 'react';
type IconSize = 's' | 'xs';
type BannerVariant = 'error' | 'warning' | 'neutral' | 'success' | 'info';
export type BannerProps = {
    iconSize?: IconSize;
    variant?: BannerVariant;
    title?: string;
    description?: string;
    className?: string;
};
export declare const Banner: React.ForwardRefExoticComponent<BannerProps & React.RefAttributes<HTMLDivElement>>;
export default Banner;
