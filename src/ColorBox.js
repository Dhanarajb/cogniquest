import React, { useState } from 'react';
import './style.css';

export default function ColorBox() {
  const [inputValue, setInputValue] = useState('');
  const [boxColor, setBoxColor] = useState('white');
  // useEffect(() => {}, []);

  // useEffect(() => {}, [data]);

  // useEffect(() => {
  //   return () => {
  //     console.log();
  //   };
  // }, []);

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setInputValue(inputText);

        // If not a hex code, try to set the color directly
        const colorName = new window.Option().style.color = inputText;
        if (colorName) {
          setBoxColor(colorName);
        } else {
          // Reset to white if parsing fails
          setBoxColor('white');
        }
     
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type a color name or hex code (e.g., red, #00ff00)"
      />
      <div
        style={{
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          backgroundColor: boxColor,
          marginTop: '10px',
        }}
      >
        {/* Box that changes color based on input */}
      </div>
    </div>
  );
}
