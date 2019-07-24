import React from 'react';
import Child from './Child';

export default class Consumer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: 2
        }
        this.getResult = this.getResult.bind(this);
    }
    getResult(val){
        const value = val * val
        this.setState({
            value
        })
    }
    render() {
        const cProps = {
            getResult: this.getResult,
            value: this.state.value
        }
        return (
            <Child {...cProps} />
        )
    }
}

