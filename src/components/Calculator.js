/* eslint-disable no-eval */
/* eslint-disable max-len */

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
// I mean functions
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.setValue = this.setValue.bind(this);
    this.state = {
      value: '0',
    };
  }

  setValue(newValue) {
    const ops = ['+', '-', '*', '/', '%'];
    if (newValue === '=') {
      this.setState((oldState) => ({
        value: ops.includes(oldState.value[oldState.value.length - 1]) ? oldState.value : `${eval(oldState.value)}`,
      }));
    } else if (newValue === 'AC') {
      this.setState({
        value: '0',
      });
    } else if (newValue === 'DEL') {
      this.setState((oldState) => ({
        value: oldState.value.length === 1 ? '0' : oldState.value.slice(0, -1),
      }));
    } else if (ops.includes(newValue)) {
      this.setState((oldState) => ({
        value: oldState.value === '0' || ops.includes(oldState.value[oldState.value.length - 1]) ? oldState.value : oldState.value + newValue,
      }));
    } else if (newValue === '.') {
      let { value } = this.state;
      let index = '';
      for (let i = 0; i < value.length; i += 1) {
        if (ops.includes(value[i])) {
          index = value.lastIndexOf(value[i]) + 1;
        }
      }
      value = value.substring(index);
      this.setState((oldState) => ({
        value: value.includes('.') ? oldState.value : oldState.value + newValue,
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
        <Display value={value} />
        <Button label="AC" setValue={this.setValue} />
        <Button label="DEL" setValue={this.setValue} />
        <Button label="%" setValue={this.setValue} />
        <Button label="/" bgColor="orange" setValue={this.setValue} />
        <br />
        <Button label="7" setValue={this.setValue} />
        <Button label="8" setValue={this.setValue} />
        <Button label="9" setValue={this.setValue} />
        <Button label="*" bgColor="orange" setValue={this.setValue} />
        <br />
        <Button label="4" setValue={this.setValue} />
        <Button label="5" setValue={this.setValue} />
        <Button label="6" setValue={this.setValue} />
        <Button label="-" bgColor="orange" setValue={this.setValue} />
        <br />
        <Button label="1" setValue={this.setValue} />
        <Button label="2" setValue={this.setValue} />
        <Button label="3" setValue={this.setValue} />
        <Button label="+" bgColor="orange" setValue={this.setValue} />
        <br />
        <Button label="0" setValue={this.setValue} width="200px" />
        <Button label="." setValue={this.setValue} />
        <Button label="=" bgColor="orange" setValue={this.setValue} />
      </div>
    );
  }
}

const Display = (props) => {
  const { value } = props;
  return <div id="display" type="number">{ value }</div>;
};

Display.propTypes = {
  value: PropTypes.string.isRequired,
};

const Button = (props) => {
  const {
    label,
    bgColor,
    width,
    setValue,
  } = props;

  return <button style={buttonStyle(bgColor, width)} type="button" onClick={() => setValue(label)} value={label}>{ label }</button>;
};

Button.propTypes = {
  setValue: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  width: PropTypes.string,
};

Button.defaultProps = {
  bgColor: 'white',
  width: '100px',
};

export default Calculator;
