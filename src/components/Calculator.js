/* eslint-disable no-eval */

import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';

const Calculator = () => {
  const [value, setValue] = useState('0');
  const ops = ['+', '-', '*', '/', '%'];

  const updateValue = (newValue) => {
    setValue(value === '0' ? newValue : value + newValue);
  };

  const equalTo = () => {
    setValue(ops.includes(value[value.length - 1]) ? value : `${eval(value)}`);
  };

  const clearAll = () => {
    setValue('0');
  };

  const deleteLastDigit = () => {
    setValue(value.length === 1 ? '0' : value.slice(0, -1));
  };

  const operations = (newValue) => {
    setValue(value === '0' || ops.includes(value[value.length - 1]) ? value : value + newValue);
  };

  const decimal = (newValue) => {
    let index = '';
    for (let i = 0; i < value.length; i += 1) {
      if (ops.includes(value[i])) {
        index = value.lastIndexOf(value[i]) + 1;
      }
    }
    const temp = value.substring(index);
    setValue(temp.includes('.') ? value : value + newValue);
  };

  return (
    <div id="calculator-container">
      <p>Let&apos;s perform some MATHGIC !!!</p>
      <div id="calculator">
        <Display value={value} />
        <br />
        <Button label="AC" updateValue={() => clearAll()} />
        <Button label="DEL" updateValue={() => deleteLastDigit()} />
        <Button label="%" updateValue={() => operations('%')} />
        <Button label="/" bgColor="orange" updateValue={() => operations('/')} />
        <br />
        <Button label="7" updateValue={() => updateValue('7')} />
        <Button label="8" updateValue={() => updateValue('8')} />
        <Button label="9" updateValue={() => updateValue('9')} />
        <Button label="*" bgColor="orange" updateValue={() => operations('*')} />
        <br />
        <Button label="4" updateValue={() => updateValue('4')} />
        <Button label="5" updateValue={() => updateValue('5')} />
        <Button label="6" updateValue={() => updateValue('6')} />
        <Button label="-" bgColor="orange" updateValue={() => operations('-')} />
        <br />
        <Button label="1" updateValue={() => updateValue('1')} />
        <Button label="2" updateValue={() => updateValue('2')} />
        <Button label="3" updateValue={() => updateValue('3')} />
        <Button label="+" bgColor="orange" updateValue={() => operations('+')} />
        <br />
        <Button label="0" updateValue={() => updateValue('0')} width="200px" />
        <Button label="." updateValue={() => decimal('.')} />
        <Button label="=" bgColor="orange" updateValue={() => equalTo()} />
      </div>
    </div>
  );
};

export default Calculator;
