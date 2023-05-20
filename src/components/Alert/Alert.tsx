import React from 'react';
import styles from './Alert.module.scss';
import clsx from 'clsx';
import Button from '../Button';

export interface AlertProps {
  variant?: 'green' | 'blue' | 'yellow' | 'red';
  className?: string;
  title?: string;
  children: React.ReactNode;
  buttonTitle: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const variantColorMap = {
  green: styles['alert-default'],
  blue: styles['alert-info'],
  yellow: styles['alert-warning'],
  red: styles['alert-error'],
  grey: styles['alert-text'],
};

const Alert: React.FC<AlertProps> = ({ variant = 'green', children, className = '', onClick, title = '', buttonTitle = '' }) => {

  const variantStyle = variantColorMap[variant] ?? styles['alert-default'];

  return (
    <div
      className={clsx(styles.alert, className, variantStyle)}
    >
      <div className={styles['alert-title']}>{title || children}</div>
     {buttonTitle && <div className={styles.alertAction}>
        <Button onClick={onClick}>{buttonTitle}</Button>
      </div>}
    </div>
  );
};

export default Alert;
