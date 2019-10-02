import React from 'react';
import ReactDOM from 'react-dom';
import KeyPadButton from './button';
import CalResult from './result';
import './index.css';
import './App.css'

class App extends React.Component{
    constructor(){
        super();
        this.state={
            result:""
        }
    }
    onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "DEL"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    }
    calculate = () => {
        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(this.state.result) ) 
            })
        } catch (e) {
            this.setState({
                result: "syntax error"
            })

        }
    }
    reset=()=>{
        this.setState({
            result:" "
        })

    }
    backspace = () => {
        this.setState({
            result: this.state.result.slice(0,-1)
        })
    };

    render(){
        return(
            <div>
                <h1 align="center">Simple Calculator</h1>
                <div className="calculator-body">
                    <CalResult result={this.state.result}/>
                    <KeyPadButton onClick={this.onClick}/>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));