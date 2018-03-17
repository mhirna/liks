import React from 'react';
import NameInput from '../name-input';
import WhatInput from '../what-input';
import NumericInput from 'react-numeric-input';

export const Home = () =>
    <section>
        <div className="container text-center">
            <h3>Welcome to LIKS!</h3>
            <p>Start searching here:</p>

            <NameInput/>

        </div>
        <div className="container">
            <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <NumericInput/>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <WhatInput/>
                </div>
            </div>
        </div>
    </section>;
