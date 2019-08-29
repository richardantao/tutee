import React from 'react';
import Select from 'react-select';

// component
const SelectReact = (props) => (
  <Select options={options} placeholder={props.placeholder}/>
)

// options to be filled with the User's Courses
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
 export default SelectReact;
