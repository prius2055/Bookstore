// import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
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
      <div className='book-info'>
        <h4>{bookInfo.category}</h4>
        <h2>{bookInfo.title}</h2>
        <p>{bookInfo.author}</p>
        <div className='book-buttons'>
          <button type='submit'>Comments</button>
          <Button type='submit' click={removeBookHandler}>
            Remove
          </Button>
          <button type='submit'>Edit</button>
        </div>
      </div>
      <div className='level'>
        <FontAwesomeIcon
          icon={faCircleNotch}
          className='level-icon'
        />
        <div className='status'>
          <p className='percentage'>64%</p>
          <p className='completed'>completed</p>
        </div>
      </div>

      <div className='chapter'>
        <p className='current'>Current Chapter</p>
        <p className='chapter-number'>Chapter 17</p>
        <button type='submit'>Update Progress</button>
      </div>
    </div>
  );
};

export default Book;

Book.propTypes = {
  bookInfo: propTypes.oneOfType([propTypes.object]).isRequired,
};
