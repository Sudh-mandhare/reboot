import React, { useState } from 'react';

function TextFieldComponent() {
  const [inputText, setInputText] = useState('');
  /* const [displayedText, setDisplayedText] = useState(''); */

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={handleChange}
        placeholder="Enter text..."
      />
      {/* <div>
        <p>{displayedText}</p>
      </div> */}
    </div>
  );
}

export default TextFieldComponent;
