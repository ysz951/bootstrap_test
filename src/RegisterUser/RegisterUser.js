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
        const member = {
            name: userName,
            email: userEmail,
            password: userPassword,
            role: userRole
        }
        MemberRESTService.createMember(member)
            .then(res => {

            })
            .catch(err => {
                
            })
    }

    click = (e) => {
        
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        // console.log(e.target.value);
    }

    render() {
        return (
            <>
                <form onSubmit={this.register} className="container">
                    <div className="form-col align-items-center justify-content-center">
                        <div className="form-group">
                            <label> Name: </label>
                            <input placeholder="Name" type="text" name="userName" className="form-control"
                                onChange={this.handleChange} required/>
                        </div>
                        <div className="form-group">
                            <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">Role</label>
                            <select className="custom-select mr-sm-2" id="inlineFormCustomSelect" name="userRole" 
                                value={this.state.userRole} onChange={this.handleChange} required>
                                <option value="">Choose...</option>
                                <option value="CUSTOMER">Customer</option>
                                <option value="ADMIN">Admin</option>
                                <option value="SUPERUSER">Superuser</option>
                                <option value="EXPERT">Expert</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label> Email: </label>
                            <input placeholder="Email" type="email" name="userEmail" className="form-control"
                                onChange={this.handleChange} required/>
                        </div>
                        <div className="form-group">
                            <label> Password: </label>
                            <input placeholder="Password" type="password" name="userPassword" className="form-control"
                                onChange={this.handleChange} required/>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </>
        )
    }
}

export default withRouter(RegisterUser);