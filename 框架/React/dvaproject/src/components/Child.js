import React from 'react';
import { Button } from 'antd';

class Child extends React.Component {
  constructor(props) {
    super(props);
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(nextProps);
  // }


  render() {
    const { page, updateState } = this.props;
    return (
      <div>
        Child
        {page}
        <Button type="primary">Primary</Button>
      </div>
    )
  }
}

export default Child;
