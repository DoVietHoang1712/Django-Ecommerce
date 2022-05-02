import './Cart.scss'
import axios from 'axios'
import { useState, useEffect } from 'react'
import loading from '../../assets/img/loading.gif'
import emptyCart from '../../assets/img/emptyCart.jpg'
function Cart() {

    const [cart, setCart] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        var config = {
            method: 'get',
            url: 'http://127.0.0.1:8000/cart',
            headers: {
                'Authorization': 'Token 3cfe39c7ecafdaf847f0f52e4100da7f715f5759'
            }
        };

        axios(config)
            .then(function (response) {
                // console.log(response.data.data);
                let data = response?.data?.data ? response.data.data : []
                setCart(data)
                setIsLoading(false)
            })
            .catch(function (error) {
                console.log(error);
            });

    }, [])

    // console.log(cart)
    let isArray = Array.isArray(cart)
    return (
        <div className="cart-container container">
            {isLoading &&
                (<div className="loading"><img src={loading} alt="" /></div>)
            }
            {isArray && cart.map((item, index) => (
                <div className="cart-item" key={index}>
                    <img className="cart-img" src={item.item.image} alt="" />
                    <div className="cart-text">
                        <span className="cart-name">{item.item.title}</span>
                        <span className="cart-quantity">{item.quantity}</span>
                        <span className="cart-price">{item.item.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span>
                        <span className="cart-delete"><i className="far fa-times-circle"></i></span>
                    </div>
                </div>
            ))}
            {!isLoading && isArray && cart.length === 0 &&
                (<div className="cart-empty"><img src={emptyCart} alt="" /></div>)}

        </div>
    )
}

export default Cart