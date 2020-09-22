import React, { Component } from 'react';
import Title from '../../../src/components/Title/Title'
import { HOST } from '../../services/Api';
import axios from 'axios';
import CardBook from './CardBook';

export default class Books extends Component {
    state = {
        book: []
    };

    componentDidMount = async () => {
        await axios.get(`${HOST}/product/all`)
            .then(response => this.setState({
                book: response.data.data.rows
            }))
    };
    render() {

        const renderData =
            this.state.book.length > 0 &&
            this.state.book.map((book) => <CardBook book={book} key={book.id} />);

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
