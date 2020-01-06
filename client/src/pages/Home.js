import React from 'react';
import Layout from "../components/Layout";
import ReduxPlay from "../components/reduxPlay";

import SignIn from "../components/SignIn";
import DisplaySongs from "../components/songs/DisplaySongs";
import UploadSong from "../components/songs/UploadSong";




const Home = () => {
        return (
        <Layout title="Home Page" description="wiki songs" className="container">
            <div className="row">
                <div className="col-5 offset-1">
                    {/*<ShowSongs/>*/}
                    <DisplaySongs/>
                </div>
                <div className="col-5">
                    <UploadSong/>
                    {/*<AddSongs/>*/}
                    {/*<FileUpload/>*/}
                </div>
            </div>


        </Layout>
    );
}

export default Home;
