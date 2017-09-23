import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'; 

class UserList extends Component {
    render(){
        console.log(this.props);
        return (
            <ul>
                <li>Harry Potter</li>
                <li>Hermione Granger</li>
                <li>Ronald Weasley</li>
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(UserList);