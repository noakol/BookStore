import React, { Component } from 'react';
import {getBookList} from './Api';
import './App.css';

class App extends Component {

  componentDidMount() {
    getBookList();
  }

  render() {
    return (
      <div>
        <div>
          <label for="uname">type a book name: </label>
          <input type="text" id="uname" name="name"></input>
        </div>
        <div>
          <button onClick={() => console.log('clicked')}>Submit</button>
        </div>
      </div>
    )
  }
}

export default App;
