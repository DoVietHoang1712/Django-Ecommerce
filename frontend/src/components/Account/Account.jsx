import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import './Account.scss';
import { Context } from '../../store/Context';
import * as actions from '../../store/actions';
const Account = () => {
  const [data, setData] = useState({});
  const [state, dispatch] = useContext(Context)
  // console.log(state, dispatch)
  // console.log(actions.setToken)
  const navigate = useNavigate()
  // if(state.token == null){
  //     navigate('/login');
  // }

  const [isLoading, SetLoading] = useState(true);
  useEffect(() => {
    var config = {
      method: 'get',
      url: 'http://localhost:8000/user/me',
      headers: {
        // Authorization: `Token ${state}`
        Authorization: `Token ${localStorage.token}`,
      },
    };
    axios(config)
      .then(function (response) {
        // console.log(response.data.data);
        setData(response.data.data);
        SetLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  // console.log(data);
  let isEmpty = Object.keys(data).length === 0;
  // console.log(isEmpty);
  const { id, username, date_joined, email, is_staff } = data;


  const handleLogOut = () => {
    localStorage.setItem('token', '')
    dispatch(actions.setToken(''))
    navigate('/home')
  }

  return (
    <div className="account container">
      <div className="row">
        <div className="col-md-4">
          <div className="img-user">
            <img
              src="https://www.emmegi.co.uk/wp-content/uploads/2019/01/User-Icon.jpg"
              alt=""
            />
          </div>
          <hr />
          <div className="mt-4">
            <Link to="/cart">Go To Cart <i className="fas fa-angle-right"><i className="fas fa-angle-right"></i></i></Link>
          </div>
        </div>
        <div className="col-md-8 infor-user">
          <h3>Account Information</h3>
          {isLoading ? (
            <div style={{ textAlign: 'left' }}>is loading data...</div>
          ) : (
            <div style={{ textAlign: 'left' }}>
              <div>User name: {username}</div>
              <div>ID: {id}</div>
              <div>Email: {email}</div>
              <div>Registration Date: {moment(date_joined).format('DD/MM/YYYY')}</div>

              <div>
                Position:{' '}
                {is_staff ? <span>Staff</span> : <span>Customer</span>}
              </div>
            </div>
          )}
        </div>
        <div className="log-out"><button onClick={handleLogOut}>Log Out</button></div>
      </div>
    </div >
  );
};

export default Account;
