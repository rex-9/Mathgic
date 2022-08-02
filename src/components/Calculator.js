/* eslint-disable max-classes-per-file */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */

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
    this.setValue = this.setValue.bind(this);
    this.state = {
      value: 0,
      solution: 0,
    };
  }

  setValue(newValue, label) {
    if (label === 'AC') {
      console.log(`AC: ${label}`);
      this.setState({
        value: 0,
        solution: 0,
      });
    } else if (label === '+') {
      this.setState((oldState) => ({
        solution: oldState.value + oldState.solution,
        value: 0,
      }));
      console.log(this.state.solution);
    } else {
      console.log(`label: ${label}`);
      const newVal = parseInt(newValue, 10);
      this.setState((oldState) => ({
        value: oldState.value === 0 ? newVal : oldState.value * 10 + newVal,
      }));
    }
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <Input value={value} />
        <br />
        <Button label="AC" />
        <Button label="+/-" />
        <Button label="%" />
        <Button label="%" bgColor="orange" />
        <br />
        <Button label={7} setValue={this.setValue} />
        <Button label={8} setValue={this.setValue} />
        <Button label={9} setValue={this.setValue} />
        <Button label="x" bgColor="orange" />
        <br />
        <Button label={4} setValue={this.setValue} />
        <Button label={5} setValue={this.setValue} />
        <Button label={6} setValue={this.setValue} />
        <Button label="-" bgColor="orange" />
        <br />
        <Button label={1} setValue={this.setValue} />
        <Button label={2} setValue={this.setValue} />
        <Button label={3} setValue={this.setValue} />
        <Button label="+" bgColor="orange" />
        <br />
        <Button label={0} setValue={this.setValue} width="200px" />
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
    const { value } = this.props;
    console.log(`Input: ${value}`);
    return <input id="input" type="number" placeholder="Input" value={value} />;
  }
}

Input.propTypes = {
  value: PropTypes.number.isRequired,
};

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.setValue = this.setValue.bind(this);
    this.state = {};
  }

  setValue(e) {
    this.props.setValue(e.target.value, this.props.label);
    console.log(`button-value: ${e.target.value}`);
    console.log(`button-label: ${this.props.label}`);
  }

  render() {
    const { label, bgColor, width } = this.props;
    return <button style={buttonStyle(bgColor, width)} type="button" onClick={this.setValue} value={label}>{ label }</button>;
  }
}

Button.propTypes = {
  // setValue: PropTypes.func,
  label: PropTypes.isRequired,
  bgColor: PropTypes.string,
  width: PropTypes.string,
};

Button.defaultProps = {
  bgColor: 'white',
  width: '100px',
};

export default Calculator;
