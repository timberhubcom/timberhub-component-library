import React from 'react';
import styles from './Chip.module.scss';

// export enum ChipColorEnum {
//   GREEN = 'green',
//   ORANGE = 'orange',
//   GREY = 'grey',
//   Blue = 'blue'
// }

export const ChipColorEnum = {
  GREEN : 'green',
  ORANGE : 'orange',
  GREY : 'grey',
  Blue : 'blue'
} as const;

// intentionally naming the variable the same as the type
// eslint-disable-next-line @typescript-eslint/no-redeclare
export type ChipColorEnum = typeof ChipColorEnum[keyof typeof ChipColorEnum];

type ChipProps = {
  text: string;
  color?: ChipColorEnum;
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
