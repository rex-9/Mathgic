import { useState } from 'react';
import { Link } from 'react-router-dom';

const style = {
  color: 'cyan',
  textDecoration: 'none',
  marginLeft: '20px',
  marginRight: '20px',
};

const hoverStyle = {
  color: 'yellow',
  textDecoration: 'underline',
  marginLeft: '20px',
  marginRight: '20px',
};

const Nav = () => {
  const [hoverHome, setHoverHome] = useState(false);
  const onMouseEnterHome = () => {
    setHoverHome(true);
  };
  const onMouseLeaveHome = () => {
    setHoverHome(false);
  };

  const [hoverCalculator, setHoverCalculator] = useState(false);
  const onMouseEnterCalculator = () => {
    setHoverCalculator(true);
  };
  const onMouseLeaveCalculator = () => {
    setHoverCalculator(false);
  };

  const [hoverQuote, setHoverQuote] = useState(false);
  const onMouseEnterQuote = () => {
    setHoverQuote(true);
  };
  const onMouseLeaveQuote = () => {
    setHoverQuote(false);
  };

  return (
    <nav>
      <div>
        <h1>Math Magicians</h1>
        <p>🔮</p>
      </div>
      <ul>
        <li><Link style={!hoverHome ? style : hoverStyle} onMouseEnter={onMouseEnterHome} onMouseLeave={onMouseLeaveHome} to="/">Home</Link></li>
        <li><Link style={!hoverCalculator ? style : hoverStyle} onMouseEnter={onMouseEnterCalculator} onMouseLeave={onMouseLeaveCalculator} to="calculator">Calculator</Link></li>
        <li><Link style={!hoverQuote ? style : hoverStyle} onMouseEnter={onMouseEnterQuote} onMouseLeave={onMouseLeaveQuote} to="quote">Quote</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
