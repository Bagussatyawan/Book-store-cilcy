import React, { Component } from 'react';
import Axios from 'axios';
import qs from 'querystring';
import { HOST } from '../../services/Api';

export default class UpdateBook extends Component {
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

    // METHOD FIND BY ID
    componentDidMount = async () => {
        const id = this.props.match.params.id; // ERROR DISINI
        console.log(this.props.match.params)
        const response = await Axios.get(`${HOST}/product/get/${id}`);
        this.setState({
            id: id,
            name: response.data.name,
            description: response.data.description,
            author: response.data.author,
            image_url: response.data.image_url,
            price: response.data.price,
            no_isbn: response.data.no_isbn,
            weight: response.data.weight
        });
        console.log(response)
    };

    // METHOD UPDATE
    handlerSubmit = async (event) => {
        const id = this.props.match.params.id;
        event.preventDefault();
        this.setState({ disabled: true })
        await Axios.patch(`${HOST}/product/update/${id}`, qs.stringify(this.state), {
            headers: { Authorization: `Bearer ${JSON.stringify(localStorage.getItem('usertoken'))}` }
        });
        this.props.history.push("/book-list")
        console.log(this.state)
    };

    render() {
        console.log(this.state)
        return (
            <div className="container">
                <div className="col-md-6">
                    <h2>Update Book</h2>
                    <form onSubmit={this.handlerSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Book Title</label>
                            <input
                                type="text"
                                className="form-control"
                                required
                                onChange={this.handlerChange}
                                name="name"
                                value={this.state.name}
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
                                value={this.state.description}
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
                                value={this.state.author}
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
                                value={this.state.image_url}
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
                                value={this.state.no_isbn}
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
                                value={this.state.price}
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
                                value={this.state.weight}
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
