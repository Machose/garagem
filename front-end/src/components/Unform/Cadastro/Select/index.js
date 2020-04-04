import React, { useRef, useEffect } from 'react';
import ReactSelect from 'react-select';
import { useField } from '@unform/core';

import { SelectBlock } from './styles';

const Select = ({ name, options, label, ...rest }) => {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'state.value',
      getValue: (ref) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option) => option.value);
        } else {
          if (!ref.state.value) {
            return '';
          }
          return ref.state.value.value;
        }
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <SelectBlock>
      <label htmlFor={rest.id}>{label}</label>
      <ReactSelect
        defaultValue={
          defaultValue &&
          options.find((option) => option.value === defaultValue)
        }
        ref={selectRef}
        classNamePrefix="react-select"
        options={options}
        {...rest}
      />
    </SelectBlock>
  );
};
export default Select;
