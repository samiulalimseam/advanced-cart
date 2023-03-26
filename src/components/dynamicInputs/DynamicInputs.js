import React, { useState } from 'react';

function DynamicInputs({ numInputs }) {
  const [inputValues, setInputValues] = useState(Array(numInputs).fill(''));

  const handleInputChange = (index, event) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = event.target.value;
    setInputValues(newInputValues);
  };

  return (
    <div>
      {Array.from({ length: numInputs }, (_, index) => (
        <input
          key={index}
          value={inputValues[index]}
          onChange={(event) => handleInputChange(index, event)}
        />
      ))}
      <button onClick={() => console.log(inputValues)}>Get Values</button>
    </div>
  );
}

export default DynamicInputs;