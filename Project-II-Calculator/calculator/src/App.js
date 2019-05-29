import React, { Component } from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

class App extends Component {
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  operations = ['÷', 'x', '-', '+', '='];
  state = {
    total: null,
    temp: null
  };

  calculate = operation => {
    if (this.state.temp !== null) {
      this.setState(prevState => ({
        temp: `${prevState.temp} ${operation}`
      }));
    } else {
      this.setState({ temp: `${this.state.total} ${operation}` })
    }
  };

  clickHandler = value => {
    let strValue = String(value);
    switch (strValue) {
      case '+':
        this.calculate('+');
        break;
      case '-':
        this.calculate('-');
        break;
      case '÷':
        this.calculate('/');
        break;
      case 'x':
        this.calculate('*');
        break;
      case '=':
        break;
      case 'clear':
        this.setState({ total: null, temp: null });
        break;
      default:
        if (this.state.total === null) {
          this.setState({ total: strValue });
        } else {
          this.setState(prevState => ({
            total: prevState.total + strValue
          }));
        }
    }
  };

  render() {
    return (
      <div className="main-container">
        <h3>Welcome to React Calculator</h3>
        <div className="calculator">
          <CalculatorDisplay
            displayValue={this.state.total === null ? 0 : this.state.total}
          />
          <div className="buttons">
            <div className="numbers">
              <ActionButton value="clear" clickHandler={this.clickHandler} />
              {this.numbers.map(item => (
                <NumberButton
                  key={item}
                  value={item}
                  styleName="number-btn"
                  clickHandler={this.clickHandler}
                />
              ))}
              <ActionButton value="0" clickHandler={this.clickHandler} />
            </div>
            <div className="operations">
              {this.operations.map(item => (
                <NumberButton
                  key={item}
                  value={item}
                  styleName="operation-btn"
                  clickHandler={this.clickHandler}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
