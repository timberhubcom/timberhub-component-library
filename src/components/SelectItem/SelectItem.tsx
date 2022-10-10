import React from 'react';
import { useState } from 'react';
import Select, { SingleValue } from 'react-select';
import styles from './SelectItem.module.scss';

type SelectOption = {
  value: string;
  label: string;
};

type SelectItemProps = {
  label?: string;
  name: string;
  options: SelectOption[];
  placeholder?: string;
  labelClass?: string;
  onChange: (opt: SingleValue<SelectOption>) => void;
  defaultValue?: SelectOption;
  searchable?: boolean;
  required?: boolean;
};

const SelectItem: React.FC<SelectItemProps> = ({
  label,
  name,
  options,
  labelClass,
  onChange,
  placeholder = 'select an option',
  defaultValue = undefined,
  searchable = true,
  required = false,
}) => {
  const [selectedOption, setSelectedOption] = useState<SelectOption | undefined>(defaultValue);
  const [requiredInput, setRequiredInput] = useState<boolean>(required);
  const [currentRef, setCurrentRef] = useState(null);

  if (selectedOption != null && requiredInput !== false) {
    setRequiredInput(false);
  }

  const _onChange = (option: SingleValue<SelectOption>, _: any) => {
    setSelectedOption(option);
    setRequiredInput(false);
    if (onChange) onChange(option);
  };

  const setSelectRef = (ref: any) => {
    setCurrentRef(ref);
  };

  if (defaultValue != null && selectedOption == null) {
    setSelectedOption(defaultValue);
  }

  return (
    <>
      {label ? (
        <label className={`${labelClass} ${styles['label']}`}>
          <span dangerouslySetInnerHTML={{ __html: label }} />
          {required ? <span className={'requiredItem'}>*</span> : ''}
        </label>
      ) : (
        ''
      )}
      <Select
        className={styles['reactSelect']}
        classNamePrefix={'react-select'}
        name={name}
        options={options}
        ref={setSelectRef}
        placeholder={placeholder}
        onChange={_onChange}
        isSearchable={searchable}
        value={selectedOption}
      />

      {requiredInput && (
        <input
          tabIndex={-1}
          autoComplete="off"
          style={{
            opacity: 0,
            width: '100%',
            height: 0,
            position: 'absolute',
          }}
          value={selectedOption?.value}
          onFocus={() => currentRef.focus()}
          required={required}
        />
      )}
    </>
  );
};

export default SelectItem;
