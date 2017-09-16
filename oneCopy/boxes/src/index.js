import React from 'react';
import ReactDOM from 'react-dom';
import BoxOne from './components/BoxOne';

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
                {/* {this.drawBox()} */}
                <BoxOne count="1" type="number. "/>
                <BoxOne count="2" type="name. " />
                <BoxOne count="3" type="email. "/>
                <BoxOne count="4" type="submit. "/>
            </div>
      );
    }
}


ReactDOM.render(<App />, document.getElementById('app'));
