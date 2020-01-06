import React, {useState, useEffect, useCallback} from 'react';
import axios from 'axios'
import Layout from "../../components/Layout";
import {Link} from "react-router-dom";

import { signed } from "../../actions";
import {useDispatch, useSelector} from "react-redux";


const Register = () => {

    const [uploadedFile, setUploadedFile] = useState({})
    const [formData, setFormData] = useState({
        name: '',
        singer: '',
        photo: '',
        selectedPhoto: null,
        error: '',
        success: false,
    })


    const {name, singer, photo, password2, error, success, selectedPhoto} = formData;
    const isLogged = useSelector(state => state.isLogged)
    const dispatach = useDispatch();

    const clickSubmit = async event => {
        event.preventDefault()


            const newSong = {
                name,
                singer,
                photo
            }





            // const FetchRequest = await fetch('http://localhost:5000/api/songs', {
            // method: 'POST',
            // body: {name, singer, photo},
            // headers: {
            //     'Accept': 'application/json',
            //     'Content-Type': 'multipart/form-data',
            // }
            // })
            //     .then((response) => (response.json()))
            //     .then((responseJson) => {
            //         // Perform success response.
            //         console.log(responseJson);
            //     }
            //     )
            //     .catch(error => console.log('Error:', error))

        let formData = new FormData();
        formData.append(name, name);
        formData.append(singer,singer);
        formData.append(photo,photo);


        try {
            const res = await axios.post('http://localhost:5000/api/songs', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            const { name, singer, photo } = res.data
            setUploadedFile({ singer, name, photo })
            console.log('Uploaded successfully')
        }catch (err) {
            if (err.response.status === 500) {
                console.log("there was a problem with the server 500")
            } else {
                console.log(err.response.data.message )
            }
        }

        // const response = await fetch("http://localhost:5000/api/songs",
        //     {
        //         body: formData,
        //         method: "post"
        //     });
        // const myJson = await response.json();
        // console.log(JSON.stringify(myJson));

        // try {
        //     const response = await fetch('http://localhost:5000/api/songs', {
        //         method: 'POST',
        //         body: newSong,
        //         headers: {
        //                 'Content-Type': 'multipart/form-data',
        //             }
        //     });
        //     const result = await response.json();
        //     console.log('Success:', JSON.stringify(result));
        // } catch (error) {
        //     console.error('Error:', error);
        // }


    }

    const handleChange = name => event => {
        setFormData({...formData, error: false, [name]: event.target.value })
    }
    var voo = null;

    const fileSelectHandler = photo => event => {
        console.log(event.target.files[0])
        setFormData({...formData, selectedPhoto: event.target.files[0]})
        console.log(selectedPhoto)

        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);

        reader.onload=(e)=>{
            console.log('wtf data')
            console.log(e.target.result)
            // setFormData({...formData, blob: e.target.result})
            setFormData({...formData, error: false, selectedPhoto: e.target })
            photo = e.target.result
            console.log('photo')
            console.log(photo)
        }
    }


    return (
        <div>



            <form action="" className="container col-8 offset-2">
                <div className="form-group">
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
                        placeholder="Singer"
                        value={singer}
                        onChange={handleChange('singer')}
                        type="text" className="form-control"
                    />
                </div>
                <div className="form-group">
                    {/*<label className="text-muted">Password</label>*/}
                    <input
                        placeholder="Cover Photo"
                        value={photo}
                        onChange={fileSelectHandler('photo')} type="file" />
                </div>

                <button onClick={clickSubmit} className="btn btn-primary">Submit</button>
            </form>

        </div>


    );
}
export default Register;


// import React, { useState } from 'react';
// import {Link} from "react-router-dom";
//
// const AddSongs = () => {
//     const { songData, setSongData } = useState({
//         esm: '',
//         singer: '',
//         photo:'',
//     })
//
//     const { esm, singer, photo } = songData;
//
//     // const clickSubmit = async event => {
//     //     event.preventDefault();
//     //
//     //     const newSong = {esm, singer, photo};
//     //
//     //     await fetch('http://localhost:5000/api/songs', {
//     //         method: 'POST',
//     //         body: newSong,
//     //         headers: {
//     //             'Content-Type': 'multipart/form-data'
//     //         }
//     //     })
//     //         .then(res => {
//     //             console.log(res);
//     //             return res.json()
//     //         })
//     //         .then(response => {
//     //             console.log(response);
//     //
//     //         })
//     //         .catch(error => console.log('Error:', error))
//     // }
//     const handleChange = variable => event => {
//         setSongData({...songData, [variable]: event.target.value})
//     }
//
//
//     return(
//         <div>
//             <form action="" className="container col-8 offset-2">
//                 <div className="form-group">
//                     {/*<label className="text-muted">Name</label>*/}
//                     <input
//                         placeholder="Song's Name"
//                         onChange={handleChange('esm')}
//                         type="text"
//                         className="form-control"
//                         value={esm}
//                     />
//                 </div>
//                 <div className="form-group">
//                     {/*<label className="text-muted">Email</label>*/}
//                     <input
//                         placeholder="Singer"
//                         value={singer}
//                         onChange={handleChange('singer')}
//                         type="text" className="form-control"
//                     />
//                 </div>
//                 <div className="form-group">
//                     {/*<label className="text-muted">Password</label>*/}
//                     <input
//                         placeholder="Cover Photo"
//                         value={photo}
//                         onChange={handleChange('photo')}
//                         type="file"
//                         className="form-control"/>
//                 </div>
//                 {/*<button onClick={clickSubmit} className="btn btn-primary">Submit</button>*/}
//             </form>
//
//
//
//         </div>
//     );
// };
// export default AddSongs;