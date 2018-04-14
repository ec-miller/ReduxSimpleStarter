import React, { Component } from 'react';

import BookList from "../containers/book-list";
import BookDetail from '../containers/book-detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="bump"></div>
        <div className="m-3 row">
          <BookList />
          <BookDetail />
        </div>
      </div>
    );
  }
}
