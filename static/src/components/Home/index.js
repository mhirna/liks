import React from 'react';
import NameInput from '../name-input';
import WhatInput from '../what-input';
import NumInput from '../num-input';
import MyForm from '../my-form';
<<<<<<< HEAD
import MyPrescr from '../my-prescr';
import NumericInput from 'react-numeric-input';
import FlatButton from 'material-ui/FlatButton';
import block2 from './block2.png';
import block3 from './block3.png';

var counter = 0;
const onAddClick = function() {
    console.log(document.querySelector(".myclass").style = "display: inline;");
    // return forceUpdate();
}


export const Home = () => {
        return (
        <section>
        <div className="container mybg" style={{marginLeft: '-20px', background:'linear-gradient(1000deg, #d725fad6, #28a0e4de)'}}>
            <h1 className="text-center">LikS.</h1>

            <div className="container">
                <NameInput/>
            </div>
            <div className="container">
                <div className="row d-flex justify-content-between">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <NumInput
                        msg={"How much?"}
                        />
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <WhatInput
                        msg="pills/ml/mg/%"
                        />
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <NumInput
                        msg={"How often?"}/>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-5 col-lg-6">
                        <WhatInput
                         msg={"hour/day/week"}
                        />
                    </div>
                </div>
            </div>
                <FlatButton className="mybtn" label="Add prescription" onClick={() => onAddClick()}/>
=======
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
>>>>>>> 60176d8d40e2880452f1335ef857ee0afa4515e0
        </div>

            <div className="container">
                <div className="row">
                    <div className="text-center col-xs-12 col-sm-12 col-md-12 col-lg-12">

                        <div className="myclass" style={{display:"none"}}>
                            <MyPrescr/>
                        </div>
                        <div className="left">
                            <img src={block2} className="img-fluid static" alt="Responsive image"/>
                            <img src={block3} className="img-fluid static" alt="Responsive image"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
