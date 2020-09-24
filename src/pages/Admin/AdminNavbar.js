import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Title from '../../components/Title/Title';

export default class AdminNavbar extends Component {


    render() {
        return (
            <div>
                <Title name="Welcome to " title="Admin Page" />
                <nav className="navbar navbar-expand navbar-light bg-light ">

                    <div className="navbar-nav mr-auto">

                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/book-list-admin" className="nav-link">
                                    BOOK LIST
                            </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/admin" className="nav-link">
                                    ADD BOOK
                            </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/categories-list" className="nav-link">
                                    CATEGORY LIST
                            </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/add-categories" className="nav-link">
                                    ADD CATEGORY
                            </Link>
                            </li>

                        </ul>

                    </div>
                </nav>
            </div>

        )
    }
}



