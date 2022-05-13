
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './ProductDetail.scss'
import loading from '../../../assets/img/loading.gif';
import AddToCartSuccess from '../../message/AddToCartSuccess';
const ProductDetail = () => {
    const params = useParams()
    const nav = useNavigate()
    const [detail, setDetail] = useState({})
    const [isAddToCart, setIsAddToCart] = useState(false)
    const [quantity, setQuantity] = useState(1)
    const [isLoading, setIsLoading] = useState(true)
    const { category, id } = params
    console.log(category)
    useEffect(() => {
        var config = {
            method: 'get',
            url: `http://127.0.0.1:8000/product/${category}/${id}`,
            headers: {
                'Authorization': `Token ${localStorage.token}`
            }
        };

        axios(config)
            .then(function (response) {
                // console.log(response.data.data);
                if (response?.data?.data) {
                    let rawDetail = response.data.data
                    console.log(rawDetail)
                    const obj = {}
                    obj.des = rawDetail.description
                    obj.price = rawDetail.price
                    obj.image = rawDetail.image
                    obj.note = rawDetail.title
                    obj.idAll = rawDetail.id
                    if (category === 'book') {
                        obj.id = rawDetail.book.id
                        obj.author = rawDetail.book.author
                        obj.details = rawDetail.book.details
                        obj.name = rawDetail.book.name
                        obj.publicationYear = rawDetail.book.publicationYear
                        obj.publisher = rawDetail.book.publisher
                        obj.weight = rawDetail.book.weight
                    }
                    if (category === 'clothes') {
                        obj.id = rawDetail.clothes.id
                        obj.designer = rawDetail.clothes.designer
                        obj.details = rawDetail.clothes.details
                        obj.name = rawDetail.clothes.name
                        obj.sex = rawDetail.clothes.sex
                        obj.weight = rawDetail.clothes.weight
                    }
                    if (category === 'electronic') {
                        obj.id = rawDetail.electronic.id
                        obj.lifespan = rawDetail.electronic.lifespan
                        obj.details = rawDetail.electronic.details
                        obj.name = rawDetail.electronic.name
                        obj.manufacture = rawDetail.electronic.manufacture
                        obj.weight = rawDetail.electronic.weight
                    }
                    if (category === 'laptop') {
                        obj.id = rawDetail.laptop.id
                        obj.cpu = rawDetail.laptop.cpu
                        obj.details = rawDetail.laptop.details
                        obj.name = rawDetail.laptop.name
                        obj.ram = rawDetail.laptop.ram
                        obj.weight = rawDetail.laptop.weight
                        obj.type = rawDetail.laptop.type
                    }

                    console.log('>>>obj:', obj)
                    setDetail(obj)
                    setIsLoading(false)
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    }, [])

    console.log(detail.idAll)

    const handleBackToCategory = () => {
        nav(`/home`)
    }

    const handleSubQuantity = () => {
        if (quantity > 0) setQuantity(quantity - 1)
    }

    let isEmpty = Object.keys(detail).length === 0
    console.log(isEmpty)


    const handleAddToCart = () => {
        var data = JSON.stringify({
            "id": detail.idAll,
            "quantity": quantity
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

        setIsAddToCart(!isAddToCart)
        setTimeout(() => {
            setIsAddToCart(false)
        }, 2000)
    }

    return (
        <div className="pd-container">
            <div className="pd-path">
                <span onClick={handleBackToCategory}>{category}</span>	&#62; {detail.des}	&#62; {detail.name}
            </div>{isLoading &&
                (<div className="loading"><img src={loading} alt="" /></div>)}
            {!isEmpty && (
                <div className="pd-content">
                    <div className="pd-img">
                        <img src={detail.image} alt="" />
                    </div>
                    <div className="pd-text">
                        <div className="pd-name">{detail.name}</div>
                        <div className="pd-price"> <span>
                            {new Intl.NumberFormat('it-IT', {
                                style: 'currency',
                                currency: 'VND',
                            }).format(detail.price)}
                        </span></div>
                        {category === 'book' && (
                            <>
                                <div className="pd-author"><span>Tác giả: </span>{detail.author}</div>
                                <div className="pd-publisher"><span>Nhà xuất bản:</span> {detail.publisher}</div>
                                <div className="pd-publicationYear"><span>Năm phát hành:</span> {detail.publicationYear}</div>
                                <div className="pd-weight"><span>Khối lượng:</span> {detail.weight}</div>
                                <div className="pd-details"><span>Thông tin mô tả: </span>{detail.details}</div>
                                <div className="pd-note"><span>Thông tin bonus: </span>{detail.note}</div>
                            </>
                        )}
                        {category === 'clothes' && (
                            <>
                                <div className="pd-author"><span>Nhà thiết kế: </span>{detail.designer}</div>
                                <div className="pd-publisher"><span>Đối tượng giới tính:</span> {detail.sex}</div>
                                <div className="pd-weight"><span>Khối lượng:</span> {detail.weight}</div>
                                <div className="pd-details"><span>Thông tin mô tả: </span>{detail.details}</div>
                                <div className="pd-note"><span>Thông tin bonus: </span>{detail.note}</div>
                            </>
                        )}
                        {category === 'electronic' && (
                            <>
                                <div className="pd-publisher"><span>Vòng đời :</span> {detail.lifespan}</div>
                                <div className="pd-publicationYear"><span>Năm sản xuất :</span> {detail.manufacture}</div>
                                <div className="pd-weight"><span>Khối lượng:</span> {detail.weight}</div>
                                <div className="pd-details"><span>Thông tin mô tả: </span>{detail.details}</div>
                                <div className="pd-note"><span>Thông tin bonus: </span>{detail.note}</div>
                            </>
                        )}
                        {category === 'laptop' && (
                            <>
                                <div className="pd-author"><span> CPU: </span>{detail.cpu}</div>
                                <div className="pd-publisher"><span>RAM:</span> {detail.ram}</div>
                                <div className="pd-publicationYear"><span>Loại:</span> {detail.type}</div>
                                <div className="pd-weight"><span>Khối lượng:</span> {detail.weight}</div>
                                <div className="pd-details"><span>Thông tin mô tả: </span>{detail.details}</div>
                                <div className="pd-note"><span>Thông tin bonus: </span>{detail.note}</div>
                            </>
                        )}


                        <div className="pd-atc">
                            <div className="pd-atc-quantity">
                                <span
                                    onClick={handleSubQuantity}
                                    className="pd-atc-sub">-</span>
                                <span className="pd-atc-number">{quantity}</span>
                                <span
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="pd-atc-add">+</span>
                            </div>
                            <div className="pd-atc-btn">
                                <button onClick={handleAddToCart}> Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
            }
            {isAddToCart && <AddToCartSuccess />}
        </div >
    )
}

export default ProductDetail



// pd: product detail
// atc: add to cart