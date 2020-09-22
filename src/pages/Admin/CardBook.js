import React from 'react';
import { Link } from "react-router-dom";
import { ProductWrapper } from '../Product/ProductStyles';
import { Button } from '../../components/Button/Button';
import Axios from 'axios';
import { HOST } from '../../services/Api';
import qs from 'querystring';

function CardBook({ book }) {

    // async function deleteBook() {
    //     await Axios.delete(`${HOST}/delete/${book.id}`, qs.stringify(this.state), {
    //         headers: { Authorization: `Bearer ${JSON.stringify(localStorage.getItem('usertoken'))}` }
    //     });
    //     return refresh()
    // };

    return (
        <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
            <div className="card">
                <div className="img-container p-5" >
                    <Link to="/details">
                        <img src={book.image_url} alt="product" className="card-img-top" />
                    </Link>

                    <Button className="cart-btn">
                        add to cart
                    </Button>
                </div>

                {/* {card footer} */}
                <div className="card-footer">
                    <h5>{book.name}</h5>
                    <p>{book.author}</p>
                    <h5><span>Rp </span>{book.price}</h5>
                    <div>
                        <Link to={"/edit/" + book.id} >
                            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                        </Link>
                        <i className="fa fa-trash" aria-hidden="true"
                            // onClick={deleteBook}
                            style={{
                                cursor: "pointer",
                                marginLeft: 10,
                                color: "red",
                            }} > </i>
                        <br />
                    </div>
                </div>
            </div>
        </ProductWrapper>
    )
}

export default CardBook

