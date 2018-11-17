import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import styled from 'styled-components';


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
            signupError: false,
            signupErrorMessage: '',
            redirect: false,
            errorField: '',
        }
        this.updateInfo = this.updateInfo.bind(this);
        this.finishSignUp = this.finishSignUp.bind(this);
        this.clearErrors = this.clearErrors.bind(this);
    }

    clearErrors(){
        this.setState({signupError: false, signupErrorMessage: '', errorField:''})
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
            setTimeout(() => this.setState({ redirect: true }), 2000)
        }
        else {
            this.setState({ signupError: true, signupErrorMessage: checkForm[1], errorField: checkForm[2] })
        }
    }


    render() {
        if (this.state.redirect) {
            return <Redirect to='/browse' />
            // return this.props.history.push('/browse');
        }


        const { createNewUser } = this.props
        if (!this.state.done) {
            return (

                <div>
                    <Form onFocus={this.clearErrors}>
                        <Input name="first_name" placeholder="First Name" onChange={this.updateInfo} error={this.state.errorField==='first_name'}/>
                        <Input name="last_name" placeholder="Last Name" onChange={this.updateInfo} error={this.state.errorField==='last_name'}/>
                        <Input name="email" placeholder="Email" onChange={this.updateInfo} error={this.state.errorField==='email'}/>
                        <Input name="country" placeholder="Country" onChange={this.updateInfo} error={this.state.errorField==='country'}/>
                        <Input type="password" name="password1" placeholder="Password" onChange={this.updateInfo} error={this.state.errorField==='password'}/>
                        <Input type="password" name="password2" placeholder="Password Again" onChange={this.updateInfo} error={this.state.errorField==='password'}/>
                        <Warning>Password must contain of 6 charts or more. CAPS LOCK sensetive.</Warning>
                        <Description name="description" placeholder="About You:" onChange={this.updateInfo} error={this.state.errorField==='about'}/>
                        <Button type="button" onClick={this.finishSignUp}>Sign UP!</Button>
                    </Form>
                    
                        <Error show={this.state.signupError}>
                            {this.state.signupErrorMessage}
                        </Error>
                    
                </div>
            )
        }

        else {

            return (
                <SignUpDone>
                    <h1> Thanks for Signing UP! </h1>
                    <h3>You Being Redirected...</h3>
                </SignUpDone>
            )
        }
    }

}
// -----------------------------------Validation Form Done Here:------------------------------------------//

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

    if (state.first_name.length < 1) {return [false, 'Please Enter First Name','first_name'] }
    if (state.last_name.length < 1) return [false, 'Please Enter Last Name', 'last_name']
    if (!emailTest.test(String(state.email).toLowerCase())) { return [false, 'invalid Email Adress', 'email'] };
    if (!vaildEmail) { return [false, 'Email already exists', 'email'] }
    if (state.country.length < 1) return [false, 'Please Enter Country Name', 'country']
    if (state.password1 != state.password2) { return [false, `Passowrd's does not match!`, 'password']; }
    if (state.password1.length <= 5) { return [false, 'Passowrd is to short!', 'password']; }
    if (state.password1.length >= 16) { return [false, 'Passowrd is to Long!', 'password']; }
    if (!vaildId) { return [false, 'ID Already Exists', 'id']; }
    else { return [true, 'Form is ok!'] }
}

//---------------------------------------CSS Goes Here----------------------------------------------------//

const Form = styled.form`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
/* border: 1px solid black; */
width: 50rem;
min-height: 20rem;
padding: 20px;
font-family: 'Indie Flower', cursive;
`;

const Input = styled.input`
    width: 20rem;
    height: 5rem;
    font-size: 2.5rem;
    padding: 5px;
    margin-top: 10px;
    font-family: 'Indie Flower', cursive;
    border: ${(props) => props.error === true ? '1px solid red' : '0.5 solid grey'};
    background-color: ${(props) => props.error === true ? '#F5679B' : 'white'};
    color: ${(props) => props.error === true ? 'white' : 'black'};
    &::placeholder {
        color: ${(props) => props.error === true ? 'white' : 'black'}
        opacity: 1;
    }
`;

const Warning = styled.h3`
font-size: 2.2rem;
padding: 0px 20px;
`;

const Description = styled.input`
width: 43rem;
height: 12rem;
font-size: 2.5rem;
padding: 5px;
margin-top: 10px;
font-family: 'Indie Flower', cursive;
`;

const Button = styled.button`
background-color: orange;
width: 43rem;
height: 7rem;
margin-top: 10px;
color: white;
margin-top: 20px;
font-size: 2.2rem;
border: none;
`;

const Error = styled.div`
width: 50rem;
height: 5rem;
font-size: 2.8rem;
display: flex;
justify-content: center;
align-items: center;
font-family: 'Indie Flower', cursive;
color: red;
font-weight: bold;
visibility: ${(props) => !props.show ? 'hidden' : 'visible'}
`;

const SignUpDone = styled.div`
width: 50rem;
height: 20rem;
display: flex;
justify-content: center;
align-items: center;
font-size: 2rem;
font-family: 'Indie Flower', cursive;
flex-direction: column;
`;