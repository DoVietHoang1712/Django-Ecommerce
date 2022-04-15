import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Account.scss';
const Account = () => {
  const [data, setData] = useState({});
  const [isLoading, SetLoading] = useState(true)
  useEffect(() => {
    // var config = {
    //   method: 'get',
    //   url: 'http://localhost:8000/user/me',
    //   headers: {
    //     Authorization: 'Token ba263a79474576fff23ddc970418aefe38fd702c',
    //   },
    // };
    // axios(config)
    //   .then(function (response) {
    //     console.log(response);
    //     setData(response.data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    var config = {
      method: 'get',
      url: 'http://localhost:8000/user/me',
      headers: {
        'Authorization': 'Token ba263a79474576fff23ddc970418aefe38fd702c'
      }
    };
    axios(config)
      .then(function (response) {
        console.log(response.data.data);
        setData(response.data.data)
        SetLoading(false)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  console.log(data);
  let isEmpty = Object.keys(data).length === 0;
  console.log(isEmpty)
  const { id, username, date_joined, email, is_staff } = data
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
            <Link to="/cart">My cart</Link>
          </div>
        </div>
        <h3>My infor</h3>
        <div className="col-md-8 infor-user">
          {isLoading ? <div style={{ textAlign: 'left' }}>is loading data...</div> : (
            <div style={{ textAlign: 'left' }}>
              <div>Tên đăng nhâp: {username}</div>
              <div>ID: {id}</div>
              <div>Email: {email}</div>
              <div>Ngày đăng ký: {date_joined}</div>
              <div>Vị trí: {is_staff ? <sapn>Nhân viên</sapn> : <span>Khách hàng</span>}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Account;
