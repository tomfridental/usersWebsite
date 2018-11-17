import React, { Component } from 'react';

export default class Profile_Picture extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imgOpacity: 0,
            loaderOpacity: 1
        }
    }

    // componentDidMount() {
    //     this.setState({ loaderOpacity: 0, imgOpacity: 1 })
    // }

    hideSpinner() {
        this.setState({ loaderOpacity: 0, imgOpacity: 1 })
    }

    showSpinner() {
        this.setState({ loaderOpacity: 1, imgOpacity: 0 })
    }


    render() {

        return (
            <div className="profile-image-box " >
                <img src="http://www.ifmo.ru/images/loader.gif" className="profile_loader" style={{opacity: this.state.loaderOpacity}}/>
                <img src={this.props.avatar} onLoad={this.hideSpinner.bind(this)} 
                onError={this.showSpinner.bind(this)} style={{ opacity: this.state.imgOpacity }} />
            </div>

        )

    }

}
