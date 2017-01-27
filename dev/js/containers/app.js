require('../../scss/style.scss')

import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import UserList from '../components/user-list'
import UserDetails from '../components/user-details'

import * as userActions from '../actions/user-action'

class App extends Component {

    constructor(props) {
        super(props);

        this.handleShowUserDetails = this.handleShowUserDetails.bind(this);
    }

    handleShowUserDetails(user) {
        this.props.selectUser(user);
    }

    render() {
        return (
            <div>
                <h2>User list:</h2>
                <UserList users={this.props.users}
                          onShowUserDetails={(user) => this.handleShowUserDetails(user)}/>
                <hr/>
                <h2>User details:</h2>
                <UserDetails user={this.props.user} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.userReducer.userList,
        user: state.userReducer.activeUser
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        selectUser: userActions.selectUser
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(App);