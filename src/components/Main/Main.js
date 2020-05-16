import React from 'react';
import Table from '../Table';
import Turn from '../Turn';
import styles from './Main.css';

const Main = () => (
  <div className={styles.container}>
    <Turn />
    <Table />
  </div>
)

export default Main;
