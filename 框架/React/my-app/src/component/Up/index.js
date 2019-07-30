import React from 'react';
import Child from './Child';

export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val: 1
        }
    }
    onChange(val) {
        this.setState({ val })
    }
    render() {
        console.log(111);
        return (
            <div>
                <input onChange={(val) => this.onChange(val)} />
                <Child val={this.state.val} />
            </div>

        )
    }
}

