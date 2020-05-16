import React from 'react';
import Cell from '../Cell';
import styles from './Table.css';

const Table = () => (
  <table className={styles.table}>
    <tbody>
      <tr>
        <td><Cell /></td>
        <td><Cell /></td>
        <td><Cell /></td>
      </tr>
      <tr>
        <td><Cell /></td>
        <td><Cell /></td>
        <td><Cell /></td>
      </tr>
      <tr>
        <td><Cell /></td>
        <td><Cell /></td>
        <td><Cell /></td>
      </tr>
    </tbody>
  </table>
)

export default Table;