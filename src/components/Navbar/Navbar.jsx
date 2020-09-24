import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import './style.css'

export default class Navbar extends Component {

    logOut(e) {
        e.preventDefault()
        localStorage.removeItem("usertoken")
        const { history } = this.props;
        history.push('/home')
    };

    render() {
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
                    <a href="/home" onClick={this.logOut.bind(this)} className="nav-item" className="nav-link">
                        Logout
                    </a>
                </li>
            </ul>
        );

        return (
            <div>
                <nav className="navbar navbar-expand navbar-light bg-light">
                    <a href="/home" className="navbar-brand">
                        Cilcy.com  </a>
                    <div className="navbar-nav mr-auto"
                        id="navbar1">
                        <ul className="nav navbar-nav navbar-right">

                            <li className="nav-item">
                                <form className="form-inline ">
                                    <input className="form-control mr-sm-2" type="search" placeholder="Cari Produk, Judul Buku, Penulis" aria-label="Search" />
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                </form>
                            </li>
                            <li className="nav-item">
                                <Link to="/cart" className="nav-link">
                                    <i className="fas fa-cart-plus">
                                        <span className="span-cart">0</span>
                                    </i>
                                </Link>
                            </li>
                        </ul>

                    </div>
                    {localStorage.usertoken ? userLink : loginRegLink}
                </nav>
                <nav className="navbar navbar-expand navbar-light bg-light">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link className="nav-link" to="/semua-koleksi-buku">SEMUA KOLEKSI BUKU</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/buku-baru">BUKU BARU</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/buku-pilihan">BUKU PILIHAN</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/nasional-best-seller">NASIONAL BEST SELLER</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/buku-import">BUKU IMPORT</Link></li>
                        <li className="nav-item"><Link className="nav-link" to='/admin-navbar'>ADMIN</Link></li>

                    </ul>
                </nav>

            </div>
        )
    }
}



{/* <div>
<nav className="navbar navbar-expand navbar-dark bg-dark">
<a href="/home" className="navbar-brand">
    Cilcy.com  </a>
<div className="collapse navbar-collapse justify-content-md-center"
    id="navbar1">
    <ul className="navbar-nav">
        <li className="nav-item">

            <input type="text" placeholder='Cari Produk, Judul Buku, Penulis' />
            <label >
                <span className="fas fa-search" ></span>
            </label>

        </li>
        <li className="nav-item">
            <Link to="/cart" className="nav-link">
                <i className="fas fa-cart-plus">
                    <span className="span-cart">0</span>
                </i>
            </Link>
        </li>
    </ul>
</div>
{localStorage.usertoken ? userLink : loginRegLink}
</nav>

<nav className='nav-2'>
<ul className='nav-content-2'>
    <li><NavLink to="/semua-koleksi-buku">semua koleksi buku</NavLink></li>
    <li><NavLink to="/buku-baru">buku baru</NavLink></li>
    <li><NavLink to="/buku-pilihan">buku pilihan</NavLink></li>
    <li><NavLink to="/nasional-best-seller">nasional best seller</NavLink></li>
    <li><NavLink to="/buku-import">buku import</NavLink></li>
    <li className='sale'><NavLink to='/'>Admin</NavLink></li>

</ul>
</nav>
</ div> */}