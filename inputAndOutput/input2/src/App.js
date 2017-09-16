import React, { Component } from 'react';
import './App.css';
import Input from './Input';

export default class Typing extends Component{
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
        <h1 className="transform" >Transform Text</h1>
        <Input value={this.state.text} onChange={this.handleChange.bind(this)} />
        <div className="output">{this.state.text}</div>
      </div>
    );
  }
}
