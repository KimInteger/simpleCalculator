import React, { useState } from 'react';

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [prevInputValue, setPrevInputValue] = useState<string>('');
  const [operator, setOperator] = useState<string>('');

  const clickNumPad = (e: React.MouseEvent<HTMLButtonElement>): void => {
    let numBtn = e.currentTarget;
    let numValue = numBtn.textContent;
    setInputValue(inputValue + numValue);
  };

  const clickSignPad = (e: React.MouseEvent<HTMLButtonElement>): void => {
    let opPad = e.currentTarget;
    let selectOP: string = opPad.textContent || '';
    setPrevInputValue(inputValue);
    setOperator(selectOP);
    setInputValue('');
  };

  const getResult = (): void => {
    let prevValue: number = parseInt(prevInputValue, 10);
    let currenValue: number = parseInt(inputValue, 10);
    let result: number;
    switch (operator) {
      case '+':
        result = prevValue + currenValue;
        setInputValue(result.toString());
        break;
      case '-':
        result = prevValue - currenValue;
        setInputValue(result.toString());
        break;
      case '*':
        result = prevValue * currenValue;
        setInputValue(result.toString());
        break;
      case '/':
        result = prevValue / currenValue;
        setInputValue(result.toString());
        break;
      default:
        setInputValue('');
        break;
    }
  };

  const clearDashboard = (): void => {
    setInputValue(''), setOperator(''), setPrevInputValue('');
  };
  return (
    <div>
      <div>
        <input type="text" id="dashboard" value={inputValue} readOnly />
      </div>
      <div>
        <button onClick={clickNumPad}>1</button>
        <button onClick={clickNumPad}>2</button>
        <button onClick={clickNumPad}>3</button>
        <button onClick={clickSignPad}>+</button>
      </div>
      <div>
        <button onClick={clickNumPad}>4</button>
        <button onClick={clickNumPad}>5</button>
        <button onClick={clickNumPad}>6</button>
        <button onClick={clickSignPad}>-</button>
      </div>
      <div>
        <button onClick={clickNumPad}>7</button>
        <button onClick={clickNumPad}>8</button>
        <button onClick={clickNumPad}>9</button>
        <button onClick={clickSignPad}>*</button>
      </div>
      <div>
        <button onClick={clearDashboard}>C</button>
        <button onClick={clickNumPad}>0</button>
        <button onClick={clickSignPad}>/</button>
        <button onClick={getResult}>=</button>
      </div>
    </div>
  );
};

export default App;
