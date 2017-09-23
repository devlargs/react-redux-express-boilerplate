import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'; 

class UserList extends Component {
    render(){
        return (
            <ul>
                {
                    this.props.users.map((key, idx) => {
                        return <li key={idx}>{key.name}</li>
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(UserList);