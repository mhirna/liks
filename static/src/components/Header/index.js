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
            // <header>
                // <LeftNav open={this.state.open}>
                //     {
                //         !this.props.isAuthenticated ?
                //             <div>
                //                 <MenuItem onClick={() => this.dispatchNewRoute('/login')}>
                //                     Login
                //                 </MenuItem>
                //                 <MenuItem onClick={() => this.dispatchNewRoute('/register')}>
                //                     Register
                //                 </MenuItem>
                //             </div>
                //             :
                //             <div>
                //                 <MenuItem onClick={() => this.dispatchNewRoute('/analytics')}>
                //                     Analytics
                //                 </MenuItem>
                //                 <Divider />
                //
                //                 <MenuItem onClick={(e) => this.logout(e)}>
                //                     Logout
                //                 </MenuItem>
                //             </div>
                //     }
                // </LeftNav>
                <AppBar
                  title="Liks"
                  // onLeftIconButtonTouchTap={() => this.openNav()}
                  // iconElementRight={
                  //     <FlatButton label="Home" onClick={() => this.dispatchNewRoute('/')} />
                  //   }
                />
            // </header>

        );
    }
}

//
// Header.propTypes = {
//     // logoutAndRedirect: React.PropTypes.func,
//     // isAuthenticated: React.PropTypes.bool,
// };
