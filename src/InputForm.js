import React, { Component } from 'react';

class InputForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submitted: false,
            inputString: ''
        }
    }

    tableHtml;

    append = (event) => {
        let newState = this.state;
        newState.inputString = event.target.value;
        this.setState(newState);
    }

    sendData = async () => {
        let body = 'inputString=' + this.state.inputString;
        body = body.replace("&&", "AND");
        body = body.replace("&", "AND");
        body = body.replace(" and ", " AND ");
        body = body.replace("||", "OR");
        body = body.replace("|", "OR");
        body = body.replace(" or ", " OR ");
        body = body.replace("^^", "XOR");
        body = body.replace("^", "XOR");
        body = body.replace(" xor ", " XOR ");


        // body = (body.length < 1 ? body : body.substr(0, body.length - 1));

        // let url = 'https://swe432-assnseven.herokuapp.com/answer';
        let url = 'http://localhost:5000/tt';

        const res = await fetch(url,
            {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                //credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    // 'Content-Type': 'application/json'
                    // 'Content-Type': 'text/html',
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                //redirect: 'follow', // manual, *follow, error
                //referrerPolicy: 'no-referrer', // no-referrer, *client
                body  // body data type must match "Content-Type" header
            }
        );

        this.tableHtml = await res.text();
        //this.tableHtml = res;
        // console.log(res.text());

        // const json = await res.json();
        // let jsonKeys = Object.keys(json);
        // jsonKeys.forEach(result => {
        //     let indexChar = result.charAt(result.length - 1);
        //     let index = indexChar.valueOf();
        //     this.results[index] = json[result];
        // });
        this.setState({ submitted: true });

        // setResponse(json);
    }

    htmlify = () => {
        return { __html: this.tableHtml };
    }

    render() {
        return (
            <div>

                <h1>SWE 432 Final Truth Table Generator</h1>
                <span>Enter a boolean predicate:<br /></span>
                <span>(Examples: A OR B; x && y; M and N or Q; today | tomorrow)<br /></span>
                <input
                    type="textarea"
                    onChange={this.append}
                /><br />
                <button onClick={this.sendData}>Submit</button>
                <div dangerouslySetInnerHTML={this.htmlify()}></div>
            </div>
        );
    }
}

export default InputForm;