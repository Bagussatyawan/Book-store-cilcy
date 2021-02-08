import React, { Component } from 'react';
import { Col, ListGroup } from 'react-bootstrap';
import Title from '../../components/Title/Titlee';

export default class Cartlist extends Component {
    render() {
        const { cart } = this.props;
        return (
            <div>
                <Title name="your" title="cart" />
                <Col md={3} mt="2">
                    <hr />
                    {cart.length !== 0 && (
                        <ListGroup variant="flush">
                            {cart.map((cartlist) => (
                                <ListGroup.Item>
                                    {cart.name}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    )}
                </Col>
            </div>
        )
    }
}
