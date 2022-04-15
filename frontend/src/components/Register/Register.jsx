import React from 'react';
import { Link } from 'react-router-dom'
import './_register.scss';
import { useState, useEffect } from 'react';
import qs from 'qs';
import axios from 'axios';
const Register = () => {

  const [register, setRegister] = useState({
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    password: ''
  })
  const [post, setPost] = useState({
    username: '',
    password: '',
    email: ''
  })

  const { firstname, lastname, email, username, password } = register
  const handleSubmit = () => {
    // console.log(register)
    setPost({ username, password, email })
  }

  useEffect(() => {
    var data = qs.stringify({
      'username': post.username,
      'password': post.password,
      'email': post.email
    });
    var config = {
      method: 'post',
      url: 'http://127.0.0.1:8000/auth/users/',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

  }, [post])
  // console.log(post)
  return (
    <div className="container register">
      <div className="row cover mx-auto mt-4">
        <div className="col-md-12">
          <h1 className="mt-4 pt-4 text-center">Sign up</h1>
          <div className="row register_form-register pb-4">
            <div className=" mx-auto mt-3 col-10">
              <div className="register__form-register__input">
                <input
                  type="text"
                  name="firstname"
                  placeholder="First name"
                  value={firstname}
                  onChange={(e) => setRegister({ ...register, firstname: e.target.value })}
                />
              </div>
              <div className="register__form-register__input">
                <input
                  type="text"
                  placeholder="Last name"
                  value={lastname}
                  onChange={(e) => setRegister({ ...register, lastname: e.target.value })}
                />
              </div>
              <div className="register__form-register__input">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setRegister({ ...register, email: e.target.value })} />
              </div>
              <div className="register__form-register__input">
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setRegister({ ...register, username: e.target.value })}
                />
              </div>
              <div className="register__form-register__input">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setRegister({ ...register, password: e.target.value })}
                />
              </div>
              <div className="register__form-register__btn">
                <button
                  onClick={handleSubmit}
                >
                  Sign up
                </button>
              </div>
            </div>
            <div className=" mx-auto mt-3 mb-4 col-10">Do you have account? Login <Link to
              ="/login">Here</Link></div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Register;
