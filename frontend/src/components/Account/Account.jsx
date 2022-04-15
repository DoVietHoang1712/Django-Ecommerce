import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Account.scss';
// import { Context } from '../../store/Context';
const Account = () => {
  const [data, setData] = useState({});
  // const [state,] = useContext(Context);
  // console.log(state);
  // const navigate = useNavigate();
  // if(state.token == null){
  //     navigate('/login');
  // }
  useEffect(() => {
    var config = {
      method: 'get',
      url: 'http://localhost:8000/user/me',
      headers: {
        Authorization: 'Token ba263a79474576fff23ddc970418aefe38fd702c',
        // Authorization: `Token ${state}`
      },
    };
    axios(config)
      .then(function (response) {
        // console.log(response.data.data);
        setData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  // console.log(data);
  let isEmpty = Object.keys(data).length === 0;
  // console.log(isEmpty);
  const { id, username, date_joined, email, is_staff } = data;
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
        <div className="col-md-8 infor-user">
          {!isEmpty && (
            <div style={{ textAlign: 'left' }}>
              <div>Tên đăng nhâp: {username}</div>
              <div>ID: {id}</div>
              <div>Email: {email}</div>
              <div>Ngày đăng ký: {date_joined}</div>
              <div>
                Vị trí:{' '}
                {is_staff ? <span>Nhân viên</span> : <span>Khách hàng</span>}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Account;
