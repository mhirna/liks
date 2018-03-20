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
<<<<<<< HEAD
       const { selectedOption } = this.state;
        const value = selectedOption && selectedOption;
=======
      const { selectedOption } = this.state;
      const value = selectedOption && selectedOption;
>>>>>>> 60176d8d40e2880452f1335ef857ee0afa4515e0


      return <Creatable {...selectProps}
          name="form-field-name"
          placeholder={this.props.msg}
<<<<<<< HEAD
          value={value}
          onChange={this.handleChange}
          noResultsText="Enter number"
=======
          value={this.props.msg == 'How often?' ? value + 'times' : value }
          onChange={this.handleChange}
>>>>>>> 60176d8d40e2880452f1335ef857ee0afa4515e0
          />;
    };
    }
