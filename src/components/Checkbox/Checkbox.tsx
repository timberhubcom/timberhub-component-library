import React from 'react';
import styles from './Checkbox.module.scss';

export type CheckboxOptionType = {
  name: string;
  value: string;
  children?: React.ReactNode;
};

type CheckboxProps = {
  name?: string;
  label?: string;
  labelClass?: string;
  option: CheckboxOptionType;
  description?: string;
  defaultValue?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};
const Checkbox: React.FC<CheckboxProps> = ({
  name,
  label,
  option,
  labelClass,
  disabled,
  defaultValue,
  onChange,
  required,
}) => {
  return (
    <div className={`${styles['checkbox']} ${disabled && styles['checkboxDisabled']}`}>
      <label className={`${labelClass} ${styles['checkboxLabel']}`}>
        <div>{label && label}</div>
        <input
          type="checkbox"
          name={name}
          onChange={onChange}
          required={required}
          defaultChecked={defaultValue}
          disabled={disabled}
        />
        <span className={styles['checkboxLabelName']}>
          {option.name}
          {required ? <span className={styles['required']}>*</span> : ''}
        </span>
        {option.children !== undefined && <>{option.children}</>}
      </label>
    </div>
  );
};

export default Checkbox;
