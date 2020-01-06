import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Projects from "./pages/Projects";
import SignUp from "./pages/user/SignUp";
import SignIn from "./pages/user/SignIn";
import Navbar from "./components/Navbar";



const App = () => {
    return (
        <Router>
            <Navbar/>
            <Switch>

                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/work' component={Work} />
                <Route exact path='/projects' component={Projects} />

                <Route exact path='/signup' component={SignUp} />
                <Route exact path='/signin' component={SignIn} />

            </Switch>
        </Router>
    );
}

export default App;
