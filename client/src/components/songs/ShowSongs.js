import React, { useState, useCallback, useEffect } from 'react';


const About = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    //'http://localhost:5000/api/songs'
    useEffect(() => {

        fetch('http://localhost:5000/api/songs')
            .then(res => res.json())
            .then(data => (setData(data), console.log(data)))
            .catch(err => console.log(err))

        // const FetchData = async function() {
        //     try {
        //         setLoading(true);
        //         console.log(data)
        //         console.log(loading)
        //         const response = axios.get('http://localhost:5000/api/songs');
        //         if (response.status === 200) {
        //             setData(response.data)
        //             console.log(data)
        //         }
        //     }   catch (error) {
        //         throw error;
        //     }   finally {
        //         setLoading(false)
        //     }
        //}


    }, [])


    return (
        <div>

                    {
                        data.map((item, i) =>
                            <div key={i} className="bg-light">

                                <p>{item.name}</p>
                                <p>{item.singer}</p>
                                <div className="mb-5">
                                    <img src={'http://localhost:5000/'+item.photo } style={{width:'100%'}} alt=""/>
                                    {console.log(item)}
                                </div>

                            </div>
                        )
                    }

        </div>
    );
}

export default About;