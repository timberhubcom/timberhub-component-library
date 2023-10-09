import React from 'react';
import Checkbox, { CheckboxOptionType } from '../Checkbox/Checkbox';
import styles from './CheckboxGroup.module.scss';

type CheckboxGroupProps = {
  name?: string;
  label?: string;
  labelClass?: string;
  options: CheckboxOptionType[];
  description?: string;
  defaultValues?: { [key: string]: string };
  disabled?: boolean;
  required?: boolean;
  error?: string;
};

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  name,
  label,
  labelClass,
  options,
  description,
  defaultValues,
  disabled,
  required,
  error = '',
}) => {
  return (
    <>
      {label && (
        <label className={`${labelClass && labelClass} ${styles['label']}`}>
          <span dangerouslySetInnerHTML={{ __html: label }} />
          {required && <span className={styles['required']}>*</span>}
        </label>
      )}
      <div>
        {options.map((option: CheckboxOptionType, index: number) => (
          <Checkbox
            name={name + '_' + option.value}
            option={option}
            key={`${option.name}_${index}`}
            disabled={disabled}
            defaultValue={defaultValues && !!defaultValues[option.value]}
          />
        ))}
      </div>
      {error && <div className={styles['errorDescription']}>{error}</div>}
      {description && <div className={styles['description']}>{description}</div>}
    </>
  );
};

export default CheckboxGroup;
