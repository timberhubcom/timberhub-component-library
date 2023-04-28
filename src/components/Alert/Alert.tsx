import React from 'react';
import styles from './Alert.module.scss';
import clsx from 'clsx';
import Button from '../Button';

export interface AlertProps {
  variant?: 'default' | 'info' | 'warning' | 'error';
  className?: string;
  title?: string;
  children: React.ReactNode;
  buttonTitle: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const Alert: React.FC<AlertProps> = ({ variant = 'default', children, className='', onClick, title='', buttonTitle='' }) => {
  return (
    <div
      className={clsx(styles.alert, className, {
        [styles[`alert-${variant}`]]: variant,
      })}
    >
      <div className={styles['alert-title']}>{title || children}</div>
     {buttonTitle && <div className={styles.alertAction}>
        <Button onClick={onClick}>{buttonTitle}</Button>
      </div>}
    </div>
  );
};

export default Alert;
