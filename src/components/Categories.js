import { useSelector } from 'react-redux';
import './Categories.css';

const Categories = () => {
  const categoriesStatus = useSelector((state) => state.categories);

  if (categoriesStatus.length === 0) {
    return <p className='placeholder'>Under construction</p>;
  }

  return (
    <div>
      <h1>Categories</h1>
    </div>
  );
};

export default Categories;
