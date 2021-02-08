import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import { DataContext } from './Context/DataContext';
import Layout from './Layout/Layout';
import Login from './pages/Register/Login';
import Register from './pages/Register/Register';
import Products from './pages/Product/Products';
import Product2 from './pages/Product/Product2';
import Product3 from './pages/Product/Product3';
import Product4 from './pages/Product/Product4';
import Product5 from './pages/Product/Product5';
import Detail from './pages/Product/Detail';
import CartProduct from './pages/Cart/CartProduct';
import StatusPayment from './pages/Cart/StatusPayment';
import AdminNavbar from './pages/Admin/AdminNavbar';
import AddBook from './pages/Admin/AddBook';
import Books from './pages/Admin/Books';
import UpdateBook from './pages/Admin/UpdateBook';
import AddCategories from './pages/Admin/AddCategories';
import CategoriesList from './pages/Admin/CategoriesList';
import UpdateCategories from './pages/Admin/UpdateCategories';
import Default from './pages/Default/Default';


function App() {
  const [dataContext, setDataContext] = useState({
    searchText: '',
    carts: []
  })

  return (
    <DataContext.Provider value={{ dataContext, setDataContext }}>

      <Route>
        <Layout>
          <Switch>
            <Route exact path="/semua-koleksi-buku" component={Products} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/buku-baru" component={Product2} />
            <Route path="/buku-pilihan" component={Product3} />
            <Route path="/nasional-best-seller" component={Product4} />
            <Route path="/buku-import" component={Product5} />
            <Route path="/cart" component={CartProduct} />
            <Route path="/status-payment" component={StatusPayment} />
            <Route path="/detail-product/:id" component={Detail} />
            <Route path="/admin/admin-navbar" component={AdminNavbar} />
            <Route path="/admin/admin-addbook" component={AddBook} />
            <Route path="/admin/book-list-admin" component={Books} />
            <Route path="/admin/edit/:id" component={UpdateBook} />
            <Route path="/admin/add-categories" component={AddCategories} />
            <Route path="/admin/categories-list" component={CategoriesList} />
            <Route path="/admin/edit-category/:id" component={UpdateCategories} />
            <Route component={Default} />
          </Switch>
        </Layout>
      </Route>
    </DataContext.Provider>

  );
}

export default App;
