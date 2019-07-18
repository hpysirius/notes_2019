import React from 'react';

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
      <div onClick={() => updateState({ page: 2 })}>
        Child
        {page}
      </div>
    )
  }
}

export default Child;
