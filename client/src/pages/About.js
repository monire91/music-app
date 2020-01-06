import React, { useState, useCallback, useEffect } from 'react';
import Layout from "../components/Layout";

import ShowSongs from '../components/songs/ShowSongs'
import AddSongs from "../components/songs/AddSongs";
import FileUpload from "../components/songs/Images";

import UploadSong from "../components/songs/UploadSong";
import DisplaySongs from "../components/songs/DisplaySongs";
import ReduxPlay from "../components/reduxPlay";
import SignIn from "../components/SignIn";



const About = () => {


    return (
        <div>
            <Layout title="About Page" description="e-commerce najdi" className="container">
                ...
                <ReduxPlay/>
                <SignIn/>
            </Layout>
        </div>
    );
}

export default About;
