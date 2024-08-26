import React, { useState } from 'react';

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const clickNumPad = () => {};

  const clickSignPad = () => {};

  const getResult = (prevInput: string, Input: string): void => {
    setInputValue();
  };
  return (
    <div>
      <div>
        <input type="text" id="dashboard" value={inputValue} readOnly />
      </div>
      <div>
        <button onClick={}>1</button>
        <button onClick={}>2</button>
        <button onClick={}>3</button>
        <button onClick={}>+</button>
      </div>
      <div>
        <button onClick={}>4</button>
        <button onClick={}>5</button>
        <button onClick={}>6</button>
        <button onClick={}>-</button>
      </div>
      <div>
        <button onClick={}>7</button>
        <button onClick={}>8</button>
        <button onClick={}>9</button>
        <button onClick={}>*</button>
      </div>
      <div>
        <button onClick={}>C</button>
        <button onClick={}>0</button>
        <button onClick={}>/</button>
        <button onClick={}>=</button>
      </div>
    </div>
  );
};

export default App;
