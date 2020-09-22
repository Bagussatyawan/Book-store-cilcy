import React, { Component } from 'react';
import { ProductConsumer } from '../../Context/Contex';
import { Button } from '../../components/Button/Button';
import { Link } from "react-router-dom";

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { id, title, author, img, price, info, inCart } = value.detailProduct;
                    return (
                        <div className="container py-5">
                            {/* title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center my-5">
                                    <h1>
                                        {title}
                                    </h1>
                                </div>
                            </div>
                            {/* content */}
                            <div className="row">
                                {/* image product */}
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} alt="product" />
                                </div>
                                {/* info product */}
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <h4 className="text-uppercase mt-3 mb-2">
                                        Author : <span className="text-uppercase">{author}</span>
                                    </h4>
                                    <h4>
                                        <strong >
                                            Price: <span>Rp   </span> {price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        Synopsis:
                                    </p>
                                    <p>
                                        {info}
                                    </p>
                                    {/* Button */}
                                    <div>
                                        <Link to="/semua koleksi buku">
                                            <Button>
                                                back to product
                                            </Button>
                                        </Link>
                                        <Button
                                            disabled={inCart ? true : false}
                                            onClick={() => {
                                                value.addToCart(id);
                                            }}>
                                            {inCart ? "inCart" : "add to cart"}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>

        )
    }
}









































// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { Button } from '../../components/Button/Button';
// import { DataContext } from '../../Context/DataContex';


// const Details = () => {

//     const { dataContext, setDataContext } = useContext(DataContext)
//     console.log(dataContext)
//     const addToCart = id => {
//         let carts = dataContext ? dataContext.carts : []
//         const index = carts.findIndex((val) => val.id === id)
//         if (index >= 0) {
//             carts[index].qty = carts[index].qty + 1
//         } else {
//             const findProduct = Products.find((val) => val.id === id)
//             carts.push({ ...findProduct, qty: 1 })
//         }
//         setDataContext({
//             ...dataContext,
//             carts
//         })
//     }

//     return (
//         <div>
//             <img src={val.imgUrl} alt="product" />
//             <h4>
//                 <strong>
//                     price: <span>Rp {val.price} </span>
//                 </strong>
//             </h4>
//             <p >
//                 Synopsis: {val.info}
//             </p>
//             <Link to="/semua koleksi buku">
//                 <Button> back to products  </Button>
//             </Link>
//             <Button onClick={() => addToCart(val.id)}> add to cart</Button>
//         </div >
//     )
// }

// export default Details


