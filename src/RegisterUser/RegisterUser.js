import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import service from './service/service';
import { withRouter } from 'react-router-dom';


class RegisterUser extends Component {

    render() {
        return (
            <>
                <h1>Hello</h1>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown button
          </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <button className="dropdown-item" onClick={(e) => this.click(e)} >Action</button>
                        <button className="dropdown-item">Another action</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item active" aria-current="page">List of Students</li>
                            </ol>
                        </nav>
                    </div>

                </div>
                <form onSubmit={(e) => this.submit(e)} class="container">
                    <div class="form-col align-items-center justify-content-center">
                        <div class="form-group">
                            <label class="mr-sm-2" for="inlineFormCustomSelect">Preference</label>
                            <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" name="selecList" onChange={this.handleChange}>
                                <option selected>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label> Phone: </label>
                            <input placeholder="Phone Number" name="phoneNumber" className="form-control"
                                onKeyUp={this.handleChange} />
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