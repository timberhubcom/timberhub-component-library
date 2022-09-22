import React from 'react';
import styles from './Button.module.scss';

export interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return <button className={`${styles.button} ${styles.test}`}>{props.label}</button>;
};

export default Button;
