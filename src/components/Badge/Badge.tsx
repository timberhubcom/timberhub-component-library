import React from 'react';

import styles from './Badge.module.scss';

const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className={styles.badge}>{children}</div>;
};

export default Badge;
