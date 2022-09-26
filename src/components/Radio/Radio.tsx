import React from 'react';
import styles from './Radio.module.scss';

type RadioOptionType = {
  name: string;
  children?: React.ReactNode;
};

type RadioProps = {
  name?: string;
  option: RadioOptionType;
  defaultValue?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Radio: React.FC<RadioProps> = ({ name, option, defaultValue, disabled = false, onChange }) => {
  return (
    <>
      <div className={`${styles['radio']} ${disabled && styles['disabled']}`}>
        <label>
          <input type="radio" name={name} onChange={onChange} defaultChecked={defaultValue} disabled={disabled} />
          <span>{option.name}</span>
        </label>
      </div>
    </>
  );
};

export default Radio;
