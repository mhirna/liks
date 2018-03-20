import React, { Component } from 'react';
import { Creatable } from 'react-select';

import med1 from './med1.png'


export default class MyPrescr extends Component{
    render() {
        return (
             <div className="row">
               <div className="med text-center">
                <img src={med1} className="img-fluid" alt="Responsive image"/>
               </div>
             </div>
   );
}
}
