import React from 'react';
import logo from './logo.svg';
import './App.css';
import DemoInput from './component/Input';
import DemoList from './component/List';
import SetS from './component/SetS';
import Control from './component/Control/index'

function App() {
  return (
    <div className="App">
      {/* <DemoInput />
      <DemoList />
      <SetS /> */}
      <Control />
    </div>
  );
}

export default App;
