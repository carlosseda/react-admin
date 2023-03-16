import React, {useEffect, useState} from 'react';
import style from './Table.module.css';

export default function Table() {
  
  return (
    <div className={style.table}>
      {/* {
        data.map((item, index) => {
          return (
            <div className='TableItem' key={index}>
              <h4>{item.name}</h4> 
              <p>{item.description}</p>
            </div>
          )
        })
      } */}

      <div className={style.tableRow}>
        <ul>
          <li>
            <span>Nombre</span>Carlos
          </li>
          <li>
            <span>Email</span>llusnf@gmcil.com
          </li>
          <li>
            <span>Nombre</span>Carlos
          </li>
        </ul>

        <div className={style.tableButtons}>
          <div className={`${style.tableButton} ${style.editButton}`}>
            <svg viewBox="0 0 24 24">
              <path fill="currentColor" d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
            </svg>
          </div>
          <div className={`${style.tableButton} ${style.removeButton}`}>
            <svg viewBox="0 0 24 24">
              <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
