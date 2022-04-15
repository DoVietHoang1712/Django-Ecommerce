import React, { useEffect, useReducer, useState } from 'react';

import './Login.scss';
const Register = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="container register">
      <div className="row cover mx-auto mt-4">
        <div className="col-md-12">
          <h1 className="mt-4 pt-4 text-center">Login</h1>
          <div className="row register_form-register pb-4">
            <form
              action=""
              method="get"
              // onSubmit={handleLogin}
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
