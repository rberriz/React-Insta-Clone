import React, { Component } from 'react';
import logo from './logo.svg';
import DummyData from './dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer'

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: DummyData
    };
  }
  render() {
    return (
      <div className="App">
        <PostContainer />
        <SearchBar />
        <CommentSection />
      </div>
    );
  }
}

export default App;
