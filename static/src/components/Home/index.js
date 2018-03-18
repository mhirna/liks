import React from 'react';
import NameInput from '../name-input';
import WhatInput from '../what-input';
import NumInput from '../num-input';
import MyForm from '../my-form';
import NumericInput from 'react-numeric-input';


export const Home = () =>

    <section>
        <div className="container">
            <h3>Welcome to LIKS!</h3>
            <p>Start searching here:</p>

            <NameInput/>

        </div>
        <div className="container">
            <div className="row d-flex justify-content-between">
                <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                    <NumInput
                    msg={"How much?"}
                    />
                </div>
                <div className=" text-center d-inline col-xs-2 col-sm-2 col-md-2 col-lg-2 .px-0">

                </div>
                <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                    <WhatInput
                    msg="pills/ml/mg/%"
                    />
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                    <NumInput
                    msg={"How often?"}/>
                </div>
                <div className="text-center d-inline col-xs-2 col-sm-2 col-md-2 col-lg-2 .px-0">
                    times per
                </div>
                <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                    <WhatInput
                     msg={"hour/day/week"}
                    />
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row text-right">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <button><h3>Add</h3></button>
                </div>
            </div>
            <MyForm/>
        </div>
    </section>;
