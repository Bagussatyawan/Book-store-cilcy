import React, { useContext } from 'react';
import { DataContext } from '../../Context/DataContext';
import { Button } from '../../components/Button/Button';
import { HOST } from '../../services/Api';
import axios from 'axios';
import swal from 'sweetalert';
import Title from '../../components/Title/Titlee';
import numeral from 'numeral';


const Cart = (props) => {
    const { dataContext, setDataContext } = useContext(DataContext)

    const totalSummary = dataContext
        ? dataContext.carts.reduce((a, b) => a + (b.price * b.qty), 0)
        : 0

    const handleChangeQty = (e, id) => {
        const findProduct = dataContext && dataContext.carts.find((val) => val.id === id)
        findProduct.qty = e.target.value
        setDataContext({ ...dataContext })
    }

    const handleAjustQty = (type, id) => {
        const findProduct = dataContext && dataContext.carts.find((val) => val.id === id)
        const qty = type === '+' ? findProduct.qty + 1 : findProduct.qty - 1
        findProduct.qty = qty
        setDataContext({ ...dataContext })
    }

    const handleCheckOut = async () => {
        await axios.post(`${HOST}/transaction/checkout`,
            { carts: dataContext.carts, id_user: JSON.parse(localStorage.getItem('userdata')).user_id },
            {
                headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('userdata')).access_token}` }
            }).then((response) => {
                swal("Success!", "Thank you!", "success", response);
                setDataContext({ ...dataContext, carts: [] })
                props.history.push("/status-payment")
            })

    }

    console.log(dataContext);

    return (
        <div>
            <Title name="Your " title="Cart" />
            {!dataContext ? (
                <h1>your cart is currently empty</h1>
            ) : (
                    <table width="80%">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Product Name</th>
                                <th>Qty</th>
                                <th>Price</th>
                                <th>Subtotal</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataContext && dataContext.carts.map((val, key) => {
                                const subtotal = val.qty * val.price
                                return (
                                    <tr key={key}>
                                        <td>{key + 1}</td>
                                        <td>{val.name}</td>
                                        <td>
                                            <button onClick={() => handleAjustQty('-', val.id)}>-</button>
                                            <input
                                                value={val.qty}
                                                onChange={(e) => handleChangeQty(e, val.id)}
                                            />
                                            <button onClick={() => handleAjustQty('+', val.id)}>+</button>
                                        </td>
                                        <td>{numeral(val.price).format(0, 0)}</td>
                                        <td>{numeral(subtotal).format(0, 0)}</td>
                                        <td><Button style={{ cursor: "pointer" }}>Delete</Button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                )}

            <h2>Total : Rp {numeral(totalSummary).format(0, 0)}</h2>
            <Button onClick={() => handleCheckOut()} style={{ cursor: "pointer" }}>Checkout</Button>

        </div>
    )
}

export default Cart