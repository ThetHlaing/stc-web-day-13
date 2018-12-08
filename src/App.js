import React, { Component } from 'react';
import AddToDo from './containers/AddToDo';
import List from './containers/List';
import Footer from './component/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <AddToDo/>
        <List/>
        <Footer/>
      </div>
      
    );
  }
}

export default App;
