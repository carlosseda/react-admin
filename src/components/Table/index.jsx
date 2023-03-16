import React, {useEffect, useState} from 'react';
import './Table.module.css';

export default  function Table() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api')
    .then(response => response.json())
    .then(data => {
      const {rows = []} = data;      
      setData(rows)   
    })  
  }, []); 

  return (
    <div className="table">
      {
        data.map((item, index) => {
          return (
            <div className='TableItem' key={index}>
              <h4>{item.name}</h4> 
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
    </div>
  );
}
