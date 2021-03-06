import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './app/reducers'
import App from './app/App'
import "./scss/main.scss"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ScrollToTop from "./app/components/ScrollToTop";
import DropDown from "bootstrap/js/dist/dropdown"
import {
    fetchQuestionnaireContent,
} from "./app/actions";
import LoginBasePage from "./app/components/login/LoginBasePage";

let initialState = {responses: {}, scores:[], questionnaireContent: { loaded: false}};

const paths = {
    'responses': { name: 'm3_responses' },
};

/*
* TODO:
*
*
*
*
* */

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
        thunkMiddleware
    )
);

if( !(initialState.questionnaireContent && initialState.questionnaireContent.loaded) ){

    store.dispatch(fetchQuestionnaireContent());

}

let img = new Image();
img.src = '/wp-content/themes/amec-m3/images/mountain_bg.png';



let appEl = document.getElementById('app');
if(appEl){

    render(
        <Provider store={store}>
            <Router>
                <App/>
            </Router>
        </Provider>,
        appEl
    );

}

let appLogin = document.getElementById('app-register');
if( appLogin ){

    render(
        <Provider store={store}>
            <Router>
                <Route path="/m3" render={(props) => (
                    <ScrollToTop>
                        <LoginBasePage {...props} />
                    </ScrollToTop>
                )} />
            </Router>
        </Provider>,
        appLogin
    );

}






