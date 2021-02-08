import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../../Context/Contex";
import { ProductWrapper } from '../ProductStyles';
import { Button } from '../../../components/Button/Button';



export default class Product extends Component {

    render() {

        const { id, title, author, img, price, inCart } = this.props.product;

        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <ProductConsumer>
                        {(value) => (
                            <div
                                className="img-container p-5"
                                onClick={() => value.handleDetail(id)}
                            >
                                <Link to="/details">
                                    <img src={img} alt="product" className="card-img-top" />
                                </Link>

                                <Button
                                    className="cart-btn"
                                    disabled={inCart ? true : false}
                                    onClick={() => {
                                        value.addToCart(id);
                                    }}
                                >
                                    {inCart ? (
                                        <p className="text-capitalize mb-0" disabled>
                                            In Cart
                                        </p>
                                    ) : (
                                            <i>add to cart</i>
                                        )}
                                </Button>
                            </div>
                        )}
                    </ProductConsumer>
                    {/* {card footer} */}
                    <div className="card-footer">
                        <h5>{title}</h5>
                        <p>{author}</p>
                        <h5><span>Rp </span>{price}</h5>
                    </div>
                </div>
            </ProductWrapper>
        );
    }
}

















// import { ProductWrapper, Card } from './ProductStyles';
// import { Link } from 'react-router-dom';
// import Title from '../../components/Title/Title';
// import { DataContext } from '../../Context/DataContex';
// import { Button } from '../../components/Button/Button';

// const Product1 = () => {

//     const Products = [
//         {
//             id: 1,
//             title: "Proverb From Around The World",
//             author: "GERD DE LEY",
//             imgUrl: "https://cdn.gramedia.com/uploads/items/24__wauto_h228.jpg",
//             price: 249000,
//             info:
//                 "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
//             stock: 30,
// import React, { useContext, useEffect } from 'react';
//         },
//         {
//             id: 2,
//             title: "Art Of War",
//             author: "Sun Tzu ",
//             imgUrl: "https://cdn.gramedia.com/uploads/items/13_IEsMiti__wauto_h228.jpg",
//             price: 199000,
//             info:
//                 "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
//             stock: 30,
//         },
//         {
//             id: 3,
//             title: "Hippie (Us) Massmarket",
//             author: "Paulo Coelho",
//             imgUrl: "https://cdn.gramedia.com/uploads/items/28_kBAlxcl__wauto_h228.jpg",
//             price: 149000,
//             info:
//                 "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
//             stock: 30,
//         },
//         {
//             id: 4,
//             title: "Leadership In War",
//             author: "Andrew Robert",
//             imgUrl: "https://cdn.gramedia.com/uploads/items/4_qmlywCf__wauto_h228.jpg",
//             price: 369000,
//             info:
//                 "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
//             stock: 30,
//         },
//         {
//             id: 5,
//             title: "Even Weirder!",
//             author: "ANH DO",
//             imgUrl: "https://cdn.gramedia.com/uploads/items/9781338305609__wauto_h228.jpg",
//             price: 105000,
//             info:
//                 "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
//             stock: 30,
//         },
//         {
//             id: 6,
//             title: "Infinity Son",
//             author: "ADAM SILVERA",
//             imgUrl: "https://cdn.gramedia.com/uploads/items/44889980__wauto_h228.jpg",
//             price: 182000,
//             info:
//                 "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
//             stock: 30,
//         },
//         {
//             id: 7,
//             title: "101 Debt",
//             author: "MICHELE CAGAN CPA",
//             imgUrl: "https://cdn.gramedia.com/uploads/items/debt-101-9781507212660_hr__wauto_h228.jpg",
//             price: 257000,
//             info:
//                 "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
//             stock: 30,
//         },
//         {
//             id: 8,
//             title: "Marc Benioff: Trailblazer",
//             author: "Marc Benioff",
//             imgUrl: "https://cdn.gramedia.com/uploads/items/21_B4Tk5xH__wauto_h228.jpg",
//             price: 257000,
//             info:
//                 "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
//             stock: 30,
//         }
//     ];

//     const { dataContext, setDataContext } = useContext(DataContext)

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
//         <div >
//             <Title name="Semua " title="Koleksi" />
//             <ProductWrapper >
//                 {Products.map((val, key) => (

//                     <Card >
//                         <div >

//                             <Link to="/details">
//                                 <img src={val.imgUrl} alt={val.title} />
//                             </Link>
//                         </div>

//                         <div className="card-footer">
//                             <h5>{val.title}</h5>
//                             <p>{val.author}</p>
//                             <h5><span>Rp</span> {val.price}</h5>
//                             <Button
//                                 onClick={() => addToCart(val.id)}
//                             >
//                                 add to cart
//                         </Button>
//                         </div>
//                     </Card>


//                 ))}
//             </ProductWrapper>

//         </div>
//     )
// }

// export default Product1;