
import React, { Component } from 'react';
import MemberRESTService from '../RESTService/MemberRESTService';
import { withRouter, Link } from 'react-router-dom';

class UserList extends Component {
    state = {
        searchName: "",
        users: [],
        testUers: [
            {
                "id": 1,
                "First": "Makr",
                "Last": "Otto",
                "Handle": "@mdo"
            },
            {
                "id": 2,
                "First": "Jacob",
                "Last": "Thornton",
                "Handle": "@fat"
            }
        ]
    }
    componentDidMount() {
        MemberRESTService.listAllMembers()
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
                <td><Link className="badge badge-secondary" to={`/person/${item.id}`}>View</Link></td>
            </tr>
        )
    }

    searchUser = (e) => {
        e.preventDefault();
        console.log(this.state.searchName);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <>
                <form onSubmit={this.searchUser}>
                    <div class="form-group">
                    <input type="text" placeholder="Recipient's username" onChange={this.handleChange}
                        aria-label="Recipient's username" name="searchName" aria-describedby="basic-addon2" />
                    {' '}
                    <button>Search</button>
                    </div>
                    
                </form>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                            <th scope="col">Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderUsers()}
                    </tbody>
                </table>
            </>
        )
    }
}

export default withRouter(UserList);