
import React, { Component } from 'react';
import MemberRESTService from '../RESTService/MemberRESTService';
import { withRouter } from 'react-router-dom';

class UserPage extends Component {
    state = {
    }
    componentDidMount() {

        // MemberRESTService.listAllMembers()
        //     .then(res => {
        //         // this.setState({users: res.data})
        //     })
        //     .catch(err => {

        //     })
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

    render() {
        const { id } = this.props.match.params;

        return (
            <>
                <button onClick={this.goBack}>Back </button>
                <h1>User Id: {id}</h1>

            </>
        )
    }
}

export default withRouter(UserPage);