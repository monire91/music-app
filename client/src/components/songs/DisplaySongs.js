import React, { useState, useCallback, useEffect } from 'react';
import {Link} from "react-router-dom";



const DisplaySongs = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    //'http://localhost:5000/api/songs'
    useEffect(() => {

        fetch('http://localhost:5000/api/showSongs')
            .then(res => res.json())
            .then(data => (setData(data), console.log(data)))
            .catch(err => console.log(err))

    }, [])


    return (
        <div>

            {
                data.map((item, i) =>
                    <div key={i} className="bg-light mb-5 ">

                        <p>{item.name}</p>
                        <a target="_blank" href={"http://localhost:5000/"+item.songURL}>{item.songURL}</a>
                        <img width="100%" src={"http://localhost:5000/"+item.imageURL} alt=""/>


                        {/*<p>{item.singer}</p>*/}
                        {/*<div className="mb-5">*/}
                        {/*    <img src={'http://localhost:5000/'+item.photo } style={{width:'100%'}} alt=""/>*/}
                        {/*    {console.log(item)}*/}
                        {/*</div>*/}

                    </div>
                )
            }

        </div>
    );
}

export default DisplaySongs;