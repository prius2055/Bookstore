import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

import './Header.css';

const Header = () => (
  <header>
    <div className='logo'>
      <h1>Bookstore CMS</h1>
      <ul>
        <li>
          <NavLink to='/'>Books</NavLink>
        </li>
        <li>
          <NavLink to='/categories'>Categories</NavLink>
        </li>
      </ul>
    </div>

    {/* <FontAwesomeIcon icon={faCircleUser} className='user'/> */}
    <FontAwesomeIcon icon={faUser} className='user' />
  </header>
);

export default Header;
