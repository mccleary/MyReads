import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../../BooksAPI';
import Shelf from '../Shelf';


class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      query: ''
    }
  }

  componentDidMount() {
   BooksAPI.getAll().then((books) => {
     this.setState({books})
   });
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf;
      this.setState(state => ({
        books: state.books.filter((b) => b.id !== book.id).concat([book])
      }));
    });
  }


  render() {
    // const { updateBook } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
          <Shelf name="Currently Reading" books={this.state.books.filter((b) => b.shelf === "currentlyReading")} updateBook={this.updateBook} />
          <Shelf name="Want to Read" books={this.state.books.filter((b) => b.shelf === "wantToRead")} updateBook={this.updateBook} />
          <Shelf name="Read" books={this.state.books.filter((b) => b.shelf === "read")} updateBook={this.updateBook} />
          </div>
        </div>
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
      );
    }
}

export default MainPage
