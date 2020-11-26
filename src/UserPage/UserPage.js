
import React, { Component } from 'react';
import MemberRESTService from '../RESTService/MemberRESTService';
import { withRouter } from 'react-router-dom';

class UserPage extends Component {
    state = {
        role: "",
        activate: false,
        userName: ""
    }
    componentDidMount() {
        const { id } = this.props.match.params;
        this.setState({
            role: "CUSTOMER",
            userName: "User"
        })
        MemberRESTService.lookupMemberById(id)
            .then(res => {
                // this.setState({users: res.data})
            })
            .catch(err => {

            })
    }

    renderUsers() {
        return this.state.testUers.map((item, i) =>
            <tr key={i}>
                <th scope="row">{item.id}</th>
                <td>{item.First}</td>
                <td>{item.Last}</td>
                <td>{item.Handle}</td>
            </tr>
        )
    }

    goBack = () => {
        // console.log(this.props.match.params);
        this.props.history.push("/person");
    }

    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { id } = this.props.match.params;

        return (
            <>
                <button onClick={this.goBack} className="btn btn-outline-info btn-sm">Back </button>
                <h1>User Id: {id}</h1>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Activate</th>
                            <th scope="col">Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <th scope="row">1</th>
                            <td>
                                <input placeholder="Name" type="text" name="userName" className="form-control"
                                    value={this.state.userName} onChange={this.handleChange} required/>
                            </td>
                            <td>
                                <select className="custom-select mr-1" id="activateSelect" name="activate" value={this.state.activate}
                                    onChange={this.handleChange} required>
                                    <option value={false}>False</option>
                                    <option value={true}>True</option>
                                </select>
                            </td>
                            <td>
                                <select className="custom-select mr-1" id="roleSelect" name="role" value={this.state.role}
                                    onChange={this.handleChange} required>
                                    <option value="CUSTOMER">Customer</option>
                                    <option value="ADMIN">Admin</option>
                                    <option value="SUPERUSER">Superuser</option>
                                    <option value="EXPERT">Expert</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }
}

export default withRouter(UserPage);