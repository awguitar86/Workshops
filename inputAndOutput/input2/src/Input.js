import React, {Component} from 'react';
import './App.css';

export default function Input ({ value, onChange }) {
    return(
        <input 
            className="input" 
            type="text" 
            name="text" 
            placeholder="Enter Text" 
            value={value} 
            onChange={onChange}
        />
        
    )
}
