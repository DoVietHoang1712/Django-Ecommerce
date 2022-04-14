import React from 'react';
import {Link} from 'react-router-dom'
import './_register.scss';
const Register = () => {
  return (
    <div className="container register">
      <div className="row cover mx-auto mt-4">
        <div className="col-md-12">
          <h1 className="mt-4 pt-4 text-center">Sign up</h1>
          <div className="row register_form-register pb-4">
            <form action="" method="post" className=" mx-auto mt-3 col-10">
              <div className="register__form-register__input">
                <input
                  type="text"
                  name="firstname"
                  id=""
                  placeholder="First name"
                />
              </div>
              <div className="register__form-register__input">
                <input
                  type="text"
                  name="lastname"
                  id=""
                  placeholder="Last name"
                />
              </div>
              <div className="register__form-register__input">
                <input type="email" name="email" id="" placeholder="Email" />
              </div>
              <div className="register__form-register__input">
                <input
                  type="text"
                  name="username"
                  id=""
                  placeholder="Username"
                />
              </div>
              <div className="register__form-register__input">
                <input
                  type="password"
                  name="password"
                  id=""
                  placeholder="Password"
                />
              </div>
              <div className="register__form-register__btn">
                <button type="submit" className="">
                  Sign up
                </button>
              </div>
            </form>
            <div className=" mx-auto mt-3 mb-4 col-10">Do you have account? Login <Link to
            ="/login">Here</Link></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
