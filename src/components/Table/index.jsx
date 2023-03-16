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
      </div>
    </div>
  );
}
