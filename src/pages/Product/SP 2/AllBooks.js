import React, { Component } from 'react';
import Title from '../../../components/Title/Titlee';
import { HOST } from '../../../services/Api';
import axios from 'axios';
import CardBooks from '../CardBooks';
import swal from 'sweetalert';

export default class AllBooks extends Component {
    state = {
        book: [],
    };

    componentDidMount = async () => {
        await axios.get(`${HOST}/product/all`, {
            headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('userdata')).access_token}` }
        }).then(response => this.setState({
            book: response.data.data.rows
        }))
    };

    Addtocart = async (value) => {
        await axios.post(`${HOST}/transaction/addtocart`,
            { ...value, id_user: JSON.parse(localStorage.getItem('userdata')).user_id },
            {
                headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('userdata')).access_token}` }
            }).then((response) => {
                swal("Success!", "Your product success add to cart!", "success", response);
            })
    }

    render() {

        const renderData =
            this.state.book.length > 0 &&
            this.state.book.map((book) => <CardBooks book={book} key={book.id} Addtocart={this.Addtocart} />);

        return (
            <div className="py-5">
                <div className="container">
                    <Title name="All " title="List Book" />
                    <div className="row">
                        {renderData}
                    </div>
                </div>
            </div>
        )
    }
}
