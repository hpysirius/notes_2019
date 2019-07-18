import React from 'react';


class Child extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    componentDidMount() {
        console.log(this.myRef);
    }
    render() {
        return <input />
    }
}

export default Child;