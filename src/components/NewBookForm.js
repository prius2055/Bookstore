import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import Button from './Button';

import './NewBookForm.css';

const NewBookForm = () => {
  const dispatch = useDispatch();
  const [newBook, setNewBook] = useState('');

  const inputHandler = (e) => {
    setNewBook(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addBook(newBook));
    setNewBook('');
  };

  return (
    <div className='new-book'>
      <h2>Add New Book</h2>
      <form onSubmit={formSubmitHandler}>
        <input
          type='text'
          placeholder='Book title'
          value={newBook}
          onChange={inputHandler}
        />
        <select>
          <option>Author</option>
          <option>Category</option>
        </select>
        <Button>Add book</Button>
      </form>
    </div>
  );
};

export default NewBookForm;
