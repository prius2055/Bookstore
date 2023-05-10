import propTypes from 'prop-types';

const Button = ({ children, click }) => (
  <button type='submit' onClick={click}>
    {children}
  </button>
);

export default Button;

Button.propTypes = {
  children: propTypes.string.isRequired,
  click: propTypes.func.isRequired,
};
