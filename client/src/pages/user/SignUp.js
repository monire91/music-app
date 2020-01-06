import React, {useState, useEffect, useCallback} from 'react';

import Layout from "../../components/Layout";
import {Link} from "react-router-dom";

import { signed } from "../../actions";
import {useDispatch, useSelector} from "react-redux";


const Register = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
        error: '',
        success: false
    })


    const {name, email, password, password2, error, success} = formData;
    const isLogged = useSelector(state => state.isLogged)
    const dispatach = useDispatch();

    const clickSubmit = async event => {
        event.preventDefault()

        if (password !== password2) {
            setFormData({...formData, error: 'Passwords do not match'})

            return ''
        } else {
            setFormData({...formData})
            const newUser = {
                email,
                password
            }

            const FetchRequest = await fetch('http://localhost:5000/api/register', {
                method: 'POST',
                body: JSON.stringify(newUser),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => {
                    return res.json()
                })
                .then(response => {
                    console.log(response.message);

                    if (!response.message) {
                        console.log('success')
                        setFormData({...formData, success: true, email: '', password: '', password2: ''})
                        dispatach(signed())
                        console.log( dispatach(signed) )
                    } else {
                        setFormData({...formData, error: response.message, success: false})

                    }
                })
                .catch(error => console.log('Error:', error))
        }

    }

    const handleChange = name => event => {
        setFormData({...formData, error: false, [name]: event.target.value, success: false })
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
        <div className="alert alert-success" style={{display: success ? '' : 'none'}}>
            New account has been created successfully. Please sign in.
        </div>
    );

    return (
        <div>
            <Layout
                title="Register"
                description="Sign up to this website"
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
                    {/*<label className="text-muted">Name</label>*/}
                    <input
                        placeholder="Name"
                        onChange={handleChange('name')}
                        type="text"
                        className="form-control"
                        value={name}
                    />
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
                <div className="form-group">
                    {/*<label className="text-muted">Password</label>*/}
                    <input
                        placeholder="Repeat Password"
                        value={password2}
                        onChange={handleChange('password2')} type="password" className="form-control"/>
                </div>
                <button onClick={clickSubmit} className="btn btn-primary">Submit</button>
                <p>Already have an account? <Link to="./signin" >Sign In</Link> </p>
            </form>

        </div>


    );
}
export default Register;

