import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './card';
import cat from './cat.jpg';
import dog from './dog.jpg';
import owl from './owl.jpg';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Card title={`Cat Uinversity of Sydney`} img src={cat} subTitle={`Student no.7017`}/>
          <Card title={`Dog Uinversity of Sydney`} img src={dog} subTitle={`Student no.9075`}/>
          <Card title={`Owl Uinversity of Sydney`} img src={owl} subTitle={`Student no.8727`}/>
        </header>
      </div>
    );
  }
}

export default App;
