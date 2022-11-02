import React, { useState } from 'react';
import Select, { SingleValue } from 'react-select';
import TextField from '../TextField';
import { SelectOption } from '../SelectItem/SelectItem';
import styles from './SelectInput.module.scss';

type SelectInputProps = {
  name: string;
  className?: string;
  label?: string;
  labelClass?: string;
  options?: SelectOption[];
  placeholder?: string;
  inputPlaceholder?: string;
  onSelectChange?: (opt: SingleValue<SelectOption>) => void;
  onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: SelectOption;
  inputDefaultValue?: string;
  searchable?: boolean;
  required?: boolean;
  disabled?: boolean;
  reverse?: boolean;
  error?: string;
};

const SelectInput: React.FC<SelectInputProps> = ({
  name,
  className = '',
  label,
  labelClass,
  options,
  placeholder,
  inputPlaceholder,
  onSelectChange,
  onInputChange,
  defaultValue = null,
  inputDefaultValue,
  searchable = true,
  required = false,
  disabled = false,
  reverse = false,
  error,
}) => {
  const [selectedOption, setSelectedOption] = useState<SingleValue<SelectOption>>(defaultValue);

  const _onSelectChange = (option: SingleValue<SelectOption>, _: any) => {
    setSelectedOption(option);
    if (onSelectChange) onSelectChange(option);
  };

  return (
    <div className={className}>
      {label && (
        <label className={`${labelClass} ${styles['label']}`}>
          <span dangerouslySetInnerHTML={{ __html: label }} />
          {required && <span className={styles['required']}>*</span>}
        </label>
      )}
      <div className={`${styles['container']}`}>
        {!reverse && (
          <TextField
            name={name}
            onChange={onInputChange}
            disabled={disabled}
            defaultValue={inputDefaultValue}
            placeholder={inputPlaceholder}
            className={'border-right-none'}
          />
        )}
        <Select
          className={`${styles['reactSelect']} ${reverse ? styles['border-right-none'] : styles['border-left-none']}`}
          classNamePrefix={'react-select'}
          name={name}
          options={options}
          placeholder={placeholder}
          onChange={_onSelectChange}
          isSearchable={searchable}
          value={selectedOption}
        />
        {reverse && (
          <TextField
            name={name}
            onChange={onInputChange}
            disabled={disabled}
            defaultValue={inputDefaultValue}
            placeholder={inputPlaceholder}
            className={'border-left-none'}
          />
        )}
      </div>
      {error && <div className={styles['errorDescription']}>{error}</div>}
    </div>
  );
};

export default SelectInput;
