import React, { Component } from 'react';
import { Select } from 'react-select';
import {NumInput} from './num-input'
import {Field} from 'redux-form'


export default class MyForm extends Component {
  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
      </form>
    )
  }
}
