import React from 'react';
import { css, cx } from '@emotion/css';
import { tokens } from '../../theme/tokens';
import { Typography } from '../Typography';
import { Link } from '../Link';

type ContactCardDetails = {
  src?: string;
  fullName?: string;
  location?: string;
  telephone?: string;
  mail: string;
};

type ContactCardProps = {
  title: string;
  details: ContactCardDetails;
  className?: string;
};

export const ContactCard = React.forwardRef<HTMLDivElement, ContactCardProps>(function ContactCard(
  { title, details, className },
  ref,
) {
  const { src, fullName, location, telephone, mail } = details;
  return (
    <div ref={ref} className={cx(styles.root, className)}>
      {!!src && <div className={styles.image(src)} />}
      <Typography variant={'headline_s'} align={'center'} className={cx(styles.title, styles.marginBottom)}>
        {title}
      </Typography>
      {!!fullName && <Typography variant={'headline_ss_xxs'}>{fullName}</Typography>}
      {!!location && (
        <Typography variant={'body_s'} className={styles.marginBottom} color={'grey.600'}>
          {location}
        </Typography>
      )}
      {!!telephone && (
        <Link variant={'text_link_s'} href={`tel:${telephone}`} color={'grey.600'}>
          {telephone}
        </Link>
      )}
      <Link variant={'text_link_s'} href={`mailto:${mail}`} color={'grey.600'}>
        {mail}
      </Link>
    </div>
  );
});

const styles = {
  root: css`
    max-height: 321px;
    background-color: ${tokens.colors.grey[50]};
    display: grid;
    justify-items: center;
    padding: 48px;
  `,
  image: (src: string) => css`
    height: 54px;
    width: 54px;
    margin-bottom: 24px;
    border-radius: 50%;
    background-image: url('${src}');
    user-select: none;
    background-size: cover;
    background-position: center;
  `,
  title: css`
    max-width: 161px;
    margin-bottom: 8px !important;
  `,
  marginBottom: css`
    margin-bottom: 8px !important;
  `,
};
