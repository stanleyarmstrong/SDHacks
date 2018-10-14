import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';
import Profile from './profile';

export default class Facebook extends Component {
    state = {
        isLoggedIn: false, 
        userID: '',
        name: '',
        email: '',
        picture: '',
        user_friends: ''
    }
    responseFacebook = (response) => {
        this.setState({
            isLoggedIn: true, 
            userID: response.userID,
            name: response.name, 
            email: response.email, 
            picture: response.picture.data.url,
            user_friends: response.user_friends 
        });
    }
    componentClicked = () => console.log('Clicked');
    render() {
        let fbConnect;

        if (this.state.isLoggedIn) {
            fbConnect = (
                <Profile/>
            );
        } else {
            fbConnect = (
                <FacebookLogin
                appId="2159173847428140"
                autoLoad={true}
                fields="name,email,picture"
                scope="user_friends"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />
            )
        }
        return <div>{fbConnect}</div>; 
    }
}