import './NewBookForm.css';

const NewBookForm = () => (
  <div className='new-book'>
    <h2>Add New Book</h2>
    <form>
      <input type='text' placeholder='Book title' />
      <select>
        <option>Author</option>
        <option>Category</option>
      </select>
      <button type='submit'>Add book</button>
    </form>
  </div>
);

export default NewBookForm;
