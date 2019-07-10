import React from 'react';


class DemoInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            val: ''
        };
    }
    onChange = (e) => {
        this.setState({ val: e.target.value })
    }
    render(){
        console.log('input');
        return (
            <input value={this.state.val} onChange={this.onChange} />
        )
    }
}

export default DemoInput;