import React from 'react';
import Example from '../components/Example';
import Child from '../components/Child';
import styles from './IndexPage.css';

function IndexPage() {
  return (
    <>
      <Example />
      <Child />
    </>
  );
}

IndexPage.propTypes = {
};

export default IndexPage;
