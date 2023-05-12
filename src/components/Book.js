// import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { delBook, removeBook } from '../redux/books/booksSlice';
import Button from './Button';

import './Book.css';

const Book = ({ bookInfo }) => {
  const dispatch = useDispatch();

  const removeBookHandler = () => {
    dispatch(removeBook(bookInfo.item_id));
    dispatch(delBook(bookInfo.item_id));
  };

  return (
    <div className='book'>
      <div className='actions'>
        <p>{bookInfo.category}</p>
        <h2>{bookInfo.title}</h2>
        <p>{bookInfo.author}</p>
        <button type='submit'>Comments</button> |
        <Button type='submit' click={removeBookHandler}>
          Remove
        </Button>
        |<button type='submit'>Edit</button>
      </div>
      <div className='level'>
        <FontAwesomeIcon icon={faCircle} />
        <div className='status'>
          <p>64%</p>
          <p>completed</p>
        </div>
      </div>

      <div>
        <p>Current Chapter</p>
        <p>Chapter 17</p>
        <button type='submit'>Update Progress</button>
      </div>
    </div>
  );
};

export default Book;

Book.propTypes = {
  bookInfo: propTypes.oneOfType([propTypes.object]).isRequired,
};
