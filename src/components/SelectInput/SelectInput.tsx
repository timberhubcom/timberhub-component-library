import React, { HTMLInputTypeAttribute } from 'react';
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
  selectDefaultValue?: SelectOption;
  selectValue?: SelectOption;
  inputDefaultValue?: string;
  inputValue?: string;
  inputType?: HTMLInputTypeAttribute;
  inputMin?: number;
  inputMax?: number;
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
  selectDefaultValue,
  selectValue,
  inputDefaultValue,
  inputValue,
  inputType = 'text',
  inputMin,
  inputMax,
  searchable = true,
  required = false,
  disabled = false,
  reverse = false,
  error,
}) => {
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
            value={inputValue}
            placeholder={inputPlaceholder}
            type={inputType}
            min={inputMin}
            max={inputMax}
            className={'border-right-none'}
          />
        )}
        <Select
          className={`${styles['reactSelect']} ${reverse ? styles['border-right-none'] : styles['border-left-none']}`}
          classNamePrefix={'react-select'}
          name={name}
          options={options}
          placeholder={placeholder}
          onChange={onSelectChange}
          isSearchable={searchable}
          value={selectValue}
          defaultValue={selectDefaultValue}
        />
        {reverse && (
          <TextField
            name={name}
            onChange={onInputChange}
            disabled={disabled}
            defaultValue={inputDefaultValue}
            value={inputValue}
            placeholder={inputPlaceholder}
            type={inputType}
            min={inputMin}
            max={inputMax}
            className={'border-left-none'}
          />
        )}
      </div>
      {error && <div className={styles['errorDescription']}>{error}</div>}
    </div>
  );
};

export default SelectInput;
