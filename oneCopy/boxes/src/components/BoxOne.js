import React, {Component} from 'react';

export default class BoxOne extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return (
            <div>
                <div className="block">
                    <span>The type is {this.props.type}</span>
                    <span>The count is {this.props.count}</span>
                </div>
            </div>
        )
    }



}