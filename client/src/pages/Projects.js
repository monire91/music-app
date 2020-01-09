import React, {useEffect, useState, useCallback} from 'react';
import Layout from "../components/Layout";

const Projects = () => {


    const [data, setdata] = useState([
        {title: 'oooo', cock: 'yes please'},
        {title: 'gooo', cock: 'yes please'}
        ])
    // useCallback(async () =>
    const clickSubmit = async event => {
        event.preventDefault()
        let token = localStorage.getItem('myData');
        let type = localStorage.getItem('type');
        console.log(token)
        await fetch( "http://localhost:5000/api/posts", {
            method: 'GET',
            headers: new Headers({
                // 'Content-Type': 'text/plain',
                'auth-token':token,
                'type':type
            }),
            credentials: "same-origin"
        })
            // .then(res => return res.json())
            .then(res => (
                console.log('first'),
                console.log(res),
                res.json()
                )
            )
            .then(res => setdata(res) ,
            console.log('second'),
                console.log(data),
                console.log('end of req')
            ).catch(err => console.log(err))
    }
        const dis = () => {
            return(
                <div>
                    {/*{*/}
                    {/*    book.map((item, i)=> (*/}
                    {/*        <p key={i}>{item.title}</p>*/}
                    {/*))}*/}

                    hii
                </div>
            );
        }

        //)
    return(
        <div className="container">
            book
            {dis()}
            {/*{book.map((item, i) => (*/}
            {/*    <ul key={i}>*/}
            {/*        <li>{item.title}</li>*/}
            {/*    </ul>*/}
            {/*))}*/}


            <button onClick={clickSubmit} className="btn btn-primary">Sign in and Click to change the text</button>
            {
                data.map((item, i) =>
                    <div key={i}>
                        <p>{item.title}</p>
                        <p>{item.description}</p>
                    </div>

                )
            }

        </div>
    );
}

export default Projects;
