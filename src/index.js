import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search-bar'

const API_KEY = 'AIzaSyBCLuhdcvlUFhyks1mFeZ5ejaratqqMpw4'

//Create a new component. This should create some HTML.
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

//put this in the DOM
ReactDOM.render(<App />, document.querySelector('.container')); //Instantiate
