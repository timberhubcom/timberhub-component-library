import React from 'react';
import styles from './Chip.module.scss';

type ChipProps = {
  text: string;
  color?: 'green' | 'orange' | 'grey' | 'blue';
  prefix?: string;
};

const Chip: React.FC<ChipProps> = ({ text, color = 'grey', prefix }) => {
  return (
    <div className={`${styles['chip']} ${styles[color]}`}>
      {prefix && <span className={styles['prefix']}>{prefix}</span>}
      <span className={styles['text']}>{text}</span>
    </div>
  );
};

export default Chip;
