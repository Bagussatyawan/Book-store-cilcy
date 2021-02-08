import React, { Component } from 'react';
import Axios from 'axios';
import qs from 'querystring';
import { HOST } from '../../services/Api';
import Title from '../../components/Title/Titlee';

export default class UpdateCategories extends Component {
    state = {
        name: "",

        disabled: false
    };

    handlerChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    };

    // METHOD FIND BY ID
    componentDidMount = async () => {
        const id = this.props.match.params.id;
        console.log(this.props.match.params)
        const response = await Axios.get(`${HOST}/categories/get/${id}`, {
            headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('userdata')).access_token}` }
        });
        this.setState({
            id: id,
            name: response.data.data.name
        });
        console.log(response)
    };

    // METHOD UPDATE
    handlerSubmit = async (event) => {
        const id = this.props.match.params.id;
        event.preventDefault();
        this.setState({ disabled: true })
        await Axios.patch(`${HOST}/categories/update/${id}`, qs.stringify(this.state), {
            headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('userdata')).access_token}` }
        });
        this.props.history.push("/admin/categories-list")
        console.log(this.state)
    };

    render() {
        console.log(this.state)
        return (
            <div className="container">
                <Title name="Update" title="Category" />
                <div className="col-md-6">
                    <form onSubmit={this.handlerSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name of Category</label>
                            <input
                                type="text"
                                className="form-control"
                                required
                                onChange={this.handlerChange}
                                name="name"
                                value={this.state.name}
                            />
                        </div>

                        <button type="submit" className="btn btn-success" value="Publish" disabled={this.state.disabled}>
                            Update
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

