import React, { useContext, useState } from 'react';
import { DataContext } from '../../Context/DataContext';


const SearchBar = () => {
    const { dataContext, setDataContext } = useContext(DataContext)
    const [search, setSearch] = useState("")
    const handleSearch = (e) => {
        setDataContext({ ...dataContext, searchText: e.target.value })
        setSearch(e.target.value)
    }
    return (
        <div>
            <form className="form-inline mr-sm-2">
                <input
                    className="form-control mr-sm-2"
                    type="text"
                    placeholder="Cari Produk, Judul Buku, Penulis"
                    aria-label="Search"
                    value={search}
                    onChange={(e) => handleSearch(e)} />
                <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit" >
                    Search</button>
            </form>

        </div>
    )
}

export default SearchBar
