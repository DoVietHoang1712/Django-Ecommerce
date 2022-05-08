import './Product.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import loading from '../../assets/img/loading.gif';
import { useNavigate } from 'react-router-dom'
const Categories = (props) => {
  const [activeTab, setActiveTab] = useState("book");
  const navigate = useNavigate()
  const [product, setProduct] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  let url = `http://127.0.0.1:8000/product/${activeTab}`
  useEffect(() => {
    var config = {
      method: 'get',
      url,
      headers: {
        'Authorization': 'Token ba263a79474576fff23ddc970418aefe38fd702c'
      }
    };

    axios(config)
      .then(function (response) {
        // console.log(response.data.data);
        if (response?.data?.data && response.data.data.length > 0) {
          let rawProduct = response.data.data
          // console.log(rawProduct)
          rawProduct = rawProduct.map((item) => {
            let obj = {}
            obj.idAll = item.id
            switch (activeTab) {
              case 'book':
                obj.id = item.book.id
                obj.name = item.book.name
                obj.price = item.price
                obj.image = item.image
                break
              case 'clothes':
                obj.id = item.clothes.id
                obj.name = item.clothes.name
                obj.price = item.price
                obj.image = item.image
                break
              case 'electronic':
                obj.id = item.electronic.id
                obj.name = item.electronic.name
                obj.price = item.price
                obj.image = item.image
                break
              case 'laptop':
                obj.id = item.laptop.id
                obj.name = item.laptop.name
                obj.price = item.price
                obj.image = item.image
                break
            }
            return obj
          })
          setProduct(rawProduct)
          setIsLoading(false)
        }
      })
      .catch(function (error) {
        console.log(error);
      });

  }, [url])
  // console.log(activeTab)
  const handleClickAddToCart = (item) => {
    var data = JSON.stringify({
      "id": item.idAll,
      "quantity": 1
    });

    var config = {
      method: 'post',
      url: 'http://127.0.0.1:8000/cart/add_to_cart/',
      headers: {
        'Authorization': `Token ${localStorage.token}`,
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

    props.handleAddToCart()
  }

  const handleToDetail = (product) => {
    navigate(`/${activeTab}/${product.id}`)
  }
  localStorage.setItem('activeTab', activeTab)
  return (
    <div className="categories">
      <ul className="categories-list list-inline">
        <li className={`mr-3 mt-4 py-2 px-4 ${activeTab === 'book' ? 'active-tab' : ''}`} onClick={() => setActiveTab("book")}>Book</li>
        <li className={`mr-3 mt-4 py-2 px-4 ${activeTab === 'clothes' ? 'active-tab' : ''}`} onClick={() => setActiveTab("clothes")}>Clothes</li>
        <li className={`mr-3 mt-4 py-2 px-4 ${activeTab === 'electronic' ? 'active-tab' : ''}`} onClick={() => setActiveTab("electronic")}>Electronic</li>
        <li className={`mr-3 mt-4 py-2 px-4 ${activeTab === 'laptop' ? 'active-tab' : ''}`} onClick={() => setActiveTab("laptop")}>Laptop</li>
      </ul>
      <div className="categories-content">
        <div className="active">
          {isLoading ?
            (<div className="loading"><img src={loading} alt="" /></div>)
            :
            <div className="row">
              {product.map((item, index) => (
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
                        onClick={() => handleClickAddToCart(item)}
                      >Add to cart</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>}
        </div >
      </div>
    </div>
  );
};

export default Categories;
