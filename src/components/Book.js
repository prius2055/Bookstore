import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

import './Book.css';

const Book = () => (
  <div className='book'>
    <div>
      <p>Action</p>
      <h2>The Hunger Games</h2>
      <p>Suzanne Collins</p>
      <p>
        <span>Comments</span>|<span>Remove</span>|<span>Edit</span>
      </p>
    </div>
    <div className='level'>
      <FontAwesomeIcon icon={faCircle} />
      <div className='status'>
        <p>64%</p>
        <p>Completed</p>
      </div>
    </div>

    <div>
      <p>Current Chapter</p>
      <p>Chapter 17</p>
      <button type='submit'>Update Progress</button>
    </div>
  </div>
);

export default Book;
