import React, {useState} from 'react';
import Axios from "axios";

const Upload = () =>{

    const [name, setName] = useState("");
    const [file, setFile] = useState({});
    const [photo, setPhoto] = useState({});
    const [success, setSuccess] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        const data = new FormData();

        data.append("name", name);
        data.append("songURL", file);
        data.append("imageURL", photo);

        Axios.post("http://localhost:5000/api/addSong", data, {
            headers: { "Content-Type": "multipart/form-data" },
        }).then(res => {
            console.log(res.data);
            console.log('yes')
            setSuccess(true)
        });
    };

    const handleSelectedFile = e => {
        setFile(e.target.files[0]);
    };
    const handleSelectedPhoto = e => {
        setPhoto(e.target.files[0]);
    };

    return (
        <div>

                {success ? <div className="alert alert-success">'Song was uploaded successfully'</div> : ''}

            <form encType="multipart/form-data" onSubmit={handleSubmit}>
                {/*<label htmlFor="name">Name: </label>*/}
                <div className="form-group">
                    <input
                        className="btn-block"
                        placeholder="Name"
                        type="text"
                        name="name"
                        onChange={e => setName(e.target.value)}
                        value={name}
                    />
                </div>

                {/*<label htmlFor="file">File: </label>*/}
                <div className="custom-file was-validated mb-3">
                    <label className="custom-file-label" htmlFor="validatedCustomFile">Music file</label>
                    <input
                        placeholder="Music file"
                        type="file"
                        name="file"
                        onChange={handleSelectedFile}
                        className="custom-file-input"
                        id="validatedCustomFile"
                        required
                    />
                    <div className="invalid-feedback">Pick an audio or mp3 file no bigger than 15mb</div>
                </div>

                <div className="custom-file was-validated mb-3">
                    <label className="custom-file-label" htmlFor="validatedCustomFile">Cover Photo</label>
                    <input
                        placeholder="Cover Photo"
                        type="file"
                        name="photo"
                        onChange={handleSelectedPhoto}
                        className="custom-file-input"
                        id="validatedCustomFile"
                        required

                    />
                    <div className="invalid-feedback">Pick an image which is jpeg or png and not bigger than 5mb</div>
                </div>

                {/*<div className="custom-file">*/}
                {/*    <label className="custom-file-label" htmlFor="validatedCustomFile">{photo}</label>*/}
                {/*    <input*/}
                {/*        onChange={handleSelectedPhoto}*/}
                {/*        type="file"*/}
                {/*        className="custom-file-input"*/}
                {/*        id="validatedCustomFile"*/}
                {/*        required*/}
                {/*    />*/}
                {/*</div>*/}

                <button
                    className="btn btn-primary btn-block"
                    type="submit"
                >Submit</button>
            </form>
        </div>
    );
};

export default Upload;