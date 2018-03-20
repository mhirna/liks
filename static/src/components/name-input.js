import React, { Component } from 'react';
<<<<<<< HEAD
import Select from 'react-select';
=======
import { Async } from 'react-select';
>>>>>>> 60176d8d40e2880452f1335ef857ee0afa4515e0

export default class NameInput extends Component{
    state = {
      selectedOption: '',
    }
    handleChange = (selectedOption) => {
      this.setState({selectedOption});
<<<<<<< HEAD
    };
=======
      console.log(`Selected: ${selectedOption.label}`);
      this.setState({medName});
    }

    _parseJSON = (response) => {
      return response.text().then(function(text) {
        console.log("Text: ", text);
        return text ? JSON.parse(text) : {}
      })
    }
>>>>>>> 60176d8d40e2880452f1335ef857ee0afa4515e0

    render() {
        const { selectedOption } = this.state;
        const value = selectedOption;
<<<<<<< HEAD
        return (
            <div>
              <Select
=======
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
>>>>>>> 60176d8d40e2880452f1335ef857ee0afa4515e0
                name="form-field-name"
                placeholder="Select name of the meds"
                value={value}
                onChange={this.handleChange}
<<<<<<< HEAD
                options={[{'value': 'ПАГАМАКС', 'label': 'ПАГАМАКС'},
                 {'value': 'ПАЙЗИНА', 'label': 'ПАЙЗИНА'}, {'value': 'ПАКЛІВІСТА', 'label': 'ПАКЛІВІСТА'},
                  {'value': 'ПАКЛІМЕДАК', 'label': 'ПАКЛІМЕДАК'}, {'value': 'ПАКЛІТАКСЕЛ', 'label': 'ПАКЛІТАКСЕЛ'},
                   {'value': 'ПАКЛІТАКСЕЛ-ВІСТА', 'label': 'ПАКЛІТАКСЕЛ-ВІСТА'}, {'value': 'ПАМІДОЛ', 'label': 'ПАМІДОЛ'},
                    {'value': 'ПАМІРЕДИН', 'label': 'ПАМІРЕДИН'}, {'value': 'ПАМІФОС', 'label': 'ПАМІФОС'},
                     {'value': 'ПАНАДОЛ:registered:', 'label': 'ПАНАДОЛ:registered:'},
                      {'value': 'ПАНАДОЛ:registered: БЕБІ', 'label': 'ПАНАДОЛ:registered: БЕБІ'},
                       {'value': 'ПАНАДОЛ:registered: ЕДВАНС', 'label': 'ПАНАДОЛ:registered: ЕДВАНС'},
                       {'value': 'ПАНАДОЛ:registered: ЕКСТРА', 'label': 'ПАНАДОЛ:registered: ЕКСТРА'},
                        {'value': 'ПАНКРЕАЗИМ', 'label': 'ПАНКРЕАЗИМ'}, {'value': 'ПАНКРЕАТИН', 'label': 'ПАНКРЕАТИН'},
                         {'value': 'ПАНТЕКСОЛ ЯДРАН', 'label': 'ПАНТЕКСОЛ ЯДРАН'}, {'value': 'ПАНТЕНОЛ', 'label': 'ПАНТЕНОЛ'},
                          {'value': 'ПАНТЕНОЛ АЕРОЗОЛЬ', 'label': 'ПАНТЕНОЛ АЕРОЗОЛЬ'}, {'value': 'ПАНТЕНОЛ СПРЕЙ', 'label': 'ПАНТЕНОЛ СПРЕЙ'},
                           {'value': 'ПАНТЕНОЛ-ТЕВА', 'label': 'ПАНТЕНОЛ-ТЕВА'}, {'value': 'ПАНТЕСТИН-ДАРНИЦЯ:registered:',
                           'label': 'ПАНТЕСТИН-ДАРНИЦЯ:registered:'}, {'value': 'ПАНТОГАР', 'label': 'ПАНТОГАР'},
                           {'value': 'ПАНТОКАР:registered:', 'label': 'ПАНТОКАР:registered:'},
                            {'value': 'ПАНТОР 20', 'label': 'ПАНТОР 20'}, {'value': 'ПАНТОР 40', 'label': 'ПАНТОР 40'},
                             {'value': 'ПАНТРАЛІС:registered:', 'label': 'ПАНТРАЛІС:registered:'}, {'value': 'ПАНУМ', 'label': 'ПАНУМ'},
                           {'value': 'ПАПАВЕРИН', 'label': 'ПАПАВЕРИН'}, {'value': 'ПАПАВЕРИН-ДАРНИЦЯ', 'label': 'ПАПАВЕРИН-ДАРНИЦЯ'},
                           {'value': "ПАПАВЕРИН-ЗДОРОВ'Я", 'label': "ПАПАВЕРИН-ЗДОРОВ'Я"},
                            {'value': 'ПАПАВЕРИНУ ГІДРОХЛОРИД', 'label': 'ПАПАВЕРИНУ ГІДРОХЛОРИД'},
                             {'value': 'ПАРІЄТ:registered:', 'label': 'ПАРІЄТ:registered:'}, {'value': 'ПАРАЦЕТАМОЛ', 'label': 'ПАРАЦЕТАМОЛ'},
                              {'value': 'ПАРКІЗОЛ', 'label': 'ПАРКІЗОЛ'}, {'value': 'ПАРКІН', 'label': 'ПАРКІН'},
                               {'value': 'ПАРНАСАН:registered:', 'label': 'ПАРНАСАН:registered:'},
                               {'value': 'ПАРОКСЕТИН', 'label': 'ПАРОКСЕТИН'},
                                {'value': 'ПАРОКСЕТИНУ ГІДРОХЛОРИДУ НАПІВГІДРАТ', 'label': 'ПАРОКСЕТИНУ ГІДРОХЛОРИДУ НАПІВГІДРАТ'},
                           {'value': 'ПАРОКСИН', 'label': 'ПАРОКСИН'}]}

              />
          </div>);
=======
                loadOptions={getOptions}
              />
      );
>>>>>>> 60176d8d40e2880452f1335ef857ee0afa4515e0
    }
  }
