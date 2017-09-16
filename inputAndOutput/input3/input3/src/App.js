import React, {Component} from 'react';
import './App.css';
import Input from './Input';

export default class App extends Component {
  constructor(){
    super()

    this.state = {
      text: ''
    }
  }

  handleChange(event) {
    const state = this.state;
    const key = event.target.name;
    const value = event.target.value;

    state[key] = value;

    this.setState(state);
  }

  render() {
    return(
      <div>
        <h1 className="textInput">Text Input</h1>
        <Input value={this.state.text} onChange={this.handleChange.bind(this)}/>
        <div className="output">{/^[\w\d\s-]*$/.test(this.state.text) === true ? this.state.text : "ERROR! ONLY LETTERS AND NUMBERS ALLOWED!!"}</div>
      </div>
    )
  }
}
