import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

import './Book.css';

const Book = ({ bookInfo }) => {
  const dispatch = useDispatch();

  const removeBookHandler = () => {
    dispatch(removeBook(bookInfo.id));
  };

  return (
    <div className='book'>
      <div className='actions'>
        <p>{bookInfo.genre}</p>
        <h2>{bookInfo.title}</h2>
        <p>{bookInfo.author}</p>
        <button type='submit'>Comments</button> |
        <button type='submit' onClick={removeBookHandler}>
          Remove
        </button>
        |<button type='submit'>Edit</button>
      </div>
      <div className='level'>
        <FontAwesomeIcon icon={faCircle} />
        <div className='status'>
          <p>{bookInfo.percentageCompletion}</p>
          {bookInfo.complete ? <p>completed</p> : ''}
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
