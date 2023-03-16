import React, {useEffect, useState} from 'react';
import './Form.module.css';

export default  function Form() {

  return (
    <form>
      {
        data.map((item, index) => {
          return (
            <div key={index}>
              <h1>{item.name}</h1> 
              <p>{item.description}</p>
            </div>
          )
        })
      }
      <button onClick={
          fetch('/api')
          .then(res => res.json())
          .then(data => setData(data))
      }>
          Fetch Data
      </button>
    </form>
  );
}
