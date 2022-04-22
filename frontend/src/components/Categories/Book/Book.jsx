import { useState, useEffect } from 'react';
import axios from 'axios';
import loading from '../../../assets/img/loading.gif';
import { useNavigate } from 'react-router-dom'
const Book = (props) => {
  const navigate = useNavigate()
  const [books, setBooks] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    var config = {
      method: 'get',
      url: 'http://127.0.0.1:8000/product/book',
      headers: {
        'Authorization': 'Token ba263a79474576fff23ddc970418aefe38fd702c'
      }
    };

    axios(config)
      .then(function (response) {
        // console.log(response.data.data);
        if (response?.data?.data && response.data.data.length > 0) {
          let rawBook = response.data.data
          // console.log(">>>rawBook: ", rawBook);
          rawBook = rawBook.map((item) => {
            let obj = {}
            obj.id = item.book.id
            obj.name = item.book.name
            obj.price = item.price
            obj.image = item.image
            // console.log('>>>obj:', obj)
            return obj
          })
          setBooks(rawBook)
          setIsLoading(false)
        }
      })
      .catch(function (error) {
        console.log(error);
      });

  }, [])

  // console.log(">>>books:", books)
  // console.log(props)
  const handleClickAddToCart = () => {
    props.handleAddToCart()
  }

  const handleToDetail = (product) => {
    // console.log(product.id)
    navigate(`/book/${product.id}`)
  }

  return (
    <div className={`book container ${props.active ? 'active' : 'non-active'}`}>
      {isLoading ?
        (<div className="loading"><img src={loading} alt="" /></div>)
        :
        <div className="row">
          {books.map((item, index) => (
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

export default Book;

