import PropTypes from 'prop-types';
import { useState } from 'react';
import '../index.css';

const buttonStyle = (bgColor, w) => ({
  width: w == null ? '100px' : w,
  height: '70px',
  color: 'white',
  padding: '5px',
  fontSize: '24px',
  backgroundColor: bgColor,
  cursor: 'pointer',
  border: '1px solid gray',
  borderTop: 'none',
  borderRight: 'none',
});

const hoverStyle = (w) => ({
  width: w == null ? '100px' : w,
  height: '70px',
  padding: '5px',
  fontSize: '24px',
  backgroundColor: 'white',
  color: 'black',
  cursor: 'pointer',
  border: '1px solid black',
});

const Button = (props) => {
  const [hover, setHover] = useState(false);

  const onMouseEnter = () => {
    setHover(true);
  };

  const onMouseLeave = () => {
    setHover(false);
  };

  const {
    label,
    bgColor,
    width,
    updateValue,
  } = props;

  return <button label={label} style={hover ? hoverStyle(bgColor, width) : buttonStyle(bgColor, width)} type="button" onClick={() => updateValue()} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>{ label }</button>;
};

Button.propTypes = {
  updateValue: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  width: PropTypes.string,
};

Button.defaultProps = {
  bgColor: '#46473E',
  width: '100px',
};

export default Button;
