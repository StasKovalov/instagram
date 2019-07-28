import React from 'react';
import logo from './logo.svg';
import './App.css';

const Title = ({ children }) => <h1>{children}</h1>

function App() {
  return (
    <div className="App">
      <Title>Awesome title</Title>
      <Title>Awesome title</Title>
     <span>Stas changed</span>
    </div>
  );
}

export default App;
