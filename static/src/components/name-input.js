import React, { Component } from 'react';
import Select from 'react-select';

export default class NameInput extends Component{
    state = {
      selectedOption: '',
    }
    handleChange = (selectedOption) => {
      this.setState({selectedOption});
    };

    render() {
        const { selectedOption } = this.state;
        const value = selectedOption;
        return (
            <div>
              <Select
                name="form-field-name"
                placeholder="Select name of the meds"
                value={value}
                onChange={this.handleChange}
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
    }
  }
