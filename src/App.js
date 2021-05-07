import React from 'react';
import './App.css';
import Button from './components/button';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      first: '',
      sec: '',
      op: '',
      output: 0,
      display: ''
    }

  }
  inputHandler = (e) => {
    const { op, first, sec, output, display } = this.state;

    if (output == 0 && op == '') {
      this.setState({ first: first + e });
      this.setState({ display: display + e });


    } else {
      this.setState({ sec: sec + e });
      this.setState({ display: display + e });

    }

  }

  addHandler = () => {
    const { display } = this.state;
    this.setState({ op: '+' });
    this.setState({ display: display + '+' });
  }

  resHandler = () => {
    const { first, sec, op } = this.state;

    switch (op) {
      case '+':
        let add = +first + +sec;
        console.log(add);
        this.setState({ output: add });
        this.setState({ first: add });
        this.setState({ sec: '' });
        break;
      case '-':
        let sub = +first - +sec;
        console.log(sub);
        this.setState({ output: sub });
        this.setState({ first: sub });
        this.setState({ sec: '' });
        break;
      case '*':
        let mul = +first * +sec;
        console.log(mul);
        this.setState({ output: mul });
        this.setState({ first: mul });
        this.setState({ sec: '' });
        break;
      case '/':
        let div = +first / +sec;
        console.log(div);
        this.setState({ output: div });
        this.setState({ first: div });
        this.setState({ sec: '' });
        break;
      default:
        break;
    }



  }



  subHandler = () => {
    const { display } = this.state;
    this.setState({ op: '-' });
    this.setState({ display: display + '-' });
  }

  mulHandler = () => {
    const { display } = this.state;
    this.setState({ op: '*' });
    this.setState({ display: display + '*' });
  }

  divHandler = () => {
    const { display } = this.state;
    this.setState({ op: '/' });
    this.setState({ display: display + '/' });
  }



  clearHandler = () => {
    this.setState({ first: '', sec: '', op: '', output: '0', display: '' });
  }

  render() {
    const { output, display } = this.state;
    return (
      <div>
        <div style={{ backgroundColor: "pink" }}><h1>CALCULATOR</h1></div>
        <div style={{ backgroundColor: "black", display: "inline-block", marginLeft: "40%" }}>
          <input type='String' value={display}></input>
          <div>
            <Button event={this.addHandler} name='+' />
            <Button event={this.subHandler} name='-' />
            <Button event={this.mulHandler} name='*' />
            <Button event={this.divHandler} name='/' />
          </div>

          <div>
            <Button event={this.inputHandler.bind(this, '1')} name='1' />
            <Button event={this.inputHandler.bind(this, '2')} name='2' />
            <Button event={this.inputHandler.bind(this, '3')} name='3' />
            <Button event={this.inputHandler.bind(this, '4')} name='4' />
          </div>

          <div>
            <Button event={this.inputHandler.bind(this, '5')} name='5' />
            <Button event={this.inputHandler.bind(this, '6')} name='6' />
            <Button event={this.inputHandler.bind(this, '7')} name='7' />
            <Button event={this.inputHandler.bind(this, '8')} name='8' />
          </div>

          <div>
            <Button event={this.inputHandler.bind(this, '9')} name='9' />
            <Button event={this.inputHandler.bind(this, '0')} name='0' />
            <Button event={this.clearHandler} name='clr' />
            <Button event={this.resHandler} name='=' />
          </div>



          <div style={{ color: "white", backgroundColor: "blue" }}><h1>{output}</h1></div>
        </div>
      </div>
    );
  }

}

export default App;


