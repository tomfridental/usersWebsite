import React, { Component } from 'react';

export default class CreateForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            password1: '',
            password2: '',
            email: '',
            country: '',
            description: '',
            avatar: "https://robohash.org/voluptatemnumquamdolore.jpg?size=80x80\u0026set=set1",
            id: this.props.userData_originalData.length + 1,
            done: false,
            signupError: null
        }
        this.updateInfo = this.updateInfo.bind(this);
        this.finishSignUp = this.finishSignUp.bind(this);
    }


    updateInfo(event) {
        const target = event.target.value;
        const name = event.target.name;
        this.setState({ [name]: target })
    }

    finishSignUp() {
        let checkForm = ValidateForm(this.state, this.props.userData_originalData)
        if (checkForm[0]) {
            this.props.createNewUser(this.state);
            this.setState({ done: true })
        }
        else {
           this.setState({signupError: checkForm[1]})
        }
    }

    render() {

        const { createNewUser } = this.props
        if (!this.state.done) {
            return (

                <div>
                    <form className="create_form">
                        <input type="text" name="first_name" placeholder="First Name" className="create_form_name" onChange={this.updateInfo} />
                        <input type="text" name="last_name" placeholder="Last Name" className="create_form_name" onChange={this.updateInfo} />
                        <input type="text" name="email" placeholder="Email" className="create_form_name" onChange={this.updateInfo} />
                        <input type="text" name="country" placeholder="Country" className="create_form_name" onChange={this.updateInfo} />
                        <input type="password" name="password1" placeholder="Password" className="create_form_name" onChange={this.updateInfo} />
                        <input type="password" name="password2" placeholder="Password Again" className="create_form_name" onChange={this.updateInfo} />
                        <h3 className="create_form_warning">Password must contain of 6 charts or more. CAPS LOCK sensetive.</h3>
                        <input type="text" name="description" placeholder="About You:" className="create_form_name_about" onChange={this.updateInfo} />
                        <button type="button" className="create_form_name_button" onClick={this.finishSignUp}>Sign UP!</button>
                    </form>
                    {this.state.signupError != null &&
                        <div className="create_form_error">
                          {this.state.signupError}
                        </div>
                    }
                </div>
            )
        }
        else {
            return (
                <div className="create_form_thanks">
                    <h1> Thanks for Signing UP! </h1>
                </div>
            )
        }
    }

}
// ---

function ValidateForm(state, user_list) {
    var emailTest = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var vaildId = true;
    for (var i = 0; i < user_list.length; i++) {
        if (user_list[i].id === state.id) {
            vaildId = false
            break
        }
    }

    var vaildEmail = true;
    for (var i = 0; i < user_list.length; i++) {
        if (user_list[i].email === state.email.toLowerCase()) {
            vaildEmail = false
            break
        }
    }

    if (state.password1 != state.password2) { return [false, `Passowrd's does not match!`]; }
    if (state.password1.length <= 5) { return [false, 'Passowrd is to short!']; }
    if (state.password1.length >= 16) { return [false, 'Passowrd is to Long!']; }
    if (!emailTest.test(String(state.email).toLowerCase())) { return [false, 'invalid Email Adress'] };
    if (!vaildEmail) { return [false, 'Email already exists'] }
    if (!vaildId) { return [false, 'Id already exists'] }

    else { return [true, 'Form is ok!'] }
}


