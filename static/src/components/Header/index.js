import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppBar from 'material-ui/AppBar';
import LeftNav from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';

@connect()
export class Header extends Component {
    constructor() {
        super();
        this.state = {
            open: false,
        };

    }
    //
    // dispatchNewRoute(route) {
    //     browserHistory.push(route);
    //     this.setState({
    //         open: false,
    //     });
    //
    // }
    //
    //
    // handleClickOutside() {
    //     this.setState({
    //         open: false,
    //     });
    // }
    //
    //
    // openNav() {
    //     this.setState({
    //         open: true,
    //     });
    // }

    render() {
        return (
            <div></div>
        );
    }
}

//
// Header.propTypes = {
//     // logoutAndRedirect: React.PropTypes.func,
//     // isAuthenticated: React.PropTypes.bool,
// };
