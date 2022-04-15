import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Account.scss';
const Account = () => {
  const [data, setData] = useState();
  useEffect(() => {
    var config = {
      method: 'get',
      url: 'http://localhost:8000/user/me',
      headers: {
        Authorization: 'Token ba263a79474576fff23ddc970418aefe38fd702c',
      },
    };
    axios(config)
      .then(function (response) {
        console.log(response);
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
    console.log(data);
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
          {/* <div>{data.data.username}</div> */}
        </div>
      </div>
    </div>
  );
};

export default Account;
