import React from 'react';
import styles from './Checkbox.module.scss';

export type CheckboxOptionType = {
  name: string;
  value: string;
  children?: React.ReactNode;
};

type CheckboxOptionTypeOptionalValue = Omit<CheckboxOptionType, 'value'> & {
  value?: string;
}

type CheckboxProps = {
  name?: string;
  label?: string;
  labelClass?: string;
  option?: CheckboxOptionTypeOptionalValue;
  description?: string;
  defaultValue?: boolean;
  value?: boolean;
  disabled?: boolean;
  onClick?: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
};
const Checkbox: React.FC<CheckboxProps> = ({
  name,
  label,
  option,
  labelClass,
  disabled,
  defaultValue,
  value,
  onClick,
  required,
}) => {
  return (
    <div className={`${styles['checkbox']} ${disabled && styles['checkboxDisabled']}`}>
      <label className={`${labelClass} ${styles['checkboxLabel']}`}>
        <div>{label && label}</div>
        <input
          type="checkbox"
          name={name}
          onChange={onClick}
          required={required}
          defaultChecked={defaultValue}
          checked={value}
          disabled={disabled}
        />
        {option && (
          <span className={styles['checkboxLabelName']}>
            <span dangerouslySetInnerHTML={{ __html: option?.name || '' }} />
            {required ? <span className={styles['required']}>*</span> : ''}
          </span>
        )}
        {option?.children && <>{option?.children}</>}
      </label>
    </div>
  );
};

export default Checkbox;
