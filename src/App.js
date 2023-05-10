import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import BookList from './components/BookList';
import NewBookForm from './components/NewBookForm';

import './App.css';
import Categories from './components/Categories';




function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<BookList />} />
        <Route path='/categories' element={<Categories />} />
      </Routes>
      <NewBookForm />
    </div>
  );
}

export default App;
