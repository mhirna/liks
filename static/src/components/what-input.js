import React, { Component } from 'react';
import Select from 'react-select';

export default class WhatInput extends Component{
  state = {
    selectedOption: '',
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);
  }
  render() {
    const { selectedOption } = this.state;
    const value = selectedOption && selectedOption.value;

    return (
      <Select
        name="form-field-name"
        placeholder="How much/many?"
        value={value}
        onChange={this.handleChange}
        options={[
          { value: '1', label: '1' },
          { value: 'two', label: 'Two' },
        ]}
      />
    );
  }
}
