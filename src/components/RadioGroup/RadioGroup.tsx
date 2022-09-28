import React, { useState } from 'react';
import styles from './RadioGroup.module.scss';
import { RadioOptionType } from '../Radio/Radio';
import Radio from '../Radio';
import Button from '../Button';

type RadioGroupProps = {
  label?: string;
  labelClass?: string;
  options: RadioOptionType[];
  defaultValue?: string;
  disabled?: boolean;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  resetText?: string;
};

const RadioGroup: React.FC<RadioGroupProps> = ({
  label,
  labelClass,
  options,
  defaultValue,
  disabled = false,
  required,
  onChange,
  resetText,
}) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(defaultValue || null);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.currentTarget.value);
    if (onChange) onChange(e);
  };

  const onResetHandler = () => {
    setSelectedValue(null);
  };

  return (
    <>
      {label && (
        <label className={`${labelClass && labelClass} ${styles['label']}`}>
          <span dangerouslySetInnerHTML={{ __html: label }} />
          {required && <span className={styles['required']}>*</span>}
        </label>
      )}
      <div className={`${disabled && styles['disabled']}`}>
        {options.length &&
          options.map((option: RadioOptionType, index: number) => (
            <Radio
              option={option}
              onChange={onChangeHandler}
              key={`${option.name}_${index}`}
              checked={selectedValue === option.value}
              disabled={disabled}
            />
          ))}
      </div>
      {resetText && (
        <Button type={'plain'} onClick={onResetHandler}>
          {resetText}
        </Button>
      )}
    </>
  );
};

export default RadioGroup;
