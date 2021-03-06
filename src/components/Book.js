import React, { Component } from 'react';
import * as BooksAPI from '../BooksAPI';


class Book extends Component {
  changeShelf(value) {
    const { updateShelf } = this.props;
    updateShelf(this.props, value);
    this.setState({ shelf: value });
  }

  render() {
    let url = (this.props.book.imageLinks && `url(${this.props.book.imageLinks.thumbnail})`);

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: url }}></div>
            <div className="book-shelf-changer">
              <select value={this.props.book.shelf || "none"} onChange={(event) => this.props.updateBook(this.props.book, event.target.value)}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{this.props.book.authors || []}</div>
        </div>
      </li>
    );
  }
}

export default Book
