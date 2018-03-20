<<<<<<< HEAD
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
=======
import React from 'react';
import { connect } from 'react-redux';
import { Control, Form } from 'react-redux-form';

class MyForm extends React.Component {
  handleSubmit(val) {
    // Do anything you want with the form value
    console.log(val);
  }

  render() {
    return (
      <Form onSubmit={(val) => this.handleSubmit(val)}>
        <label>Your name?</label>
        <Control.text model=".name" />
        <button>Submit!</button>
      </Form>
    );
  }
}

// No need to connect()!
export default MyForm;
>>>>>>> 60176d8d40e2880452f1335ef857ee0afa4515e0
