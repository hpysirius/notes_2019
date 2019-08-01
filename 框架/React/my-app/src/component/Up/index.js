import React from 'react';
import ChildCom from './Child';

export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val: 1,
            obj: {
                name: 'hh',
                val: 1
            }
        }
    }
    onChange = (e) => {
        const { obj } = this.state;
        obj.val = e.target.value;
        console.log(obj);
        this.setState({ val: e.target.value, obj });
    }
    render() {
        return (
            <div>
                <input onChange={(e) => this.onChange(e)} />
                <ChildCom obj={this.state.obj} />
            </div>

        )
    }
}

