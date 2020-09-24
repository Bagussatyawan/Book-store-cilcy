import React, { Component } from 'react';
import Title from '../../../src/components/Title/Title'
import { HOST } from '../../services/Api';
import axios from 'axios';
import CategoryTable from './CategoryTable'

export default class Categories extends Component {
    state = {
        category: []
    };

    componentDidMount = async () => {
        await axios.get(`${HOST}/categories/all`)
            .then(response => this.setState({
                category: response.data.data.rows
            }))
    };
    render() {

        const renderData =
            this.state.category.length > 0 &&
            this.state.category.map((category) => <CategoryTable category={category} key={category.id} />);

        return (
            <div className="py-5">
                <div className="container">
                    <Title name="Category " title="List " />
                    <div className="row">
                        {renderData}
                    </div>
                </div>
            </div>
        )
    }
}
