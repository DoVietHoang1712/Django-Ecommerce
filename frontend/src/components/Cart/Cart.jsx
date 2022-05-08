import './Cart.scss'
import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import loading from '../../assets/img/loading.gif'
import emptyCart from '../../assets/img/emptyCart.jpg'
// import { Context } from '../../store/Context'

function Cart() {
    // console.log(localStorage)
    // const [state, dispatch] = useContext(Context)
    // console.log(state.token)

    const [cart, setCart] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [update, setUpdate] = useState(Math.floor(Math.random() * 10000))
    useEffect(() => {
        // if (state.token == '') {
        //     alert('bạn chưa đăng nhập')
        // }
        var config = {
            method: 'get',
            url: 'http://127.0.0.1:8000/cart',
            headers: {
                // 'Authorization': `Token ${state.token}`
                'Authorization': `Token ${localStorage.token}`
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
    }, [update])


    const handleUpdateUpQuantity = (item) => {
        console.log('up', item.id)
        const quantity = item.quantity + 1
        var data = JSON.stringify({
            "quantity": quantity
        });

        var config = {
            method: 'put',
            url: `http://127.0.0.1:8000/cart/${item.id}/`,
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
        setUpdate(Math.floor(Math.random() * 10000))
    }
    const handleUpdateDownQuantity = (item) => {
        // console.log('down', item.id)
        // console.log('up', item.id)
        const quantity = item.quantity - 1
        var data = JSON.stringify({
            "quantity": quantity
        });

        var config = {
            method: 'put',
            url: `http://127.0.0.1:8000/cart/${item.id}/`,
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
        setUpdate(Math.floor(Math.random() * 10000))
    }
    let isArray = Array.isArray(cart)
    return (
        <div className="cart-container container">
            <div className="cart-header">
                <span className="cart-img">Image</span>
                <span className="cart-name">Name</span>
                <span className="cart-quantity">Quantity</span>
                <span className="cart-price">Price</span>
            </div>
            {isLoading &&
                (<div className="loading"><img src={loading} alt="" /></div>)
            }
            {isArray && cart.map((item, index) => (
                <div className="cart-item" key={index}>
                    <img className="cart-img" src={item.item.image} alt="" />
                    <div className="cart-text">
                        <span className="cart-name">{item.item.title}</span>
                        <span className="cart-quantity">
                            <i className="fas fa-caret-up" onClick={() => handleUpdateUpQuantity(item)}></i>
                            <span>{item.quantity}</span>
                            <i className="fas fa-caret-down" onClick={() => handleUpdateDownQuantity(item)}></i>
                        </span>
                        <span className="cart-price">{item.item.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span>
                        <span className="cart-delete"><i className="far fa-times-circle"></i></span>
                    </div>
                </div>
            ))
            }
            {
                !isLoading && isArray && cart.length === 0 &&
                (<div className="cart-empty"><img src={emptyCart} alt="" /></div>)
            }

        </div >
    )
}

export default Cart