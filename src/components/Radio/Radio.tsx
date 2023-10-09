import React from 'react';
import styles from './Radio.module.scss';

export type RadioOptionType = {
  name: string;
  value: string;
  children?: React.ReactNode;
};

type RadioProps = {
  option: RadioOptionType;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Radio: React.FC<RadioProps> = ({ option, checked, disabled = false, onChange }) => {
  return (
    <>
      <div className={`${styles['radio']} ${disabled && styles['disabled']}`}>
        <label>
          <input
            type="radio"
            name={option.name}
            value={option.value}
            onChange={onChange}
            checked={checked}
            disabled={disabled}
          />
          <span>{option.name}</span>
        </label>
      </div>
    </>
  );
};

export default Radio;
