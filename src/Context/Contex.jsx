import React, { Component } from 'react'
import { storeProducts, detailProduct } from '../DataStore/Data'

const ProductContext = React.createContext();

// Provider (to provide all information)
// Consumer

class ProductProvider extends Component {

    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        cartSubTotal: 0,
        cartTotal: 0
    }

    componentDidMount() {
        this.setProducts();
    }

    // --------Function to get all object and every single item in storeProduct---------------
    setProducts = () => {
        let allProducts = [];
        storeProducts.forEach(item => {
            const singleItem = { ...item };
            allProducts = [...allProducts, singleItem];
        });
        this.setState(() => {
            return { products: allProducts }
        });
    }

    // ---------Function to find every id item----------
    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    // ---------Function to match id details product with product----------

    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(
            () => {
                return { detailProduct: product };
            }
        )
    }

    // ---------Function untuk add to cart----------
    addToCart = (id) => {
        let allProducts = [...this.state.products];
        const index = allProducts.indexOf(this.getItem(id));
        const product = allProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;

        this.setState(() => {
            return { products: allProducts, cart: [...this.state.cart, product] };

        }, () => {
            this.addTotals();
        });
    }
    // ------------------function increment--------------
    increment = (id) => {
        let allCart = [...this.state.cart];
        const selectedProduct = allCart.find(item => item.id === id);

        const index = allCart.indexOf(selectedProduct);
        const product = allCart[index];

        product.count = product.count + 1;
        product.total = product.count * product.price;

        this.setState(
            () => {
                return { cart: [...allCart] };
            },
            () => {
                this.addTotals();
            }
        );
    }
    // / ------------------function decrement--------------
    decrement = (id) => {
        let allCart = [...this.state.cart];
        const selectedProduct = allCart.find(item => item.id === id);

        const index = allCart.indexOf(selectedProduct);
        const product = allCart[index];

        product.count = product.count - 1;
        product.total = product.count * product.price;

        this.setState(
            () => {
                return { cart: [...allCart] };
            },
            () => {
                this.addTotals();
            }
        );
    }
    // / ------------------function removeItem--------------
    removeItem = (id) => {
        console.log("derement remove")
    }

    clearCart = () => {
        console.log("cart was cleared")
    }

    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total));
        const total = subTotal;
        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                cartTotal: total
            }
        })
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };































// import { createContext } from 'react'

// export const DataContext = createContext(null)