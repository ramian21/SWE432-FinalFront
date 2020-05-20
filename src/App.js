import React, { Component } from 'react';
import InputForm from './InputForm';
import './App.css';

class App extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         selectedOption: "option1"
    //     };
    // }

    // handleOptionChange = changeEvent => {
    //     this.setState({
    //         selectedOption: changeEvent.target.value
    //     });
    // };

    render() {
        return (
            <div className="App">
                <InputForm />
            </div>
        );
    }

}

export default App; 