import React, { Component } from 'react';
import Title from '../../components/Title/Titlee'
import { HOST } from '../../services/Api';
import axios from 'axios';
import CategoryTable from './CategoryTable';


export default class Categories extends Component {
    state = {
        category: []
    };

    componentDidMount = async () => {
        await axios.get(`${HOST}/categories/all`, {
            headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('userdata')).access_token}` }
        }).then(response => this.setState({
            category: response.data.data.rows
        }))
    };
    render() {

        return (
            <div className="py-5">
                <div className="container">
                    <Title name="Category " title="List " />
                    <div className="row">
                        <CategoryTable categories={this.state.category} refresh={this.componentDidMount} />
                    </div>
                </div>
            </div>
        )
    }
}
