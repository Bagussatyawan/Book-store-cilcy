import React from 'react';
import { Link } from "react-router-dom";
import { ProductWrapper } from '../Product/ProductStyles';
import { Button } from '../../components/Button/Button';
import numeral from 'numeral';



function CardCategories({ book, Addtocart }) {

    return (
        <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
            <div className="card">
                <div className="img-container p-5" >
                    <Link to={"/detail-product/" + book.id}>
                        <img src={`http://localhost:6969/thumbnails/${book.image_url}`} className="card-img-top" />
                    </Link>

                    <Button className="cart-btn" onClick={() => Addtocart(book)} >

                        add to cart
                    </Button>
                </div>

                {/* {card footer} */}
                <div className="card-footer">
                    <h5>{book.name}</h5>
                    <p>{book.author}</p>
                    <h5><span>Rp </span>{numeral(book.price).format(0, 0)}</h5>
                </div>
            </div>
        </ProductWrapper>
    )
}

export default CardCategories

