import logo from './logo.svg';
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      header: "Welcome to FullStack Dev 1",
      content: "React JS Programming Week09 Lab Exercise",
      id: "ID: 101462077",
      name: "Nicole Milmine",
      col: "George Brown College, Toronto"
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{this.state.header}</h1>
          <h2>{this.state.content}</h2>
          <h3>{this.state.id}</h3>
          <p>{this.state.name}</p>
          <p>{this.state.col}</p>
        </header>
      </div>
    );
  }
}

export default App;
