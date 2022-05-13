import React from 'react';
import './OrderDetail.scss'
const OrderDetail = ({ data, className }) => {
  return (
    <>
      {data.map((item, index) => (
        <div className={`row product ${className}`} key={index}>
          <div className="col-md-1 img-product"><img src={item.item.image} alt="" /></div>
          {/* <div className="col-md-3">{item.item.description}</div> */}
          <div className="col-md-3">{item.item.title}</div>
          <div className="col-md-3">{item.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</div>
          <div className="col-md-3">{item.item.detail}</div>
          <div className="col-md-2">Số lượng {item.quantity}</div>
        </div>
      ))}
    </>
  );
};

export default OrderDetail;
