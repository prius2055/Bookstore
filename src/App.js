import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import BookList from './components/BookList';
import NewBookForm from './components/NewBookForm';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<BookList />} />
        <Route path='/categories' element={<p>Categories Component</p>} />
      </Routes>
      <NewBookForm />
    </div>
  );
}

export default App;
