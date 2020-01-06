import React, { useState } from 'react';

const SignIn = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("You are submitting " + username);
        sendReq();
    }

    const sendReq = () => {

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Hello {username}</h1>
                <p>Enter your name, and submit:</p>
                <input
                    type='text'
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                />
                <input
                    type='text'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <input
                    type='submit'
                />
            </form>
        </div>
    );
}

export default SignIn;
