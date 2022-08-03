/* eslint-disable no-eval */
/* eslint-disable max-len */

import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';

const Calculator = () => {
  const [value, setValue] = useState('0');

  const updateValue = (newValue) => {
    const ops = ['+', '-', '*', '/', '%'];
    if (newValue === '=') {
      setValue(ops.includes(value[value.length - 1]) ? value : `${eval(value)}`);
    } else if (newValue === 'AC') {
      setValue('0');
    } else if (newValue === 'DEL') {
      setValue(value.length === 1 ? '0' : value.slice(0, -1));
    } else if (ops.includes(newValue)) {
      setValue(value === '0' || ops.includes(value[value.length - 1]) ? value : value + newValue);
    } else if (newValue === '.') {
      let index = '';
      for (let i = 0; i < value.length; i += 1) {
        if (ops.includes(value[i])) {
          index = value.lastIndexOf(value[i]) + 1;
        }
      }
      const temp = value.substring(index);
      setValue(temp.includes('.') ? value : value + newValue);
    } else {
      setValue(value === '0' ? newValue : value + newValue);
    }
  };

  return (
    <div>
      <Display value={value} />
      <Button label="AC" updateValue={() => updateValue('AC')} />
      <Button label="DEL" updateValue={() => updateValue('DEL')} />
      <Button label="%" updateValue={() => updateValue('%')} />
      <Button label="/" bgColor="orange" updateValue={() => updateValue('/')} />
      <br />
      <Button label="7" updateValue={() => updateValue('7')} />
      <Button label="8" updateValue={() => updateValue('8')} />
      <Button label="9" updateValue={() => updateValue('9')} />
      <Button label="*" bgColor="orange" updateValue={() => updateValue('*')} />
      <br />
      <Button label="4" updateValue={() => updateValue('4')} />
      <Button label="5" updateValue={() => updateValue('5')} />
      <Button label="6" updateValue={() => updateValue('6')} />
      <Button label="-" bgColor="orange" updateValue={() => updateValue('-')} />
      <br />
      <Button label="1" updateValue={() => updateValue('1')} />
      <Button label="2" updateValue={() => updateValue('2')} />
      <Button label="3" updateValue={() => updateValue('3')} />
      <Button label="+" bgColor="orange" updateValue={() => updateValue('+')} />
      <br />
      <Button label="0" updateValue={() => updateValue('0')} width="200px" />
      <Button label="." updateValue={() => updateValue('.')} />
      <Button label="=" bgColor="orange" updateValue={() => updateValue('=')} />
    </div>
  );
};

export default Calculator;
