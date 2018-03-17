import React, { Component } from 'react';
import { Async } from 'react-select';

export default class NameInput extends Component{
    state = {
      selectedOption: '',
    }
    handleChange = (selectedOption) => {
      this.setState({selectedOption});
      console.log(`Selected: ${selectedOption.label}`);
    }

    _parseJSON = (response) => {
      return response.text().then(function(text) {
        console.log("Text: ", text);
        return text ? JSON.parse(text) : {}
      })
    }

    render() {
        const { selectedOption } = this.state;
        const value = selectedOption;
        const url = 'http://10.10.120.131:5000/name_options';
        const getOptions = (input) => {
          console.log("Input: " + input);

          return fetch('http://10.10.120.131:5000/name_options', {
                body: JSON.stringify({"name":input}),
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: '*omit', // include, same-origin, *omit
                headers: {
                  'user-agent': 'Mozilla/4.0 MDN Example',
                  'content-type': 'application/json'
                },
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                // mode: 'no-cors', // no-cors, cors, *same-origin
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                redirect: 'follow', // *manual, follow, error
                referrer: 'no-referrer', // *client, no-referrer
              })
              .then(res => res.json())
              .catch(error => console.error('Error:', error))
              .then(response => {
                  var result = new Array();
                  for (var el in response) {
                      result.push({value:response[el][0], label:response[el][0]});
                      console.log(response[el][0]);
                  }
                  console.log(response);
                  this.setState({
                      loaded: result,
                    })
                  return { options: result };
    });
        }
      // const { selectedOption } = this.state;
      // const value = selectedOption && selectedOption.value;

      return (
              <Async
                name="form-field-name"
                placeholder="Select name of the meds"
                value={value}
                onChange={this.handleChange}
                loadOptions={getOptions}
              />
      );
    }
  }
