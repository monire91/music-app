import React, {useState, useEffect, useCallback} from 'react';
import Layout from "../../components/Layout";
import {Link} from "react-router-dom";

import axios from 'axios'

const Signin = () => {

    const [formData, setFormData] = useState({

        email: '',
        password: '',

        error: '',
        success: false
    })

    const {name, email, password, password2, error, success} = formData;


    const clickSubmit = async event => {
        event.preventDefault()

            setFormData({...formData})

            await axios.interceptors.response.use((response) => {
                // do something with the response data
                // console.log('Response was received');

                return response;
            }, error => {
                // handle the response error
                // console.log(error.response.data.message)
                setFormData({...formData, error: error.response.data.message, success: false})
                return Promise.reject(error.response);
            });

            await axios({
                method: 'post',
                url: 'http://localhost:5000/api/login',
                data: { email, password }
            })
                .then((response) => {
                    console.log(response);
                    setFormData({...formData, success: true})
                    localStorage.setItem('myData', response.data.token);
            },
                (error) => {
                    console.log(error);
            });

    //         const FetchRequest = await fetch('http://localhost:5000/api/login', {
    //             method: 'POST',
    //             body: JSON.stringify(User),
    //             credentials: "same-origin",
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         })
    //             .then(res => {
    //                 if (res.status === 200) {
    //                     console.log('success')
    //                     console.log(res.headers['auth-token'])
    //                     setFormData({...formData, success: true})
    //                 }
    //                 else {
    //                     console.log(res.status)
    //                 return res.json()
    //                 }
    //             })
    //             .then(res => {
    //
    //                 if (!success) {
    //                     setFormData({...formData, error: res.message, success: false})
    //                 }
    //
    //                 // (!response.message ? setFormData({...formData, error: response.message, success: false}) : setFormData({...formData, success: true}))
    //
    //             })
    //             .catch(error => console.log('Error G:', error))
    }

    const handleChange = name => event => {
        setFormData({...formData, error: false, [name]: event.target.value})
    }

    const showError = () => (
        <div>

            {/*<h3>{values.error} </h3>*/}
            <div className="alert alert-danger" style={{display: error ? '' : 'none'}}>
                {error}
            </div>
        </div>
    );

    const showSuccess = () => (
        <div className="alert alert-success" style={{display: formData.success ? '' : 'none'}}>
            You are signed in
        </div>
    );

    return (
        <div>
            <Layout
                title="Sign In"
                description="Sign into your account"
                className="container col-md-8 offset-md-2"
            />

            {/*<div className="text-center">{values.success ? showSuccess() : showError()}</div>*/}
            <div className="text-center">
                {showSuccess()}
            </div>
            <div className="text-center">
                {showError()}
            </div>

            <form action="" className="container col-8 offset-2">
                <div className="form-group">

                </div>
                <div className="form-group">
                    {/*<label className="text-muted">Email</label>*/}
                    <input
                        placeholder="Email"
                        value={email}
                        onChange={handleChange('email')}
                        type="email" className="form-control"
                    />
                </div>
                <div className="form-group">
                    {/*<label className="text-muted">Password</label>*/}
                    <input
                        placeholder="Password"
                        value={password}
                        onChange={handleChange('password')} type="password" className="form-control"/>
                </div>

                <button onClick={clickSubmit} className="btn btn-primary">Sign In</button>
                <p>Don't have an account? <Link to="./register" >Register</Link> </p>
            </form>

        </div>


    )
}
export default Signin;

