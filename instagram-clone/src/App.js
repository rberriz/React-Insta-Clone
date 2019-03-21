import React, { Component } from 'react';
import logo from './logo.svg';
import DummyData from './dummy-data'
import PostContainer from './components/PostContainer/PostContainer'
import SearchBar from'./components/SearchBar/searchBar'

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
        <SearchBar />
        <PostContainer posts={this.state.posts} />
        
      </div>
    );
  }
}

export default App;
