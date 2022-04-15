import React, { useEffect, useReducer, useState } from 'react';
// import {useHistory} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';
import axios from 'axios';

import './Login.scss';
const Register = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const [token, setToken] = useState(null);
  const [status, setStatus] = useState(0);
  // useEffect(() => {
    const navigate = useNavigate();
    const handleLogin = () =>{
    var data = qs.stringify({
      'username': 'admin',
     'password': '123456' 
     });
     var config = {
       method: 'post',
       url: 'http://127.0.0.1:8000/auth/token/login/',
       headers: { 
         'Content-Type': 'application/x-www-form-urlencoded'
       },
       data : data
     };
     
     axios(config)
     .then(function (response) {
       console.log(response);
       setToken(response.data.data.auth_token);
       setStatus(response.status);
       if(response.data.data.auth_token){
         navigate('/home');
       }
     })
     .catch(function (error) {
       console.log(error);
     });
    }
  // },[]);


  return (
    <div className="container register">
      <div className="row cover mx-auto mt-4">
        <div className="col-md-12">
          <h1 className="mt-4 pt-4 text-center">Login</h1>
          <div className="row register_form-register pb-4">
            <form
              action=""
              // method="post"
              onSubmit={handleLogin}
              // onSubmit={() => dispatch({type:"login", payload:{
              //   username: username,
              //   password: password
              // }})}
              className=" mx-auto mt-3 col-10"
            >
              <div className="register__form-register__input">
                <input
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                />
              </div>
              {/* <div className="register__form-register__input">
                <input type="email" name="email" id="" placeholder="Email" />
              </div> */}
              <div className="register__form-register__input">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <div className="register__form-register__btn">
                <button type="submit" className="">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
