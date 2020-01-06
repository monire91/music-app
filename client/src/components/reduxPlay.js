// import React from 'react';
// import { useSelector, useDispatch } from "react-redux";
// import { increment  } from "../actions";
// import Layout from "./Layout";
//
// const play = () => {
//     const counter = useSelector(state => state.counter)
//     const isLogged = useSelector(state => state.isLogged)
//     const dispatach = useDispatch();
//
//     return(
//         <div>
//             <h1>Counter {counter}</h1>
//             <button onClick={() => dispatach(increment())}>+</button>
//             <button>-</button>
//
//             { isLogged ? <h3>secrets</h3> : <h3>login to see</h3>}
//         </div>
//
//
//     );
// }

import React from 'react';
import { increment, decrement, signed } from "../actions";
import {useDispatch, useSelector} from "react-redux";




const ReduxPlay = () => {

    const counter = useSelector(state => state.counter)
    const isLogged = useSelector(state => state.isLogged)
    const dispatach = useDispatch();

    return (

            <div>
                <h1>Counter {counter}</h1>
                <button onClick={() => dispatach(increment())}>+</button>
                <button onClick={() => dispatach(decrement())}>-</button>

                <button onClick={() => dispatach(signed())}>sign in</button>

                { isLogged ? <h3>secrets</h3> : <h3>login to see</h3>}
            </div>

    );
}

export default ReduxPlay;
