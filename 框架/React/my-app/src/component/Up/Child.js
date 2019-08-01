import React from 'react';

export default class Child extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
        console.log('constructor');
    }
    componentWillMount(){
        console.log('componentWillMount');
    }
    componentDidMount(){
        console.log('componentDidMount');
    }
    render() {
        console.log(this.props, 'aaaa');
        return (
           <div>{this.props.val}</div>
        )
    }
}

