import React, { Component } from 'react'
// import Cartlist from './Cartlist';
// import Axios from 'axios';
// import { HOST } from '../../services/Api';


export default class Cart extends Component {
    // state = {
    //     cart: []
    // };

    // // METHOD FIND BY ID
    // componentDidMount = async () => {
    //     const response = await Axios.get(`${HOST}/transaction/all/${JSON.parse(localStorage.getItem('userdata')).user_id}`, {
    //         headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('userdata')).access_token}` }
    //     }).then((response) => {
    //         const cart = response.data;
    //         this.setState({ cart })
    //     }).catch((error) => {
    //         console.log("Can not get order", error)
    //     });
    // };


    render() {
        const { cart } = this.state;
        return (
            <div>
                {/* <Cartlist cart={cart} /> */}
            </div>
        )
    }
}

