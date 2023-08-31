import React from 'react';
import { MuiAlert } from '../Alert';
import { Typography } from '../Typography';

import ErrorS from '../../icons/banner/error-s.svg';
import ErrorXS from '../../icons/banner/error-xs.svg';
import InfoS from '../../icons/banner/info-s.svg';
import InfoXS from '../../icons/banner/info-xs.svg';
import NeutralS from '../../icons/banner/neutral-s.svg';
import NeutralXS from '../../icons/banner/neutral-xs.svg';
import SuccessS from '../../icons/banner/success-s.svg';
import SuccessXS from '../../icons/banner/success-xs.svg';
import WarningS from '../../icons/banner/warning-s.svg';
import WarningXS from '../../icons/banner/warning-xs.svg';

type IconSize = 's' | 'xs';
type BannerVariant = 'error' | 'warning' | 'neutral' | 'success' | 'info';

export type BannerProps = {
  iconSize?: IconSize;
  variant?: BannerVariant;
  title?: string;
  description?: string;
}

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
}

export const Banner = React.forwardRef<HTMLDivElement, BannerProps>(function Banner({
  variant= 'info',
  iconSize = 's',
  title,
  description
}, ref,) {

  const iconPath: string = IconComponents[`${variant}-${iconSize}`];

  return (
    <MuiAlert variant={variant} icon={<img alt='' style={{ alignSelf: iconSize === 'xs' ? 'start' : 'center' }} src={iconPath} />}>
      {title && (
        <Typography variant="headline_ss_xxs">
          {title}
        </Typography>
      )}
      {description && (
        <Typography variant="body_s">
          {description}
        </Typography>
      )}
    </MuiAlert>
  )
})

export default Banner;
