import './App.css'
import React from 'react'


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      base: 0,
      operand: '',
      operator: '',
      display: ''
    }

    this.appendInteger = this.appendInteger.bind(this)
    this.calculate = this.calculate.bind(this)
    this.clearOperation = this.clearOperation.bind(this);
  }

  appendInteger(int) {
    const newInt = this.state.operand + int.toString()
    this.setState({ operand: newInt, display: newInt })
  }

  calculate(i, j, o, n) {
    this.setState({ operator: n })
    switch (o) {
      case '+':
        return i + j
      case '-':
        return i - j
      case '*':
        return i * j
      case '/':
        return i / j
      case '=':
        return this.state.base
    }
  }

  clearOperation() {
    this.setState({
      base: 0,
      operand: '',
      operator: '',
      display: '',
      clear: true
    })
  }

  render() {
    return (
      <div className="container">
        <div className="header"></div>
        <div className="calculator" >
          <div className="display" >
            <div >{this.state.base}</div>
            <div >{this.state.operator}</div>
            <div >{this.state.operand}</div>
          </div>
          <div className="numpad">
            <div className="button-row" >
              <button className="button" onClick={() => this.appendInteger(7)} >7</button>
              <button className="button" onClick={() => this.appendInteger(8)} >8</button>
              <button className="button" onClick={() => this.appendInteger(9)} >9</button>
              <button className="button-operator" onClick={() => {
                if (this.state.operator === '') {
                  let base = this.state.operand !== '' ? parseInt(this.state.operand) : this.state.base
                  this.setState({ base: base, operand: '', operator: '+' })
                } else {
                  let stagedOperator = this.state.operator
                  let calculate = this.state.operand !== '' ? this.calculate(this.state.base, parseInt(this.state.operand), stagedOperator, '+') : this.state.base
                  this.setState({ base: calculate, operand: '', display: calculate })
                }

              }} >+</button>
            </div>
            <div className="button-row">
              <button className="button" onClick={() => this.appendInteger(4)} >4</button>
              <button className="button" onClick={() => this.appendInteger(5)} >5</button>
              <button className="button" onClick={() => this.appendInteger(6)} >6</button>
              <button className="button-operator" onClick={() => {
                if (this.state.operator === '') {
                  let base = this.state.operand !== '' ? parseInt(this.state.operand) : this.state.base
                  this.setState({ base: base, operand: '', operator: '-', display: base })
                } else {
                  let stagedOperator = this.state.operator
                  let calculate = this.state.operand !== '' ? this.calculate(this.state.base, parseInt(this.state.operand), stagedOperator, '-') : this.state.base
                  this.setState({ base: calculate, operand: '', display: calculate })
                }
              }} >-</button>
            </div>
            <div className="button-row">
              <button className="button" onClick={() => this.appendInteger(1)} >1</button>
              <button className="button" onClick={() => this.appendInteger(2)} >2</button>
              <button className="button" onClick={() => this.appendInteger(3)}>3</button>
              <button className="button-operator" onClick={() => {
                if (this.state.operator === '') {
                  let base = this.state.operand !== '' ? parseInt(this.state.operand) : this.state.base
                  this.setState({ base: base, operand: '', operator: '*' })
                } else {
                  let stagedOperator = this.state.operator
                  let calculate = this.state.operand !== '' ? this.calculate(this.state.base, parseInt(this.state.operand), stagedOperator, '*') : this.state.base
                  this.setState({ base: calculate, operand: '', display: calculate })
                }
              }} >*</button>
            </div>
            <div className="button-row" >
              <button className="button-operator" id="button-clear" onClick={() => this.clearOperation()}>clear</button>
              <button className="button" onClick={() => this.appendInteger(0)} >0</button>
              <button className="button-operator" onClick={() => {
                let stagedOperator = this.state.operator
                let result = this.calculate(this.state.base, parseInt(this.state.operand), stagedOperator, '')
                this.setState({ base: result, operand: '', operator: '', display: result })
              }} >=</button>
              <button className="button-operator" id="button-divide" onClick={() => {
                if (this.state.operator === '') {
                  let base = this.state.operand !== '' ? parseInt(this.state.operand) : this.state.base
                  this.setState({ base: base, operand: '', operator: '/' })
                } else {
                  let stagedOperator = this.state.operator
                  let calculate = this.state.operand !== '' ? this.calculate(this.state.base, parseInt(this.state.operand), stagedOperator, '/') : this.state.base
                  this.setState({ base: calculate, operand: '', display: calculate })
                }
              }}>/</button>
            </div>
          </div>
        </div>
        <div className="footer"></div >
      </div>
    )
  }

}


