import React from 'react';
import { Link } from "react-router-dom";
import { ProductWrapper } from '../Product/ProductStyles';
import { Button } from '../../components/Button/Button';


function CardBooks({ book }) {
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
                </div>
            </div>
        </ProductWrapper>
    )
}

export default CardBooks

