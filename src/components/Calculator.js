/* eslint-disable max-classes-per-file */
/* eslint-disable no-eval */

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
      value: '0',
    };
  }

  setValue(newValue) {
    if (newValue === '=') {
      this.setState((oldState) => ({
        value: `${eval(oldState.value)}`,
      }));
    } else if (newValue === 'AC') {
      this.setState({
        value: '0',
      });
    } else if (newValue === 'DEL') {
      this.setState((oldState) => ({
        value: oldState.value.length === 1 ? '0' : oldState.value.slice(0, -1),
      }));
    } else {
      this.setState((oldState) => ({
        value: oldState.value === '0' ? newValue : oldState.value + newValue,
      }));
    }
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <Input value={value} />
        <Button label="AC" setValue={this.setValue} />
        <Button label="DEL" setValue={this.setValue} />
        <Button label="%" setValue={this.setValue} />
        <Button label="/" bgColor="orange" setValue={this.setValue} />
        <br />
        <Button label={7} setValue={this.setValue} />
        <Button label={8} setValue={this.setValue} />
        <Button label={9} setValue={this.setValue} />
        <Button label="*" bgColor="orange" setValue={this.setValue} />
        <br />
        <Button label={4} setValue={this.setValue} />
        <Button label={5} setValue={this.setValue} />
        <Button label={6} setValue={this.setValue} />
        <Button label="-" bgColor="orange" setValue={this.setValue} />
        <br />
        <Button label={1} setValue={this.setValue} />
        <Button label={2} setValue={this.setValue} />
        <Button label={3} setValue={this.setValue} />
        <Button label="+" bgColor="orange" setValue={this.setValue} />
        <br />
        <Button label={0} setValue={this.setValue} width="200px" />
        <Button label="." setValue={this.setValue} />
        <Button label="=" bgColor="orange" setValue={this.setValue} />
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
    return <div id="input" type="number" placeholder="Input">{ value }</div>;
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
    const { setValue } = this.props;
    setValue(e.target.value);
  }

  render() {
    const { label, bgColor, width } = this.props;
    return <button style={buttonStyle(bgColor, width)} type="button" onClick={this.setValue} value={label}>{ label }</button>;
  }
}

Button.propTypes = {
  setValue: PropTypes.func.isRequired,
  label: PropTypes.isRequired,
  bgColor: PropTypes.string,
  width: PropTypes.string,
};

Button.defaultProps = {
  bgColor: 'white',
  width: '100px',
};

export default Calculator;
