/* eslint-disable max-classes-per-file */

import React from 'react';
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

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Input />
        <br />
        <Button label="AC" />
        <Button label="+/-" />
        <Button label="%" />
        <Button label="%" bgColor="orange" />
        <br />
        <Button label={7} />
        <Button label={8} />
        <Button label={9} />
        <Button label="x" bgColor="orange" />
        <br />
        <Button label={4} />
        <Button label={5} />
        <Button label={6} />
        <Button label="-" bgColor="orange" />
        <br />
        <Button label={1} />
        <Button label={2} />
        <Button label={3} />
        <Button label="+" bgColor="orange" />
        <br />
        <Button label={0} width="200px" />
        <Button label="." />
        <Button label="=" bgColor="orange" />
      </div>
    );
  }
}

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <input id="input" type="number" placeholder="Input" />;
  }
}

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { label, bgColor, width } = this.props;
    return <button style={buttonStyle(bgColor, width)} type="button">{ label }</button>;
  }
}

Button.propTypes = {
  label: PropTypes.isRequired,
  bgColor: PropTypes.string,
  width: PropTypes.string,
};

Button.defaultProps = {
  bgColor: 'white',
  width: '100px',
};

export default Calculator;
