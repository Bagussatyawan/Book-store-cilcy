import React, { Component } from 'react';
import Axios from 'axios';
import { HOST } from '../../services/Api';
import Title from '../../components/Title/Titlee';

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
        this.setState({
            [e.target.name]:
                e.target.name === 'thumbnail' ? e.target.files[0] : e.target.value,
        })
    }
    // METHOD UNTUK CREATE BOOK
    handlerSubmit = async (event) => {
        event.preventDefault();
        this.setState({ disabled: true })
        const formData = new FormData()
        formData.append('name', this.state.name)
        formData.append('author', this.state.author)
        formData.append('price', this.state.price)
        formData.append('thumbnail', this.state.thumbnail)
        formData.append('description', this.state.description)
        formData.append('no_isbn', this.state.no_isbn)
        formData.append('weight', this.state.weight)
        formData.append('category_id', this.state.category_id)
        formData.append('user_id', this.state.user_id)

        await Axios.post(`${HOST}/product/create`, formData, {
            headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('userdata')).access_token}` }
        });
        this.props.history.push("/admin/book-list-admin")
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
