import React, { Component } from 'react';
import Title from '../../components/Title/Titlee';
import { HOST } from '../../services/Api';
import axios from 'axios';
import numeral from 'numeral';


export default class StatusPayment extends Component {
    state = {
        payments: []
    };

    componentDidMount = async () => {
        await axios.get(`${HOST}/transaction/allorder/${JSON.parse(localStorage.getItem('userdata')).user_id}`, {
            headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('userdata')).access_token}` }
        }).then(response => this.setState({
            payments: response.data.data
        }))
    };

    updateStatus = async (status, transaction_id) => {
        await axios.post(`${HOST}/transaction/update`, { status: status, transaction_id: transaction_id }, {
            headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('userdata')).access_token}` }
        });
        this.props.history.push("/semua-koleksi-buku")
    }

    render() {

        return (
            <div >
                <Title name="Payment " title="Status " />
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Transaction_id</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>


                        </tr>
                    </thead>
                    <tbody>

                        {this.state.payments.length > 0 &&
                            this.state.payments.map((payment, key) => (<tr key={payment.id}>
                                <td scope="row">{key + 1}</td>
                                <td scope="row">{payment.id}</td>
                                <td scope="row">{numeral(payment.amount).format(0, 0)}</td>
                                <td scope="row">{payment.status}</td>
                                <td scope="row">
                                    {payment.status === "PENDING" && (<> <button onClick={() => this.updateStatus("SUCCESS", payment.id)}>Confirm</button>
                                        <button onClick={() => this.updateStatus("FAILED", payment.id)}>Cancel</button> </>)}
                                </td>

                            </tr>))}

                    </tbody>
                </table>
            </div>
        )
    }
}
