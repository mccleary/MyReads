import React, { Component } from 'react';
import { Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import MainPage from './components/pages/MainPage'
import SearchPage from './components/pages/SearchPage'
import './App.css'

class BooksApp extends Component {
  state = {
    books: [],
    showSearchPage: false
  }

  render() {
    // const { books } = this.state;
    return (
      <div className="app">
        <Route exact path="/" component={ MainPage } />
        <Route exact path="/search" component={ SearchPage } />
      </div>
    )
  }
}

export default BooksApp
