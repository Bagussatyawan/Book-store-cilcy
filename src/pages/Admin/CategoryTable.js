import React from 'react';
// import { Link } from "react-router-dom";


function CategoryTable({ category }) {
    return (
        <div >
            <table>
                <thead>
                    <tr>

                        <th>Category's ID</th>
                        <th>Name Of Category</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>

                        <td>{category.id}</td>
                        <td>{category.name}</td>

                    </tr>

                </tbody>
            </table>
        </div>

    )
}

export default CategoryTable

