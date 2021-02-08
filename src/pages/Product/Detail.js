import React, { useState, useEffect, useContext } from 'react';
import Axios from 'axios';
import { HOST } from '../../services/Api';
import { Button } from '../../components/Button/Button';
import { Link } from "react-router-dom";
import numeral from 'numeral';
import { DataContext } from '../../Context/DataContext';

const DetailProduct = (props) => {
    const [state, setState] = useState({
        name: "",
        image_url: "",
        author: "",
        price: "",
        description: "",
        no_isbn: "",
        weight: "",
        category_id: "",
        disabled: false
    });

    useEffect(() => {
        const getDetails = async () => {
            const id = props.match.params.id;
            const response = await Axios.get(`${HOST}/product/get/${id}`, {
                headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('userdata')).access_token}` }
            });
            setState({
                id: id,
                name: response.data.data.name,
                description: response.data.data.description,
                author: response.data.data.author,
                image_url: response.data.data.image_url,
                price: response.data.data.price,
                no_isbn: response.data.data.no_isbn,
                weight: response.data.data.weight,
                category_id: response.data.data.category_id
            });
        };
        getDetails()
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

    return (
        < div className="container py-5" >
            {/* title */}
            <div div className="row" >
                <div className="col-10 mx-auto text-center my-5">
                    <h1 >
                        {state.name}
                    </h1>
                </div>
            </div >
            {/* content */}
            < div className="row" >
                {/* image product */}
                < div className="col-10 mx-auto col-md-6 my-3" >
                    <img src={`http://localhost:6969/thumbnails/${state.image_url}`} width={200} />
                </div >
                {/* info product */}
                < div className="col-10 mx-auto col-md-6 my-3" >
                    <h4 className="text-uppercase mt-3 mb-2">
                        Author : <span className="text-uppercase">{state.author}</span>
                    </h4>
                    <h4>
                        <strong >
                            Price: <span>Rp   </span> {numeral(state.price).format(0, 0)}
                        </strong>
                    </h4>
                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                        Synopsis:
                    </p>
                    <p>
                        {state.description}
                    </p>
                    {/* Button */}
                    <div>
                        <Link to="/semua-koleksi-buku">
                            <Button> back to product </Button>
                        </Link>
                        <Button onClick={() => addToCart(state)} style={{ cursor: "pointer" }}>add to cart</Button>
                    </div>
                </div >
            </div >
        </div >
    )
}

export default DetailProduct

