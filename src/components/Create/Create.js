import React, { Component } from 'react';
import CreateForm from './Create_Form';
import { connect } from 'react-redux';
import { createUser } from './Create.actions';


class Create extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }

        this.formAnswer = this.formAnswer.bind(this)
    }


    formAnswer(first_name, last_name, email, country, description) {
        console.log(' First Name: ' + first_name + '\n\r',
            'Last Name: ' + last_name + '\n\r',
            'Email: ' + email + '\n\r',
            'Country: ' + country + '\n\r',
            'Description: ' + description + '\n\r')
    }

    render() {

        const { createNewUser, userData} = this.props

        


        return (
            
            <div className="create">
                <h1 className="create_header"> Create a New User: </h1>
                <CreateForm formAnswer={this.formAnswer} createNewUser={createNewUser} userData_originalData={userData.originalData}/>
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
        createNewUser: (newUser) => dispatch(createUser(newUser)),
        // filterData: (filtered_list) => dispatch(filterData(filtered_list)),
        // selectUser: (user) => dispatch(selectUser(user)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Create)


