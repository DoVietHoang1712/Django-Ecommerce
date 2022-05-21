import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ListOrder.scss';
import OrderDetail from './OrderDetail';
// import { Link } from 'react-router-dom';

const Order = () => {
  const [order, setOrder] = useState([]);
  // const [display, setDisplay] = useState(false);
  useEffect(() => {
    var config = {
      method: 'get',
      url: 'http://127.0.0.1:8000/order/',
      headers: {
        Authorization: `Token ${localStorage.token}`,
        // ...data.getHeaders(),
      },
      //   data: data,
    };
    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        let data = response?.data?.data ? response.data.data : [];
        setOrder(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  // console.log(order);
  return (
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
              <div className="col-sm-4">
                <h2>
                  Đơn của bạn
                </h2>
              </div>
              <div className="col-sm-8">
                <a href="/order" className="btn btn-primary">
                  <span>Refresh List</span>
                </a>
              </div>
            </div>
          </div>
          <div className="table-filter">
            <div className="row">
              <div className="col-sm-9">
                <div className="input-group">
                  <div className="form-outline">
                    <input type="search" id="form1" className="form-control" />
                    <label className="form-label" htmlFor="form1">
                      Search
                    </label>
                  </div>
                  <button type="button" className="btn btn-primary">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {order.map((item, index) => (
            <details key={index} className="order">
              <summary className="row">
                <div className="col-md-2">Mã đơn #00{index + 1}</div>
                <div className="col-md-3">{item.create_at}</div>
                <div className="col-md-3">
                  {item.payment.total.toLocaleString('it-IT', {
                    style: 'currency',
                    currency: 'VND',
                  })}
                </div>
                <div className="col-md-3 text-left">
                  {item.shipment.address}
                </div>
                <div className="col-md-1">
                  <div
                    className="btn btn-primary"
                  // onClick={() => setDisplay(!display)}
                  >
                    Chi tiết
                  </div>
                </div>
              </summary>
              <hr />
              <OrderDetail
                // className={display ? `display` : 'no-display'}
                data={item.order_details}
              />
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Order;
