import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getBooks } from '../redux/books/booksSlice';

import Book from './Book';
import './BookList.css';

const BookList = () => {
  const { bookArray, isLoading, error } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  if (isLoading) {
    return <p className='placeholder'>Loading...</p>;
  }

  if (error) {
    return <p>Cannot load page</p>;
  }

  // if (bookArray.length === 0) {
  //   return <p className='placeholder'>Your catalogue is empty</p>;
  // }

  return (
    <div className='book-list'>
      {bookArray.map((book) => (
        <Book key={book.id} bookInfo={book} />
      ))}
    </div>
  );
};

export default BookList;
