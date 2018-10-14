import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';

export default class Facebook extends Component {
    state = {
        isLoggedIn: false, 
        userID: '',
        name: '',
        email: '',
        picture: ''
    }
    responseFacebook = (response) => {
        this.setState({
            isLoggedIn: true, 
            userID: response.userID,
            name: response.name, 
            email: response.email, 
            picture: response.picture.data.url 

        });
    }
    componentClicked = () => console.log('Clicked');
    render() {
        let fbConnect;

        if (this.state.isLoggedIn) {
            fbConnect = (
                <div style={{
                    width: '400px', 
                    margin: 'auto', 
                    background: '#f4f4f4',
                    padding: '20px'
                }}>
                    <img src={this.state.picture} alt={this.state.name}/>
                    <h2> Welcome, {this.state.name} </h2> 
                    Email: {this.state.email} 
                </div>
            );
        } else {
            fbConnect = (
                <FacebookLogin
                appId="2159173847428140"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />
            )
        }
        return <div>{fbConnect}</div>; 
    }
}