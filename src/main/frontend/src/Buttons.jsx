import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";

import {evaluate, string, value} from "mathjs";
import {TextField} from "@material-ui/core";
import {createStore} from "redux";

const ADD_EXAMPLE = 'ADD_EXAMPLE';
let lastSymbolIsOperator = false;
let historyOfCalculations1 = [];


const initialState = {
    examples: [],
    solvedExamples: []
}


function reducer(state = initialState, action) {
    switch (action.type)
    {
        case ADD_EXAMPLE:
            return{
                examples: [...state.examples, action.example]
            }
        default: return state
    }
}

function addExample(example)
{
    return{
        type: ADD_EXAMPLE,
        example: example
    }
}
const store = createStore(reducer);

class Buttons extends Component{
    constructor(props) {
        super(props);
        this.state={
            value: "",
            operator: "",
            backendExamples: [],
            history: []
        };
    }
    componentDidMount() {
    }

    render(){
        return(

            <div style={{display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'}}>
                <div>
                    <TextField value="history of calculations" disabled
                               style={
                                   {
                                       backgroundColor: 'lightgray',
                                   }
                               }
                    >some</TextField>
                    {
                        historyOfCalculations1.map(
                            (calculation) =>
                                (<div
                                >{calculation}</div>))
                    }


                </div>
                <Input placeholder="Enter some new calculations"  color="primary"
                       style={
                           {
                               border: '3px solid black',
                           }
                       }
                       value={this.state.value}>
                </Input>
                <div className="firstRow">
                    <Button onClick={
                        () =>
                        {this.setState({value: this.state.value += '1'});
                            lastSymbolIsOperator = false;}
                    }>
                        {1}
                    </Button>
                    <Button
                        onClick={() => {
                            this.setState({
                                value: this.state.value
                                    += '2'
                            });
                            lastSymbolIsOperator = false;
                        }
                        }
                    >
                        {2}
                    </Button>
                    <Button onClick={() => {
                        this.setState({
                            value: this.state.value
                                += '3'
                        });
                        lastSymbolIsOperator = false;
                    }
                    }>
                        {3}
                    </Button>
                    <Button
                        onClick={

                            () =>
                            {
                                if(lastSymbolIsOperator)
                                {
                                    this.setState({value: this.state.value.slice(0,-1)+'+'});
                                    lastSymbolIsOperator = true;

                                }
                                else{
                                    this.setState({operator: this.state.operator = '+',
                                        value: this.state.value += this.state.operator
                                    })
                                    lastSymbolIsOperator = true;
                                }
                            }}>
                        {'+'}


                    </Button>
                    <Button onClick={() =>
                    {
                        if(lastSymbolIsOperator)
                        {
                            this.setState({value: this.state.value.slice(0,-1)+'-'});
                            lastSymbolIsOperator = true;

                        }
                        else{
                            this.setState({operator: this.state.operator = '-',
                                value: this.state.value += this.state.operator
                            })
                            lastSymbolIsOperator = true;
                        }
                    }}>
                        {'-'}
                    </Button>
                </div>
                <div className="secondRow">
                    <Button onClick={() => {
                        this.setState({
                            value: this.state.value
                                += '4'
                        });
                        lastSymbolIsOperator = false;
                    }
                    }>
                        {4}
                    </Button>
                    <Button onClick={() => {
                        this.setState({
                            value: this.state.value
                                += '5'
                        });
                        lastSymbolIsOperator = false;
                    }
                    }>
                        {5}
                    </Button>
                    <Button onClick={() => {
                        this.setState({
                            value: this.state.value
                                += '6'
                        });
                        lastSymbolIsOperator = false;
                    }
                    }>
                        {6}
                    </Button>
                    <Button onClick={() =>
                    {
                        if(lastSymbolIsOperator)
                        {
                            this.setState({value: this.state.value.slice(0,-1)+'*'});
                            lastSymbolIsOperator = true;

                        }
                        else{
                            this.setState({operator: this.state.operator = '*',
                                value: this.state.value += this.state.operator
                            })
                            lastSymbolIsOperator = true;
                        }
                    }}>
                        {'*'}
                    </Button>
                    <Button onClick={() =>
                    {
                        if(lastSymbolIsOperator)
                        {
                            this.setState({value: this.state.value.slice(0,-1)+'/'});
                            lastSymbolIsOperator = true;

                        }
                        else{
                            this.setState({operator: this.state.operator = '/',
                                value: this.state.value += this.state.operator
                            })
                            lastSymbolIsOperator = true;
                        }
                    }}>
                        {'/'}
                    </Button>
                </div>
                <div className="thirdRow">
                    <Button onClick={() => {
                        this.setState({
                            value: this.state.value
                                += '7'
                        });
                        lastSymbolIsOperator = false;
                    }
                    }>
                        {7}
                    </Button>
                    <Button onClick={() => {
                        this.setState({
                            value: this.state.value
                                += '8'
                        });
                        lastSymbolIsOperator = false;
                    }
                    }>
                        {8}
                    </Button>
                    <Button onClick={() => {
                        this.setState({
                            value: this.state.value
                                += '9'
                        });
                        lastSymbolIsOperator = false;
                    }
                    }>
                        {9}
                    </Button>
                    <Button onClick={() => {
                        this.setState({
                            value: this.state.value
                                += '0'
                        });
                        lastSymbolIsOperator = false;
                    }
                    }>
                        {'0'}
                    </Button>
                    <Button onClick={
                        () =>
                        {
                            historyOfCalculations1.push(this.state.value);

                            let result = 0;
                            switch (this.state.operator) {
                                case '+':
                                    result = evaluate(this.state.value);
                                    this.setState({
                                        value: this.state.value = result
                                    });
                                    break;
                                case '-':
                                    result = evaluate(this.state.value);
                                    this.setState({
                                        value: this.state.value = result
                                    });

                                    break;
                                case '*':
                                    result = evaluate(this.state.value);
                                    this.setState({
                                        value: this.state.value = result
                                    });
                                    break;
                                case '/':
                                    result = evaluate(this.state.value);
                                    this.setState({
                                        value: this.state.value = result
                                    });
                                    break;
                            }
                            lastSymbolIsOperator = false;
                        }
                    }>
                        {'='}
                    </Button>
                </div>
                <Button variant="outlined" color="primary" size="large"
                onClick={
                    () =>
                    {
                        this.setState({backendExamples:this.state.backendExamples = []});
                        console.log(historyOfCalculations1.length);
                        fetch("http://localhost:8080/math/examples").
                            then(response =>
                                 response.json()
                        ).then(result=> {
                            this.setState({
                                backendExamples: result
                            })
                            console.log(this.state.backendExamples.length)
                            for (let i = 0; i < this.state.backendExamples.length; i++) {
                                store.dispatch(addExample(this.state.backendExamples[i]))
                            }
                            for (let i = 0; i < store.getState().examples.length; i++) {
                                this.setState(
                                    {
                                        value: this.state.value = store.getState().examples[i] + ' ='
                                            + evaluate(store.getState().examples[i])

                                    });
                                if(historyOfCalculations1.includes(this.state.value))
                                {
                                    continue;
                                }
                                else{
                                    historyOfCalculations1.push(this.state.value);
                                }
                                this.setState({value: this.state.value = ""});
                            }
                        })

                    }
                }
                >Get and solve math examples</Button>
            </div>
        )
    }

}
export default Buttons;