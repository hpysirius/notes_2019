import React from 'react';
import { Button } from 'antd';

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: 0
    }
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(nextProps);
  // }

  componentDidMount() {
    let { val } = this.state;
    setTimeout(() => {
      this.setState({
        val: ++val
      })
      this.setState({
        val: ++val
      })
      this.setState({
        val: val + 2
      })
    }, 0);
  }


  render() {
    const { page, updateState } = this.props;
    const { val } = this.state;
    return (
      <div>
        Child
        {page}
        <Button type="primary">Primary</Button>
        {val}
      </div>
    )
  }
}

export default Child;
