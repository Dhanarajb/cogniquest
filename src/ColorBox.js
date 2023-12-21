import React, { useState } from 'react';
import './style.css';

export default function ColorBox() {
  const [inputvalue, setInputValue] = useState('');
  const [boxColor, setBoxColor] = useState('white');
  // useEffect(() => {}, []);

  // useEffect(() => {}, [data]);

  // useEffect(() => {
  //   return () => {
  //     console.log();
  //   };
  // }, []);

  const handleChange = (e) => {
    const inputText = e.target.value;
    setInputValue(inputText);

    if (inputText.toLowerCase() === 'green') {
      setBoxColor('green');
    } else {
      setBoxColor('white');
    }
  };
  return (
    <div>
      <input type="text" value={inputvalue} onChange={handleChange} />
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: boxColor,
        }}
      ></div>
    </div>
  );
}
