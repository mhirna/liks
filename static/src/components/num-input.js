import React, { Component } from 'react';
import { Creatable } from 'react-select';

export default class NumInput extends Component{
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
    }
    render(selectProps) {
       const { selectedOption } = this.state;
        const value = selectedOption && selectedOption;


      return <Creatable {...selectProps}
          name="form-field-name"
          placeholder={this.props.msg}
          value={value}
          onChange={this.handleChange}
          noResultsText="Enter number"
          />;
    };
    }
