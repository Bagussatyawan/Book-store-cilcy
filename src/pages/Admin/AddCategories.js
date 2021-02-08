import React, { Component } from 'react';
import Axios from 'axios';
import { HOST } from '../../services/Api';
import qs from 'querystring';
import Title from '../../components/Title/Titlee';

export default class AddCategories extends Component {
    state = {
        name: "",
        disabled: false
    };

    handlerChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    };
    // METHOD UNTUK CREATE CATEGORY
    handlerSubmit = async (event) => {
        event.preventDefault();
        this.setState({ disabled: true })
        await Axios.post(`${HOST}/categories/create`, qs.stringify(this.state), {
            headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('userdata')).access_token}` }
        });
        this.props.history.push("/admin/categories-list")
        console.log(this.state)
    };
    render() {
        return (
            <div className="container">
                <Title name="Add New " title="Category" />
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
                            />
                        </div>

                        <button type="submit" className="btn btn-success" value="Publish" disabled={this.state.disabled}>
                            Publish
                            </button>
                    </form>
                </div>
            </div>
        )
    }
}
