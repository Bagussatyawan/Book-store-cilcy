import React from 'react'
import './Title.css'

export default ({ name, title }) => {
    return (
        <div>
            <div className="row">
                <div className="col-10 text-title">
                    <h1 className="text-capitalize font-weight-bold">
                        {name}
                        <strong className="text-color">{title}</strong>
                    </h1>
                </div>
            </div>
        </div>
    )
}