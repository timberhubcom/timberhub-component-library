import React from 'react';
import { css } from '@emotion/css';

import { MuiAlert } from '../Alert';
import { Typography } from '../Typography';

import ErrorS from '../../assets/icons/banner/error-s.svg';
import ErrorXS from '../../assets/icons/banner/error-xs.svg';
import InfoS from '../../assets/icons/banner/info-s.svg';
import InfoXS from '../../assets/icons/banner/info-xs.svg';
import NeutralS from '../../assets/icons/banner/neutral-s.svg';
import NeutralXS from '../../assets/icons/banner/neutral-xs.svg';
import SuccessS from '../../assets/icons/banner/success-s.svg';
import SuccessXS from '../../assets/icons/banner/success-xs.svg';
import WarningS from '../../assets/icons/banner/warning-s.svg';
import WarningXS from '../../assets/icons/banner/warning-xs.svg';

type IconSize = 's' | 'xs';
type BannerVariant = 'error' | 'warning' | 'neutral' | 'success' | 'info';

export type BannerProps = {
  iconSize?: IconSize;
  variant?: BannerVariant;
  title?: string;
  description?: string;
  className?: string;
};

const IconComponents = {
  'error-s': ErrorS,
  'error-xs': ErrorXS,
  'info-s': InfoS,
  'info-xs': InfoXS,
  'neutral-s': NeutralS,
  'neutral-xs': NeutralXS,
  'success-s': SuccessS,
  'success-xs': SuccessXS,
  'warning-s': WarningS,
  'warning-xs': WarningXS,
};

export const Banner = React.forwardRef<HTMLDivElement, BannerProps>(function Banner(
  { variant = 'info', iconSize = 's', title, description, className },
  ref,
) {
  const IconPath = IconComponents[`${variant}-${iconSize}`];

  return (
    <MuiAlert
      variant={variant}
      className={className}
      ref={ref}
      icon={
        <IconPath className={styles.icon(iconSize)} />
      }
    >
      {title && <Typography variant="headline_ss_xxs">{title}</Typography>}
      {description && <Typography variant="body_s">{description}</Typography>}
    </MuiAlert>
  );
});

const styles = {
  icon: (iconSize: IconSize) => css`
    align-self: ${iconSize === 'xs' ? 'start' : 'center'};
  `
}

export default Banner;
