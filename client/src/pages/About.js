import React, { useState, useCallback, useEffect } from 'react';
import Layout from "../components/Layout";

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
