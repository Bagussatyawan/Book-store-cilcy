import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Login from './pages/Register/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import AllBooks from './pages/Product/AllBooks';
// import ProductList from './pages/Product/ProductList';
import Product2 from './pages/Product/Product2';
import Product3 from './pages/Product/Product3';
import Product4 from './pages/Product/Product4';
import Product5 from './pages/Product/Product5';
import Cart from './pages/Cart/Cart';
import Details from './pages/Details/Details';
import AdminNavbar from './pages/Admin/AdminNavbar';
import AddBook from './pages/Admin/AddBook';
import Books from './pages/Admin/Books';
import UpdateBook from './pages/Admin/UpdateBook';
import AddCategories from './pages/Admin/AddCategories';
import CategoriesList from './pages/Admin/CategoriesList';
import UpdateCategories from './pages/Admin/UpdateCategories';
import Default from './pages/Default/Default';




function App() {

  return (

    <Route>
      <Layout>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/semua-koleksi-buku" component={AllBooks} />
          <Route path="/buku-baru" component={Product2} />
          <Route path="/buku-pilihan" component={Product3} />
          <Route path="/nasional-best-seller" component={Product4} />
          <Route path="/buku-import" component={Product5} />
          <Route path="/cart" component={Cart} />
          <Route path="/details" component={Details} />
          <Route path="/admin-navbar" component={AdminNavbar} />
          <Route path="/admin" component={AddBook} />
          <Route path="/book-list-admin" component={Books} />
          <Route path="/edit/:id" component={UpdateBook} />
          <Route path="/add-categories" component={AddCategories} />
          <Route path="/categories-list" component={CategoriesList} />
          <Route path="/edit-category/:id" component={UpdateCategories} />
          <Route component={Default} />
        </Switch>
      </Layout>
    </Route>

  );
}

export default App;
