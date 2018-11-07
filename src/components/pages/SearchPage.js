import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../../BooksAPI';
import Book from '../Book';
// import './App.css';


class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      results: [],
      query: ""
    }
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    });
  }

  updateQuery = (query) => {
    this.setState({query: query.trim()}, this.submitSearch);
  }

  submitSearch() {
    if(this.state.query === '') {
      return this.setState({ results: [] });
    }
    BooksAPI.search(this.state.query).then((books) => {
      if (books.error) {
        return this.setState({ results: [] });
      }
      books.map(book => (this.state.books.filter((b) => b.id === book.id).map(b => book.shelf = b.shelf)))
        return this.setState({ results: books })
    })
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then((books) => {
      book.shelf = shelf;
      this.setState(state => ({
        books: state.books.filter((b) => b.id !== book.id).concat([book])
      }));
    });
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(event) => this.updateQuery(event.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.results.map((book, key) => <Book updateBook={this.updateBook} book={book} key={key} />)}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchPage
