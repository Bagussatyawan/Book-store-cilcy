import React from 'react';
import { Link } from "react-router-dom";
import { ProductWrapper } from '../Product/ProductStyles';
import Axios from 'axios';
import { HOST } from '../../services/Api';
import qs from 'querystring';

function CardBook({ book, refresh }) {

    async function deleteBook() {
        await Axios.delete(`${HOST}/product/delete/${book.id}`, qs.stringify(this.state), {
            headers: { Authorization: `Bearer ${JSON.stringify(localStorage.getItem('usertoken'))}` }
        });
        return refresh()
    };

    return (
        <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
            <div className="card">
                <div className="img-container p-5" >
                    <Link to="/details">
                        <img src={book.image_url} alt="product" className="card-img-top" />
                    </Link>
                </div>

                {/* {card footer} */}
                <div className="card-footer">
                    <h5>{book.name}</h5>
                    <p>{book.author}</p>
                    <h5><span>Rp </span>{book.price}</h5>
                    <div>

                        <Link to={"/edit/" + book.id} className="badge badge-success" >
                            Update
                        </Link>
                        <i className="badge badge-danger mr-2" onClick={deleteBook} style={{
                            cursor: "pointer",
                            marginLeft: 10,
                        }}>Delete</i>

                        <br />
                    </div>
                </div>
            </div>
        </ProductWrapper>
    )
}

export default CardBook

