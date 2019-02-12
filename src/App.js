import React, { Component } from 'react';
import './App.css';
import Card from './card';
import cat from './cat.jpg';
import dog from './dog.jpg';
import owl from './owl.jpg';



class App extends Component {
  render() {
    return (
      <div className='highest'>
          <Card title={`Cat Uinversity of Sydney`} img src={cat} name={'Sherly White'} studentNumber={`7017`} valid={'2019-2021'}/>
          <Card title={`Dog Uinversity of Sydney`} img src={dog} name={'Oscar Kidman'} studentNumber={`9075`} valid={'2019-2021'}/>
          <Card title={`Owl Uinversity of Sydney`} img src={owl} name={'Avery Russell'} studentNumber={`8727`} valid={'2019-2021'}/>
      </div>
    );
  }
}

export default App;

