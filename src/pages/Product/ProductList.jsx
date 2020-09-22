import React, { Component } from 'react';
import Title from '../../components/Title/Title';
import { ProductConsumer } from '../../Context/Contex';
import Product from './Product';

export default class ProductList extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="Semua " title="Koleksi" />
                        <div className="row">
                            <ProductConsumer>
                                {value => {
                                    return value.products.map(product => {
                                        return <Product key={product.id} product={product} />;
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}
