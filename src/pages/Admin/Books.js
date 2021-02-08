import React, { Component } from 'react';
import Title from '../../components/Title/Titlee'
import { HOST } from '../../services/Api';
import axios from 'axios';
import CardBook from './CardBook';

export default class Books extends Component {
    state = {
        book: []
    };

    componentDidMount = async () => {
        await axios.get(`${HOST}/product/all`, {
            headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('userdata')).access_token}` }
        }).then(response => this.setState({
            book: response.data.data.rows
        }))
    };

    render() {

        const renderData =
            this.state.book.length > 0 &&
            this.state.book.map((book) => <CardBook book={book} key={book.id} refresh={this.componentDidMount} />);

        return (
            <div className="py-5">
                <div className="container">
                    <Title name="All Admin " title="List Book" />
                    <div className="row">
                        {renderData}
                    </div>
                </div>
            </div>
        )
    }
}
