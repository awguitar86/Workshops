import React, {Component} from 'react';
import './App.css';

export default function Input ({value, onChange}) {
    return(
        <input  
            value={value}
            onChange={onChange}
            className="input"
            placeholder="Enter Text"
            name="text"
        />
    )
}