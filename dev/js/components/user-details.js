import React, {Component} from 'react'

class UserDetails extends Component {
    render() {
        if (!this.props.user) {
            return (
                <div>Select an user...</div>
            )
        }
        return (
            <div>
                <div>{this.props.user.first} {this.props.user.last}</div>
                <div>{this.props.user.age}</div>
                <img src={this.props.user.thumbnail} />
                <div>{this.props.user.description}</div>
            </div>
        )
    }
}

export default (UserDetails)
