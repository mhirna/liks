import React, { Component } from 'react';
import Select from 'react-select';

export default class WhatInput extends Component{
  constructor(props){
      super(props);
        this.state = {
          msg: props.msg
        };
  }
  state = {
    selectedOption: '',
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);
    this.setState({medWhat});
  }
  render() {
    const { selectedOption } = this.state;
    const value = selectedOption && selectedOption.value;

    return (
      <Select
        name="form-field-name"
        placeholder={this.props.msg}
        value={value}
        onChange={this.handleChange}
        options={this.props.msg != "hour/day/week" ?
        [
          { value: 'pills', label: 'pills' },
          { value: 'ml', label: 'ml' },
          { value: 'mgrams', label: 'mgrams' },
          { value: 'grams', label: 'grams' },
          { value: '%', label: '%' },
          { value: 'tbsp', label: 'tbsp' },
        ] :
        [
          { value: 'hour', label: 'hour' },
          { value: 'day', label: 'day' },
          { value: 'week', label: 'week' },
      ]}
      />
    );
  }
}
