/* eslint-disable */
import React, { Component } from 'react';

class App extends Component {

  constructor() {
    super();

    this.state = {
      result: ""
    }

    this.handleInput = this.handleInput.bind(this);
  }

  calculate = () => {
    try {
      this.setState({
        result: (eval(this.state.result) || "") + ""
      })
    } catch (e) {
      this.setState({
        result: 'error'
      })
    }
  }

  reset = () => {
    this.setState({
      result: ''
    })
  }

  handleInput = (button) => {
    // console.log(button.target.value)
    if (button.target.value === "=") {
      this.calculate()
    }

    else {
      this.setState({
        result: this.state.result + button.target.value
      })
    }
  }


  render() {

    const styles = {
      h2: {
        fontSize: 20,
        color: '#000000',
        textAlign: 'center'
      },
      decrease: {
        width: 50,
        height: 50,
        border: 0,
        boxShadow: '0 0 3px #ccc',
        fontSize: 20,
        margin: '0 20px'
      },
      p: {
        textAlign: 'center',
        height: 22,
        border: '2px solid #000000',
        maxWidth: 300,
        margin: 'auto'
      },
      increase: {
        width: 50,
        height: 50,
        border: 0,
        boxShadow: '0 0 3px #ccc',
        fontSize: 20,
        margin: '0 20px'
      },
      multiply: {
        width: 50,
        height: 50,
        border: 0,
        boxShadow: '0 0 3px #ccc',
        fontSize: 20,
        margin: '0 20px'
      },
      substract: {
        width: 50,
        height: 50,
        border: 0,
        boxShadow: '0 0 3px #ccc',
        fontSize: 20,
        margin: '0 20px'
      },
      buttons: {
        display: 'flex',
        justifyContent: 'center'
      },
      input: {
        padding: 20,
        width: '100%',
        maxWidth: 400,
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto'
      },
      numbers: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        maxWidth: 100,
        margin: '40px auto'
      },
      diggit: {
        flex: '1 50%',
        width: 50,
        height: 50,
        border: 0,
        boxShadow: '0 0 3px #ccc',
        fontSize: 20,
      },
      equals: {
        flex: '1 100%',
        width: 50,
        height: 50,
        border: 0,
        boxShadow: '0 0 3px #ccc',
        fontSize: 20,
      },
      reset: {
        width: 50,
        height: 50,
        border: 0,
        boxShadow: '0 0 3px #ccc',
        fontSize: 20,
        margin: '0 20px'
      }

    }
    return (
      <div>
        <h2 style={styles.h2}>Calculator - React App</h2>
        <p style={styles.p}>{this.state.result}</p><br />
        <div className="buttons" style={styles.buttons}>
          <button className="decrease" style={styles.decrease} onClick={this.handleInput} value="-">-</button>
          <button className="increase" style={styles.increase} onClick={this.handleInput} value="+">+</button>
          <button className="multiply" style={styles.multiply} onClick={this.handleInput} value="*">*</button>
          <button className="substract" style={styles.decrease} onClick={this.handleInput} value="/">/</button>
          <button className="reset" style={styles.reset} onClick={this.reset} value="C">C</button>
        </div>
        <div className="numbers" style={styles.numbers}>
          <button className="diggit" style={styles.diggit} onClick={this.handleInput} value="1">1</button>
          <button className="diggit" style={styles.diggit} onClick={this.handleInput} value="2">2</button>
          <button className="diggit" style={styles.diggit} onClick={this.handleInput} value="3">3</button>
          <button className="diggit" style={styles.diggit} onClick={this.handleInput} value="4">4</button>
          <button className="diggit" style={styles.diggit} onClick={this.handleInput} value="5">5</button>
          <button className="diggit" style={styles.diggit} onClick={this.handleInput} value="6">6</button>
          <button className="diggit" style={styles.diggit} onClick={this.handleInput} value="7">7</button>
          <button className="diggit" style={styles.diggit} onClick={this.handleInput} value="8">8</button>
          <button className="diggit" style={styles.diggit} onClick={this.handleInput} value="9">9</button>
          <button className="diggit" style={styles.diggit} onClick={this.handleInput} value="0">0</button>
          <button className="equals" style={styles.equals} onClick={this.handleInput} value="=">=</button>
        </div>
      </div>
    )
  }

}

export default App;
