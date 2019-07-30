import React from 'react';

export default class a extends React.PureComponent {
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
        console.log(this.props.val, 'aaaa');
        return (
           <div>{this.props.val}</div>
        )
    }
}

