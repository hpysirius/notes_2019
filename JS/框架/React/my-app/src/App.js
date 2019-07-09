import React from 'react';
import logo from './logo.svg';
import './App.css';
import DemoInput from './component/Input';
import DemoList from './component/List';
import SetS from './component/SetS';

function App() {
  return (
    <div className="App">
      <DemoInput />
      <DemoList />
      <SetS />
    </div>
  );
}

export default App;
