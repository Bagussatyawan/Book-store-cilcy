import React, { Component } from 'react';
import Axios from 'axios';
import { HOST } from '../../services/Api';
import qs from 'querystring';
import Title from '../../../src/components/Title/Title';

export default class AddBook extends Component {
    state = {
        name: "",
        thumbnail: "",
        author: "",
        price: "",
        description: "",
        no_isbn: "",
        weight: "",
        category_id: "",
        disabled: false
    };

    handlerChange = (e) => {
        let formData = new FormData();
        if (e.target.name === 'thumbnail') {
            formData.append('thumbnail', e.target.files[0], e.target.files[0].name)
        }




        this.setState({ [e.target.name]: e.target.name === 'thumbnail' ? formData : e.target.value })
    };
    // METHOD UNTUK CREATE BOOK
    handlerSubmit = async (event) => {
        event.preventDefault();
        this.setState({ disabled: true })
        console.log('STATEYGDIKIRIM', this.state)
        await Axios.post(`${HOST}/product/create`, this.state, {
            headers: { Authorization: `Bearer ${JSON.stringify(localStorage.getItem('usertoken'))}` }
        });
        this.props.history.push("/book-list")
        console.log(this.state)
    };
    render() {
        return (
            <div className="container">
                <Title name="Add New " title="Book" />
                <div className="col-md-6">
                    <form onSubmit={this.handlerSubmit} encType='multipart/form-data'>
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
                            <label htmlFor="thumbnail">Img_Url</label>
                            <input
                                type="file"
                                className="form-control"
                                required
                                onChange={this.handlerChange}
                                name="thumbnail"
                                accept=".jpg, .png"
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

                        <div className="form-group">
                            <label htmlFor="category_id">Category_id</label>
                            <input
                                type="text"
                                className="form-control"
                                required
                                onChange={this.handlerChange}
                                name="category_id"
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
