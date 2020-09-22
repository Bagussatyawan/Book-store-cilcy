import React, { Component } from 'react';
import Axios from 'axios';
import { HOST } from '../../services/Api';
import qs from 'querystring';

export default class AddBook extends Component {
    state = {
        name: "",
        image_url: "",
        author: "",
        price: "",
        description: "",
        no_isbn: "",
        weight: "",
        disabled: false
    };

    handlerChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    };
    // METHOD UNTUK CREATE BOOK
    handlerSubmit = async (event) => {
        event.preventDefault();
        this.setState({ disabled: true })
        await Axios.post(`${HOST}/product/create`, qs.stringify(this.state), {
            headers: { Authorization: `Bearer ${JSON.stringify(localStorage.getItem('usertoken'))}` }
        });
        this.props.history.push("/book-list")
        console.log(this.state)
    };
    render() {
        return (
            <div className="container">
                <div className="col-md-6">
                    <h2>Add Book</h2>
                    <form onSubmit={this.handlerSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Book Title</label>
                            <input
                                type="text"
                                className="form-control"
                                required
                                onChange={this.handlerChange}
                                name="name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input
                                type="text"
                                className="form-control"
                                required
                                onChange={this.handlerChange}
                                name="description"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="author">Author</label>
                            <input
                                type="text"
                                className="form-control"
                                required
                                onChange={this.handlerChange}
                                name="author"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="image_url">Img_Url</label>
                            <input
                                type="text"
                                className="form-control"
                                required
                                onChange={this.handlerChange}
                                name="image_url"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="no_isbn">No_Isbn</label>
                            <input
                                type="text"
                                className="form-control"
                                required
                                onChange={this.handlerChange}
                                name="no_isbn"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="price">Price</label>
                            <input
                                type="text"
                                className="form-control"
                                required
                                onChange={this.handlerChange}
                                name="price"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="weight">Weight</label>
                            <input
                                type="text"
                                className="form-control"
                                required
                                onChange={this.handlerChange}
                                name="weight"
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
