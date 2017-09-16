import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            count: 4
        };

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event){
        this.setState({
            count: event.target.value,
        });
        console.log(event.target.value);
        
    }

    drawBox(){
        var arr = [];
        for (var i = 1; i <= this.state.count; i++){
            
        arr[i] = <div className="block">{this.state.count}</div>;
        }
        return arr;
    }


    render() {
        return (
            <div>
                <div>
                    <input 
                        type="number" 
                        name="name" 
                        value={this.state.count} 
                        onChange={this.onInputChange} 
                        min="0"
                    />
                </div>
                <br/>
                {this.drawBox()}
            </div>
      );
    }
}


ReactDOM.render(<App />, document.getElementById('app'));

