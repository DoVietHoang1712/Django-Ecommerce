// import React from 'react'

// const Electronic = (props) => {
//   return (
//     <div className={`electronic ${props.active? "active": "non-active"}`}>Electronic</div>
//   )
// }

// export default Electronic



import { useState, useEffect } from 'react';
import axios from 'axios';
import loading from '../../../assets/img/loading.gif';
import { useNavigate } from 'react-router-dom'
const Electronic = (props) => {
  const navigate = useNavigate()
  const [electronic, setElectronic] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    var config = {
      method: 'get',
      url: 'http://127.0.0.1:8000/product/electronic',
      headers: {
        'Authorization': 'Token ba263a79474576fff23ddc970418aefe38fd702c'
      }
    };

    axios(config)
      .then(function (response) {
        // console.log(response.data.data);
        if (response?.data?.data && response.data.data.length > 0) {
          let rawElectronic = response.data.data
          // console.log(">>>rawElectronic: ", rawElectronic);
          rawElectronic = rawElectronic.map((item) => {
            let obj = {}
            obj.id = item.electronic.id
            obj.name = item.electronic.name
            obj.price = item.price
            obj.image = item.image
            // console.log('>>>obj:', obj)
            return obj
          })
          setElectronic(rawElectronic)
          setIsLoading(false)
        }
      })
      .catch(function (error) {
        console.log(error);
      });

  }, [])

  // console.log(">>>Electronics:", Electronics)
  // console.log(props)
  const handleClickAddToCart = () => {
    console.log(props)
    // props.handleAddToCart()
  }

  const handleToDetail = (product) => {
    // console.log(product.id)
    navigate(`/electronic/${product.id}`)
  }

  return (
    <div className={`Electronic container ${props.active ? 'active' : 'non-active'}`}>
      {isLoading ?
        (<div className="loading"><img src={loading} alt="" /></div>)
        :
        <div className="row">
          {electronic.map((item, index) => (
            <div className="product" key={index}>
              <div
                className="product-cover">
                <div
                  onClick={() => handleToDetail(item)}
                  className="img-product">
                  <img src={item.image} alt="" />
                </div>
                <div className="name-product">
                  <span>{item.name}</span>
                </div>
                <div className="price-product">
                  <span>
                    {new Intl.NumberFormat('it-IT', {
                      style: 'currency',
                      currency: 'VND',
                    }).format(item.price)}
                  </span>
                </div>
                <div className="btn">
                  <button
                    onClick={handleClickAddToCart}
                  >Add to cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>}
    </div >
  );
};

export default Electronic;

