import React, { Component } from 'react';
import {getBookList} from './Api/services';
import './App.css';
import BookList from './BookList';

class App extends Component {

  // componentDidMount() {
  //   getBookList().then((res) => {
  //     console.log(res)
  //   });
  // }

  clickHandler() {
    getBookList().then((res) => {
      console.log(res)
    });
  }

  render() {
    return (
      <div>
        <div>
          <label for="uname">type a book name: </label>
          <input type="text" id="uname" name="name"></input>
        </div>
        <div>
          <button onClick={() => this.clickHandler()}>Submit</button>
        </div>
        <BookList />
      </div>
    )
  }
}

export default App;
