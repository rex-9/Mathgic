import PropTypes from 'prop-types';
import '../index.css';

const buttonStyle = (bgColor, w) => ({
  width: w == null ? '100px' : w,
  height: '50px',
  padding: '5px',
  fontSize: '24px',
  textAlign: 'right',
  backgroundColor: bgColor,
  cursor: 'pointer',
  border: '1px solid gray',
  borderTop: 'none',
  borderRight: 'none',
});

const Button = (props) => {
  const {
    label,
    bgColor,
    width,
    updateValue,
  } = props;

  return <button style={buttonStyle(bgColor, width)} type="button" onClick={() => updateValue()}>{ label }</button>;
};

Button.propTypes = {
  updateValue: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  width: PropTypes.string,
};

Button.defaultProps = {
  bgColor: 'white',
  width: '100px',
};

export default Button;
