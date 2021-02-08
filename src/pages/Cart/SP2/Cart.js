import React, { Component } from 'react';
import Title from '../../components/Title/Title';
import { ProductConsumer } from '../../../Context/Contex';
import CartColumns from './CartColumn';
import EmptyCart from './EmptyCart';
import CartList from '../CartList';
import CartTotal from './CartTotal';



export default class Cart extends Component {
    render() {
        return (
            <div>
                <ProductConsumer>
                    {
                        value => {
                            const { cart } = value;
                            if (cart.length > 0) {
                                return (
                                    <React.Fragment>
                                        <Title name="your" title="cart" />
                                        <CartColumns />
                                        <CartList value={value} />
                                        <CartTotal value={value} />
                                    </React.Fragment>
                                );
                            } else {
                                return <EmptyCart />;
                            }
                        }
                    }
                </ProductConsumer>
            </div>
        )
    }
}


























// import React from 'react'
// import Title from '../../components/Title/Title'
// import { DataContext } from '../../Context/DataContex';
// import { Button } from '../../components/Button/Button'



// const Cart = () => {
//     const { dataContext, setDataContext } = useContext(DataContext)

//     const totalSummary = dataContext ?
//         dataContext.carts.reduce((a, b) => a + (b.price * b.qty), 0) : 0

//     const handleAjustQty = (type, id) => {
//         const findProduct = dataContext && dataContext.carts.find((val) => val.id === id)
//         const qty = type === '+' ? findProduct.qty + 1 : findProduct.qty - 1
//         findProduct.qty = qty
//         findProduct.stock = findProduct.stock - qty
//         setDataContext({ ...dataContext })
//     }

//     return (
//         <div>
//             <Title name="your " title="cart" />
//             <table width="90%">
//                 <thead>
//                     <tr>
//                         <th>No</th>
//                         <th>Product</th>
//                         <th>Title</th>
//                         <th>Quantity</th>
//                         <th>Price</th>
//                         <th>Subtotal</th>
//                         <th>Remove from Cart</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {dataContext ? dataContext.carts.map((val, key) => {
//                         const subtotal = val.qty * val.price
//                         return (
//                             <tr key={key}>
//                                 <td>{key + 1}</td>
//                                 <td><img src={val.imgUrl} /></td>
//                                 <td>{val.title}</td>
//                                 <td>
//                                     <Button onClick={() => handleAjustQty('-', val.id)}>-</Button>
//                                     <input
//                                         value={val.qty} />
//                                     <Button onClick={() => handleAjustQty('+', val.id)}>+</Button>
//                                 </td>
//                                 <td>{val.price}</td>
//                                 <td>{subtotal}</td>
//                                 <td><Button>Delete</Button></td>
//                             </tr>
//                         )
//                     }) : (
//                             <tr>
//                                 <td colSpan={6}> <h2>Cart Empty</h2></td>
//                             </tr>

//                         )}
//                 </tbody>
//             </table>
//             <div>
//                 <h2>Total :{totalSummary}</h2>
//             </div>
//         </div>
//     )
// }

// export default Cart
