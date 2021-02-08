import React, { useContext } from 'react';
import { DataContext } from '../../Context/DataContext';
import { Link, withRouter } from 'react-router-dom';
import SearchBar from '../Navbar/SearchBar'



const Navbar = (props) => {

    const { dataContext } = useContext(DataContext)

    const logOut = (e) => {
        e.preventDefault()
        localStorage.removeItem("userdata")
        const { history } = props;
        history.push('/login')
    };

    const loginRegLink = (
        <ul className="nav navbar-nav navbar-right">
            <li className="nav-item">
                <Link to='/login' className="nav-link">
                    <span className="glyphicon glyphicon-log-in"></span> Login
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/register' className="nav-link">
                    <span className="glyphicon glyphicon-user"></span> Register
                </Link>
            </li>
        </ul>
    );

    const userLink = (
        <ul className="ul navbar-nav">
            <li className="nav-item">
                <Link to="/login" onClick={(e) => logOut(e)} className="nav-item" className="nav-link">
                    Logout
                </Link>
            </li>
        </ul>
    );

    return (
        <div>
            <nav className="navbar navbar-expand navbar-light bg-light">
                <a href="/semua-koleksi-buku" className="navbar-brand" style={{ color: "tomato" }}> CilcyPlus.com </a>
                <div className="navbar-nav ml-auto" id="navbar1">
                    <ul className="nav navbar-nav ">
                        <li className="nav-item">
                            <SearchBar />
                        </li>
                        <li className="nav-item">
                            <Link to="/cart" className="nav-link">
                                <i className="fas fa-cart-plus">
                                    <span className="span-cart">{dataContext.carts.length}</span>
                                </i>
                            </Link>
                        </li>
                    </ul>

                </div>
                {localStorage.userdata ? userLink : loginRegLink}
            </nav>
            <nav className="navbar navbar-expand navbar-light bg-light">
                <ul className="navbar-nav">
                    <li className="nav-item"><Link className="nav-link" to="/semua-koleksi-buku">SEMUA KOLEKSI BUKU</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/buku-baru">BUKU BARU</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/buku-pilihan">BUKU PILIHAN</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/nasional-best-seller">NASIONAL BEST SELLER</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/buku-import">BUKU IMPORT</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/status-payment">TRANSACTION</Link></li>

                </ul>
            </nav>

        </div>
    )
}

export default withRouter(Navbar)
