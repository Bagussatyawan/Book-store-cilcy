import React from 'react';
import { Link } from "react-router-dom";
import Axios from 'axios';
import { HOST } from '../../services/Api';



function CategoryTable({ categories, refresh }) {

    async function deleteCategory() {
        await Axios.delete(`${HOST}/categories/delete/${categories.id}`, {
            headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('userdata')).access_token}` }
        });

        return refresh()
    };

    return (
        <div >
            <table className="table table-striped">
                <thead>
                    <tr>

                        <th scope="col">Category's ID</th>
                        <th scope="col">Name Of Category</th>
                        <th scope="col">Update</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {categories.length > 0 &&
                        categories.map((category) => (<tr key={category.id}>

                            <td scope="row">{category.id}</td>
                            <td scope="row">{category.name}</td>
                            <td scope="row">
                                <Link to={"/admin/edit-category/" + category.id} className="badge badge-success" >
                                    Update</Link>
                            </td>
                            <td scope="row"> <i className="badge badge-danger mr-2" onClick={deleteCategory} style={{
                                cursor: "pointer",
                                marginLeft: 10,
                            }}>Delete</i></td>

                        </tr>))}



                </tbody>
            </table>
        </div>

    )
}

export default CategoryTable

