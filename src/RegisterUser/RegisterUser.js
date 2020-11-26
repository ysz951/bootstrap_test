import React, { Component } from 'react';
import axios from 'axios';
import MemberRESTService from '../RESTService/MemberRESTService';
import { withRouter } from 'react-router-dom';

class RegisterUser extends Component {

    state = {
        userRole: "",
        userEmail:"",
        userPassword:"",
        userName:""
    }

    register = (e) => {
        e.preventDefault();
    }

    click = (e) => {

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <>
                <form onSubmit={this.register} class="container">
                    <div class="form-col align-items-center justify-content-center">
                        <div className="form-group">
                            <label> Name: </label>
                            <input placeholder="Name" type="text" name="userName" className="form-control"
                                onKeyUp={this.handleChange} required/>
                        </div>
                        <div class="form-group">
                            <label class="mr-sm-2" for="inlineFormCustomSelect">Role</label>
                            <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" name="userRole" 
                                onChange={this.handleChange} required>
                                <option selected value="">Choose...</option>
                                <option value="CUSTOMER">Customer</option>
                                <option value="ADMIN">Admin</option>
                                <option value="SUPERUSER">Superuser</option>
                                <option value="EXPERT">Expert</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label> Email: </label>
                            <input placeholder="Email" type="email" name="userEmail" className="form-control"
                                onKeyUp={this.handleChange} required/>
                        </div>
                        <div className="form-group">
                            <label> Password: </label>
                            <input placeholder="Password" type="password" name="userPassword" className="form-control"
                                onKeyUp={this.handleChange} required/>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </>
        )
    }
}

export default withRouter(RegisterUser);