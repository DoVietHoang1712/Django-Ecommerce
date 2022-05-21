import React, { useContext, useEffect, useState } from 'react';
import { OrderContext } from '../../store/OrderContext';
import axios from 'axios';
import './Checkout.scss';
import { useNavigate } from 'react-router-dom'

const Order = () => {
  const [listProduct, setListProduct] = useContext(OrderContext);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [shipmentFee, setShipmentFee] = useState([14850, 18300, 44100]);
  const [shipmentType, setShipmentType] = useState(0);
  const [paymentType, setPaymentType] = useState('Thanh toán khi nhận hàng;');
  const [note, setNote] = useState('');
  const [address, setAddress] = useState('');

  const nav = useNavigate()

  console.log(listProduct);
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
        setUser(response.data.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const totalAMount = listProduct.reduce(
    (total, current) => total + current.item.price * current.quantity,
    0
  );

  const createOrder = () => {

    // console.log('createOrder')

    var data = JSON.stringify({
      cartItem: listProduct,
      shipment: {
        fee: shipmentFee[shipmentType],
        weight: "5kg",
        address: address,
        note: note,
        phone: "0359386311",
      },
      payment: {
        total: totalAMount,
        name: user.username,
        card_number: null,
        ccv: "003",
      },
    });

    // console.log(data);

    var config = {
      method: 'post',
      url: 'http://127.0.0.1:8000/order/',
      headers: {
        Authorization: `Token ${localStorage.token}`,
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        nav('/order')

      })
      .catch(function (error) {
        console.log(error);
      });


  };
  // console.log(user);
  return (
    <div className="checkout container">
      {listProduct.length > 0 ? (
        <div className="row shipment">
          <div className="col-md-12 line"></div>
          <div className="col-md-12 text-left">
            <i className="fa-solid fa-location-dot mx-2"></i>
            <span className="h3 text-left"> Địa Chỉ Nhận Hàng</span>
          </div>
          {!loading && (
            <div className="col-md-3">
              <span>Khách hàng: {user.username}</span>
              <br />
              <span>Email: {user.email}</span>
            </div>
          )}
          <div className="col-md-7 address">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="col-md-2 text-primary">Thay đổi</div>
        </div>
      ) : (
        ''
      )}

      {listProduct.length > 0 ? (
        <div className="row products">
          <div className="col-md-12 text-left">
            <i className="fa-solid fa-cart-shopping mx-2"></i>
            <span className="h3">Sản Phẩm</span>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-3"></div>
              <div className="col-md-2"></div>
              <div className="col-md-2">Đơn giá</div>
              <div className="col-md-2">Số lượng</div>
              <div className="col-md-2 text-success">Thành tiền</div>
            </div>
            <hr />
          </div>
          {listProduct.map((item, index) => (
            <div key={index} className="col-md-12">
              <div className="row">
                <div className="col-md-1 img-product">
                  <img src={item.item.image} alt="" />
                </div>
                <div className="col-md-3">{item.item.title}</div>
                <div className="col-md-2">{item.item.description}</div>
                <div className="col-md-2">
                  {item.item.price.toLocaleString('it-IT', {
                    style: 'currency',
                    currency: 'VND',
                  })}
                </div>
                <div className="col-md-2">{item.quantity}</div>
                <div className="col-md-2">
                  {(item.item.price * item.quantity).toLocaleString('it-IT', {
                    style: 'currency',
                    currency: 'VND',
                  })}
                </div>
              </div>
              <hr />
            </div>
          ))}
        </div>
      ) : (
        <h3 className="my-4">Hãy chọn ít nhất 1 sản phẩm !</h3>
      )}

      {listProduct.length > 0 ? (
        <div className="row payment my-4">
          <div className="col-md-5 form-group note">
            <label htmlFor="note">Lời nhắn</label>
            <input
              value={note}
              type="text"
              className="form-control w-75"
              placeholder="Lưu ý cho người bán"
              id="note"
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
          <div className="col-md-5 form-group">
            <label htmlFor="" className="mx-3">
              Đơn vị vận chuyển
            </label>
            <select
              className="form-control"
              onChange={(e) => setShipmentType(e.target.value)}
            >
              <option defaultValue value="0">
                Tiết kiệm
              </option>
              <option value="1">Nhanh</option>
              <option value="2">Hỏa tốc</option>
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="" className="mx-3">
              Chi phí
            </label>
            {shipmentFee[shipmentType].toLocaleString('it-IT', {
              style: 'currency',
              currency: 'VND',
            })}
          </div>
        </div>
      ) : (
        ''
      )}

      {listProduct.length > 0 ? (
        <div className="row payment-type">
          <div className="col-md-9 text-left">
            <i className="fa-solid fa-credit-card mx-2"></i>
            <span className="h3">Phương thức thanh toán</span>
          </div>
          <div className="col-md-3">
            <select
              className="form-control"
              onChange={(e) => setPaymentType(e.target.value)}
            >
              <option defaultValue value="Thanh toán khi nhận hàng">
                Thanh toán khi nhận hàng
              </option>
              <option value="Thẻ tín dụng/ Ghi nợ">Thẻ tín dụng/ Ghi nợ</option>
            </select>
          </div>
          <div className="col-md-12">
            <div className="row justify-content-end my-4">
              <div className="col-md-2 text-right text-danger">
                Tổng thanh toán
              </div>
              <div className="col-md-2">
                {(totalAMount + shipmentFee[shipmentType]).toLocaleString(
                  'it-IT',
                  {
                    style: 'currency',
                    currency: 'VND',
                  }
                )}
              </div>
              <div className="col-md-12 text-right">
                <div className="text-left mx-4">
                  <span>
                    Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân theo
                    Điều khoản của chúng tôi
                  </span>
                </div>
                <button onClick={createOrder} className="btn btn-primary mx-4">
                  Đặt hàng
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Order;
