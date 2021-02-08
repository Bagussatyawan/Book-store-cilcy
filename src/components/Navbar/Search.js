import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { HOST } from '../../services/Api';
import swal from 'sweetalert';
import { ProductWrapper } from '../../pages/Product/ProductStyles';
import { Button } from '../Button/Button';

export default class Search extends Component {

    constructor(props) {
        super(props)

        this.state = {
            query: '',
            results: {},
            loading: false,
            message: ''
        }
    };

    fetchSearchResults = async (query) => {
        await axios.get(`${HOST}/product/all?name=${query}`, {
            headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('userdata')).access_token}` }
        }).then(response => {
            const resultNotFound = !response.data.data.rows.length
                ? swal("There are no more search result", "Please try a new search")
                : '';

            this.setState({
                results: response.data.data.rows,
                message: resultNotFound,
                loading: true
            })
        })
    };
    handleOnInputChange = (event) => {
        const query = event.target.value;
        // this.setState({ query, loading: true, message: '' }, () => {
        //     this.fetchSearchResults(query);
        // });
    };

    renderSearchResults = () => {
        const { results } = this.state;

        if (Object.keys(results).length && results.length) {
            return (
                <div>
                    {results.map(result => {
                        return (

                            <div className="py-5">
                                <div className="container">
                                    <div className="row">
                                        <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                                            <div className="card">
                                                <div className="img-container p-5" >
                                                    <Link to={"/detail-product/" + result.id}>
                                                        <img src={`http://localhost:6969/thumbnails/${result.image_url}`} className="card-img-top" />
                                                    </Link>

                                                    <Button className="cart-btn"  >
                                                        {/* onClick={() => Addtocart(book)} */}
                                                            add to cart
                                                        </Button>
                                                </div>

                                                {/* {card footer} */}
                                                <div className="card-footer">
                                                    <h5>{result.name}</h5>
                                                    <p>{result.author}</p>
                                                    <h5><span>Rp </span>{result.price}</h5>
                                                </div>
                                            </div>
                                        </ProductWrapper>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )
        }
    }
    render() {
        return (
            <div>
                <form className="form-inline mr-sm-2">
                    <input
                        className="form-control mr-sm-2"
                        type="text"
                        placeholder="Cari Produk, Judul Buku, Penulis"
                        aria-label="Search"
                        value={this.state.query}
                        onChange={this.handleOnInputChange} />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                        Search</button>
                </form>
                {/* {this.renderSearchResults()} */}
            </div>
        )
    }
}
