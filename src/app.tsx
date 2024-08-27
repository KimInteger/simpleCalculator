import React, { useState } from 'react';

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [prevInputValue, setPrevInputValue] = useState<string>('');
  const [operator, setOperator] = useState<string>('');

  /**
   * @brief 넘버 패드를 클릭하면 그 값이 DashBoard에 추가되는 기능
   * @param e 해당 요소의 textContent
   */
  const clickNumPad = (e: React.MouseEvent<HTMLButtonElement>): void => {
    let numBtn = e.currentTarget;
    let numValue = numBtn.textContent;
    setInputValue(inputValue + numValue);
  };

  /**
   * @brief 연산자 버튼을 set하는 기능
   * @details 입력되어 있는 inputValue값을 prevInput에 Set하고 연산자를 Set함. 이후 DashBoard 클린
   * @param e 해당 요소의 textContent를 감지하기 위함.
   */
  const clickSignPad = (e: React.MouseEvent<HTMLButtonElement>): void => {
    let opPad = e.currentTarget;
    let selectOP: string = opPad.textContent || '';
    setPrevInputValue(inputValue);
    setOperator(selectOP);
    setInputValue('');
  };

  /**
   * @brief 2개의 숫자를 연산하는 기능
   * @details Set되어있는 2개의 값을 Set되어있는 연산자에 따라 연산한 이후 DashBoard에 값을 나타냄.
   */
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

  /**
   * @brief DashBoard를 비롯한 모든 State를 공란으로 할당하는 기능
   */
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
