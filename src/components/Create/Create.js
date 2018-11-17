import React, { Component } from 'react';
import CreateForm from './Create_Form';
import { connect } from 'react-redux';
import { createUser } from './Create.actions';


class Create extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {

        const { createNewUser, userData} = this.props

        


        return (
            
            <div className="create">
                <h1 className="create_header"> Create a New User: </h1>
                <CreateForm createNewUser={createNewUser} userData_originalData={userData.originalData}/>
            </div>

        )
    }
}

function mapStateToProps(state, ownProps) {

    const { userData } = state;

    return {
        userData
    }
}
function mapDispatchToProps(dispatch) {
    return {
        createNewUser: (newUser) => dispatch(createUser(newUser))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Create)


