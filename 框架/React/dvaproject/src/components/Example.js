import React from 'react';
import { connect } from 'dva';

import Child from './Child';


@connect(
  ({ example }) => example,
  (dispatch) => ({
    updateState(payload) {
      dispatch({ type: 'example/updateState', payload });
    }
  })
)
class Example extends React.Component {
  constructor(props) {
    super(props);
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(nextProps);
  // }
  render() {
    console.log(this.props);
    const { page, updateState } = this.props;
    return (
      <div>
        Example
        <Child page={page} updateState={updateState}/>
      </div>
    )
  }
}

export default Example;
