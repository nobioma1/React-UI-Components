import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let operations = ['÷', 'x', '-', '+', '='];

  return (
    <div className="main-container">
      <h3>Welcome to React Calculator</h3>
      <div className="calculator">
        <CalculatorDisplay />
        <div className="buttons">
          <div className="numbers">
            <ActionButton value="clear" />
            {numbers.map(item => (
              <NumberButton key={item} value={item} styleName="number-btn" />
            ))}
            <ActionButton value="0" />
          </div>
          <div className="operations">
            {operations.map(item => (
              <NumberButton key={item} value={item} styleName="operation-btn" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
