import React, { HTMLInputTypeAttribute } from 'react';
import styles from './TextField.module.scss';

type TextFieldProps = {
  name?: string;
  label?: string;
  placeholder?: string;
  className?: string;
  labelClass?: string;
  description?: string;
  defaultValue?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: HTMLInputTypeAttribute;
  min?: number;
  max?: number;
  required?: boolean;
  error?: string;
};

const TextField: React.FC<TextFieldProps> = ({
  name,
  label,
  placeholder,
  className = '',
  labelClass,
  description = null,
  defaultValue,
  value,
  disabled = false,
  onChange,
  onBlur,
  type = 'text',
  min,
  max,
  required = false,
  error = '',
}) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (type === 'number' && min && min > 0) {
      e.currentTarget.value = e.currentTarget.value.replace(/\D+/g, '');
    }

    if (onChange) onChange(e);
  };

  const onBlurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (type === 'number' && min && min > 0) {
      e.currentTarget.value = e.currentTarget.value.replace(/\D+/g, '');
    }

    if (onBlur) onBlur(e);
  };

  return (
    <div className={styles['textFieldWrapper']}>
      {label && (
        <label className={`${labelClass && labelClass} ${styles['label']}`}>
          <span dangerouslySetInnerHTML={{ __html: label }} />
          {required && <span className={styles['required']}>*</span>}
        </label>
      )}
      <input
        className={`${styles['input']} ${disabled && styles['disabled']} ${type === 'number' && styles['number']} ${
          styles[className]
        }`}
        type={type}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        id={name}
        name={name}
        placeholder={placeholder}
        max={max}
        min={min}
        disabled={disabled}
        required={required}
        defaultValue={defaultValue}
        value={value}
      />
      {error && <div className={styles['errorDescription']}>{error}</div>}
      {description && <div className={styles['description']}>{description}</div>}
    </div>
  );
};

export default TextField;
