import React from 'react';
import BookCard from './BookCard/BookCard';
import './BooksList.css';

const BooksList = props => {
    const books = props.books.map(book => {
        return <BookCard key={book.img} book={book} />;
    });
    return <div className='book-list'>{books}</div>;
};

export default BooksList;
