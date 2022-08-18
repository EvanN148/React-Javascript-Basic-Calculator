import './App.css'
import React from 'react'


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      operationString: '',
      trailingOperand: '',
      operator: null,
      result: 0,
    }

    this.appendOperationString = this.appendOperationString.bind(this);
    this.setOperator = this.setOperator.bind(this);
    this.handleOperation = this.handleOperation.bind(this);
    this.clearOperation = this.clearOperation.bind(this);
  }

  appendOperationString(value) {
    if (this.state.operator) {
      let trailingValue = this.state.trailingOperand + value
      this.setState({ trailingOperand: trailingValue, result: trailingValue })
    } else {
      let newValue = this.state.operationString + value;
      this.setState({ operationString: newValue, result: newValue })
    }
  }

  setOperator(sym) {
    this.setState({ operator: sym, result: sym })
  }

  handleOperation() {
    const one = parseInt(this.state.operationString)
    const two = parseInt(this.state.trailingOperand)

    switch (this.state.operator) {
      case '+':
        let add = one + two;
        this.setState({ result: add, operator: null })
        break;
      case '-':
        let subtract = one - two;
        this.setState({ result: subtract, operator: null })
        break;
      case '*':
        let multiply = one * two;
        this.setState({ result: multiply, operator: null })
        break;
      case '/':
        let divide = one / two;
        this.setState({ result: divide, operator: null })
        break;
    }
  }

  clearOperation() {
    this.setState({
      operationString: '',
      trailingOperand: '',
      operator: null,
      result: 0,
    })
  }

  render() {
    return (
      <div className="page">
      <div className="header">
      </div>
      <div className="container">
        <div className="display" >{this.state.result.toString()}</div>
        <div className="numpad">
          <div className="button-row" >
            <button className="button" onClick={() => this.appendOperationString('7')} >7</button>
            <button className="button" onClick={() => this.appendOperationString('8')} >8</button>
            <button className="button" onClick={() => this.appendOperationString('9')} >9</button>
            <button className="button-operator" onClick={() => this.setOperator('+')} >+</button>
          </div>
          <div className="button-row">
            <button className="button" onClick={() => this.appendOperationString('4')} >4</button>
            <button className="button" onClick={() => this.appendOperationString('5')} >5</button>
            <button className="button" onClick={() => this.appendOperationString('6')} >6</button>
            <button className="button-operator" onClick={() => this.setOperator('-')} >-</button>
          </div>
          <div className="button-row">
            <button className="button" onClick={() => this.appendOperationString('1')} >1</button>
            <button className="button" onClick={() => this.appendOperationString('2')} >2</button>
            <button className="button" onClick={() => this.appendOperationString('3')}>3</button>
            <button className="button-operator" onClick={() => this.setOperator('*')} >*</button>
          </div>
          <div className="button-row" >
            <button className="button-operator" onClick={() => this.clearOperation()}>c</button>
            <button className="button" onClick={() => this.appendOperationString('0')} >0</button>
            <button className="button-operator" onClick={() => this.handleOperation()} >=</button>
            <button className="button-operator" onClick={() => this.setOperator('/')} >/</button>
          </div>
        </div>
      </div>
      <div className="footer"></div >
      </div>
    )
  }

}
