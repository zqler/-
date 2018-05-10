import React from "react";
import ReactDOM from "react-dom";
import Routers from "../router/router.jsx";
import {configureStore} from "../redux/store"
import { Provider} from 'react-redux'
import "babel-polyfill";
const store = configureStore;
ReactDOM.render( 
    <Provider store = {store}>
     <Routers />
    </Provider>, 
    document.getElementById("container")
);