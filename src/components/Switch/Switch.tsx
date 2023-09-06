import React from 'react'

import styles from './Switch.module.scss'

type SwitchOptionType = {
  name: string
  children?: React.ReactNode
}

type SwitchProps = {
  label?: string
  name?: string
  option: SwitchOptionType
  labelClass?: string
  defaultValue?: boolean
  disabled?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  error?: string
}

const Switch: React.FC<SwitchProps> = ({
  label,
  name,
  option,
  labelClass,
  defaultValue,
  disabled = false,
  onChange,
  required = false,
  error = '',
}) => {
  return (
    <div>
      {label ? (
        <label className={`${styles['label']} ${labelClass}`}>
          <span dangerouslySetInnerHTML={{ __html: label }} />
          {required && <span className={styles['required']}>*</span>}
        </label>
      ) : (
        ''
      )}

      <div className={`${styles['toggle']}`}>
        <label>
          <input type={'checkbox'} name={name} onChange={onChange} defaultChecked={defaultValue} disabled={disabled} />
          <span>{option.name}</span>
        </label>
        {error && <div className={styles['errorDescription']}>{error}</div>}
      </div>
    </div>
  )
}

export default Switch
