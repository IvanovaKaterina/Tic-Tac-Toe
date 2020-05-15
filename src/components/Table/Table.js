import React from 'react';
import Cell from '../Cell';
import './Table.css';

const Table = () => (
  <table className="table">
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