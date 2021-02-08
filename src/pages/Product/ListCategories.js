import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../Context/DataContext';
import Title from '../../components/Title/Titlee';
import { HOST } from '../../services/Api';
import axios from 'axios';
import CardCategories from './CardCategories';




const ListCategories = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        const getCategories = async () => {
            await axios.get(`${HOST}/categories/all`, {
                headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('userdata'))}` }
            }).then(response => {
                setCategories([...categories, ...response.data.data.rows])
            })
        }
        getCategories()
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

    const filteredCategories = categories.filter((value) => {
        const searchText = dataContext ? dataContext.searchText : ""
        return value.name.toLowerCase().includes(searchText.toLowerCase())
    })


    const renderData =
        filteredCategories.length > 0 &&
        filteredCategories.map((book) => <CardCategories book={book} key={book.id} Addtocart={() => addToCart(book)} />);

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

export default ListCategories