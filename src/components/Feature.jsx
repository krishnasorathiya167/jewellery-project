import React from 'react'

const Feature = (props) => {
    return (
        <div>
            <div className="feature-data d-flex">
                <div className="feature-img me-2">
                    <img src={props.img} alt="" />
                </div>
                <div className="feature-info">
                    <p className='mb-2'>{props.name}</p>
                    <span>{props.price}</span>
                </div>
            </div>
        </div>
    )
}

export default Feature
