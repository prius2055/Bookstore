import { useSelector } from 'react-redux';

import Book from './Book';

import './BookList.css';

const BookList = () => {
  const { bookArray } = useSelector((state) => state.books);

  if (bookArray.length === 0) {
    return <p className='placeholder'>Your catalogue is empty</p>;
  }

  return (
    <div className='book-list'>
      {bookArray.map((book) => (
        <Book key={book.id} bookInfo={book} />
      ))}
    </div>
  );
};

export default BookList;
