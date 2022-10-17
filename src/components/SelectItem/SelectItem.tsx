import React, { useState } from 'react';
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
  defaultValue?: SelectOption;
  searchable?: boolean;
  required?: boolean;
};

const SelectItem: React.FC<SelectItemProps> = ({
  name,
  className,
  label,
  options = [],
  placeholder = 'select an option',
  labelClass,
  onChange,
  defaultValue = null,
  searchable = true,
  required = false,
}) => {
  const [selectedOption, setSelectedOption] = useState<SingleValue<SelectOption>>(defaultValue);

  const _onChange = (option: SingleValue<SelectOption>, _: any) => {
    setSelectedOption(option);
    if (onChange) onChange(option);
  };

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
        name={name}
        options={options}
        placeholder={placeholder}
        onChange={_onChange}
        isSearchable={searchable}
        value={selectedOption}
      />
    </div>
  );
};

export default SelectItem;
