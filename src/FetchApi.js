import React, { useState, useEffect } from 'react';
import './style.css';

export default function FetchApi() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/todos'
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);
  return (
    <div>
      {data.map((item) => (
        <li key={item.id}>
          {item.userId}-{item.title}
        </li>
      ))}
    </div>
  );
}
