import React, { useContext, useEffect, useState } from 'react';
import './Login.scss';
import axios from 'axios';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Context } from '../../store/Context';

const Register = () => {
    const [status, setStatus] = useState(1)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [post, setPost] = useState({ username: '', password: '' })
    const navigate = useNavigate();

    const [state, dispatch] = useContext(Context);
    const handleLogin = () => {
        setPost({ username: username, password: password })
    }

    // useEffect(() => {
    //     var data = qs.stringify({
    //         'username': login.username,
    //         'password': login.password
    //     });
    //     var config = {
    //         method: 'post',
    //         url: 'http://127.0.0.1:8000/auth/token/login/',
    //         headers: {
    //             'Content-Type': 'application/x-www-form-urlencoded'
    //         },
    //         data: data
    //     };
    //     axios(config)
    //         .then((response) => {
    //             setStatus(response.status)
    //         })
    //     if (status == 1) setStatus(0)
    //     console.log(status)
    // }, [login])

    useEffect(() => {
        async function fetchData() {
            try {
                var data = qs.stringify({
                    'username': post.username,
                    'password': post.password
                });
                var config = {
                    method: 'post',
                    url: 'http://127.0.0.1:8000/auth/token/login/',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    data: data
                };
                const res = await axios(config)
                setStatus(res.status)
                // if (res?.data?.data?.auth_token) console.log(res.data.data.auth_token)
                dispatch({ type: 'login', payload: res.data.data.auth_token })
                // console.log(status)
            }
            catch (e) {
                console.log(e)
                setStatus(0)
            }
        }
        fetchData();
    }, [post]);

    if (status == 200) {
        navigate('/home');
    }
    // if (status == 0 && post.username != '' && post.password != '') {
    //     alert('Bạn đã nhập sai thống tin đăng nhập')
    //     setPost({ username: '', password: '' })
    //     setPassword('')
    //     setUsername('')
    // }

    // console.log(state);

    return (
        <div className="container register">
            <div className="row cover mx-auto mt-4">
                <div className="col-md-12">
                    <h1 className="mt-4 pt-4 text-center">Login</h1>
                    <div className="row register_form-register pb-4">
                        <div className=" mx-auto mt-3 col-10">
                            <div className="register__form-register__input">
                                <input
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    type="text"
                                    placeholder="Username"
                                />
                            </div>
                            <div className="register__form-register__input">
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="register__form-register__btn">
                                <button onClick={handleLogin}>Click me</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Register;




 // useEffect(() => {
    //     var data = qs.stringify({
    //         'username': 'admin',
    //         'password': '123456'
    //     });
    //     var config = {
    //         method: 'get',
    //         url: 'http://localhost:8000/user/me',
    //         headers: {
    //             'Authorization': 'Token ba263a79474576fff23ddc970418aefe38fd702c'
    //         }
    //     };
    //     axios(config)
    //         .then((response) => { console.log(response) })
    //         .catch((error) => { console.log(error) })
    // }, [])



    // useEffect(async () => {
    //     const res = await axios.get(url)
    //     console.log(res)
    // }, [])

    // console.log("status", status, "token", token)