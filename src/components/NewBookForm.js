import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { addBook, postBook } from '../redux/books/booksSlice';
import Button from './Button';
import './NewBookForm.css';

const NewBookForm = () => {
  const [title, setTitle] = useState('');

  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setTitle(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      postBook({
        item_id: nanoid(),
        title,
        author: 'Macbeth',
        category: 'fiction',
      })
    );
    dispatch(
      addBook({
        item_id: nanoid(),
        title,
        author: 'Macbeth',
        category: 'fiction',
      })
    );
    setTitle('');
  };

  return (
    <div className='new-book'>
      <h2>Add New Book</h2>
      <form onSubmit={formSubmitHandler}>
        <input
          type='text'
          placeholder='Book title'
          value={title}
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
