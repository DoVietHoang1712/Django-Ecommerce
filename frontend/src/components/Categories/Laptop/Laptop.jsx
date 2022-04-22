// import React from 'react'

// const Laptop = (props) => {
//   return (
//     <div className={`laptop ${props.active? "active": "non-active"}`}>Laptop</div>
//   )
// }

// export default Laptop



import { useState, useEffect } from 'react';
import axios from 'axios';
import loading from '../../../assets/img/loading.gif';
import { useNavigate } from 'react-router-dom'
const Laptop = (props) => {
  const navigate = useNavigate()
  const [laptop, setLaptop] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    var config = {
      method: 'get',
      url: 'http://127.0.0.1:8000/product/laptop',
      headers: {
        'Authorization': 'Token ba263a79474576fff23ddc970418aefe38fd702c'
      }
    };

    axios(config)
      .then(function (response) {
        // console.log(response.data.data);
        if (response?.data?.data && response.data.data.length > 0) {
          let rawLaptop = response.data.data
          // console.log(">>>rawLaptop: ", rawLaptop);
          rawLaptop = rawLaptop.map((item) => {
            let obj = {}
            obj.id = item.laptop.id
            obj.name = item.laptop.name
            obj.price = item.price
            obj.image = item.image
            // console.log('>>>obj:', obj)
            return obj
          })
          setLaptop(rawLaptop)
          setIsLoading(false)
        }
      })
      .catch(function (error) {
        console.log(error);
      });

  }, [])

  // console.log(">>>Laptops:", Laptops)
  // console.log(props)
  const handleClickAddToCart = () => {
    console.log(props)
    // props.handleAddToCart()
  }

  const handleToDetail = (product) => {
    // console.log(product.id)
    navigate(`/laptop/${product.id}`)
  }

  return (
    <div className={`Laptop container ${props.active ? 'active' : 'non-active'}`}>
      {isLoading ?
        (<div className="loading"><img src={loading} alt="" /></div>)
        :
        <div className="row">
          {laptop.map((item, index) => (
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

export default Laptop;

