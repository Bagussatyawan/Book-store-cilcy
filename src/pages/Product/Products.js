import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../Context/DataContext';
import CardBooks from './CardBooks';
import Title from '../../components/Title/Titlee';
import { HOST } from '../../services/Api';
import axios from 'axios';




const Products = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProduct = async () => {
            await axios.get(`${HOST}/product/all`, {
                headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('userdata')).access_token}` }
            }).then(response => {
                setProducts([...products, ...response.data.data.rows])
            })
        }
        getProduct()
    }, [])


    const { dataContext, setDataContext } = useContext(DataContext)


    const addToCart = value => {
        const carts = dataContext ? dataContext.carts : []
        console.log(dataContext)
        carts.push({ ...value, qty: 1 })
        setDataContext({
            ...dataContext,
            carts
        })
    }
    console.log(dataContext)

    const filteredProduct = products.filter((value) => {
        const searchText = dataContext ? dataContext.searchText : ""
        return value.name.toLowerCase().includes(searchText.toLowerCase())
    })


    const renderData =
        filteredProduct.length > 0 &&
        filteredProduct.map((book) => <CardBooks book={book} key={book.id} Addtocart={() => addToCart(book)} />);

    return (
        <div className="py-5">
            <div className="container">
                <Title name="All " title="List Book" />
                <div className="row">
                    {renderData}
                </div>
            </div>
        </div>
    )
}

export default Products