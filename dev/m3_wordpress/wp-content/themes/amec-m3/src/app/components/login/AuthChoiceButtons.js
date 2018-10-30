import {NavLink} from "react-router-dom";
import React from "react";

export const AuthChoiceButtons = () => (<div className="p-4">
    <div className="row">
        <div className="col-12 text-center">
            <h3>Welcome to the AMEC M3 questionnaire</h3>
            <p>
                You'll need to register your details so you can fill in the questionnaire.
            <br/>
                If you've already set yourself up, log in below.
            </p>
        </div>
        <div className="col-6 text-center">
            <NavLink to={'/questionnaire/register'}>
            <div className="auth-choice register">
                <div>
                    <i className="fa fa-user-plus"/>
                </div>
                <h4>Register as New User</h4>
            </div>
            </NavLink>
        </div>
        <div className="col-6 text-center">
            <NavLink to={'/questionnaire/login'}>
                <div className="auth-choice login">
                    <div>
                        <i className="far fa-arrow-alt-circle-right"/>
                    </div>
                    <h4>Sign In</h4>
                </div>
            </NavLink>
        </div>
    </div>
</div>);