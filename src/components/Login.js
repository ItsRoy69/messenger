import React from "react";
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';

const Login = () => {
    return (
        <div id='login-page'>
          <div id='login-card'>
            <h2>Welcome to Messenger!</h2>

            <div
                className='login-button google'
              >
                <GoogleOutlined /> Sign In with Google
            </div>

            <br/><br/>

            <div
                className='login-button facebook'
              >
                <FacebookOutlined /> Sign In with Facebook
            </div>

          </div>
        </div>
    );
}

export default Login;
