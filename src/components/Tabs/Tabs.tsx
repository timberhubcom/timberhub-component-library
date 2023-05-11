import { clsx } from 'clsx';
import React, { ReactComponentElement, ReactElement, ReactNode } from 'react';


import styles from './Tabs.module.scss';

type TabsItem = {
  title: string;
  value: string;
  name: string;
  disabled?: boolean
};

export type TabsProp = {
  items: TabsItem[];
  activeTab: string | string[];
  counts?: any;
  onClick: (value: string) => void;
};

const Tabs: React.FC<TabsProp> = ({ items, activeTab, counts, onClick }) => {

  return (
    <div className={styles.tabsWrapper}>
      <ul className={clsx(styles.tabsList,styles.flexAlignCenter)}>
        {items.map(({name, value, title, disabled=false}) => (
          <li
            key={name}
            className={activeTab === name ? styles.active : ''}
            data-testid={activeTab === name ? `active-${name}-tab` : null}
          >
            <button onClick={() => onClick(value)} disabled={disabled} className={clsx(disabled && styles.disabled)}>
              <div className={styles.flexAlignCenter}>
                {title}
                {counts && counts[name] ? (
                  <span className={clsx(styles.count, styles.flexCenter)}>
                    {counts[name]}
                  </span>
                ) : (
                  ''
                )}
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
