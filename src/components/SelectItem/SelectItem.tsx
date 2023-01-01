import React from 'react';
import Select, { SingleValue } from 'react-select';
import styles from './SelectItem.module.scss';

export type SelectOption = {
  value: string;
  label: string;
};

type SelectItemProps = {
  name: string;
  className?: string;
  label?: string;
  options?: SelectOption[];
  placeholder?: string;
  labelClass?: string;
  onChange?: (opt: SingleValue<SelectOption>) => void;
  value?: SelectOption;
  defaultValue?: SelectOption;
  searchable?: boolean;
  clearable?: boolean;
  required?: boolean;
  error?: string;
};

const SelectItem: React.FC<SelectItemProps> = ({
  name,
  className,
  label,
  options = [],
  placeholder = 'select an option',
  labelClass,
  onChange,
  value,
  defaultValue = null,
  searchable = true,
  required = false,
  clearable = false,
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
      <Select
        className={styles['reactSelect']}
        classNamePrefix={'react-select'}
        defaultValue={defaultValue}
        name={name}
        options={options}
        placeholder={placeholder}
        onChange={onChange}
        isSearchable={searchable}
        isClearable={clearable}
        value={value}
      />
      {error && <div className={styles['errorDescription']}>{error}</div>}
    </div>
  );
};

export default SelectItem;
