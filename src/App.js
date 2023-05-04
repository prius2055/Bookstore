import { Route, Routes } from 'react-router-dom';

import Calculator from './pages/Calculator';
import Quotes from './pages/Quotes';
import Home from './pages/Home';
import NavBar from './components/Header';

import './App.css';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/books' element={<Home />} />
        <Route path='/categories' element={<Calculator />} />
        <Route path='*' element={<p>The page you search does not exist, please go back to home page</p>} />
      </Routes>
    </div>
  );
}

export default App;
