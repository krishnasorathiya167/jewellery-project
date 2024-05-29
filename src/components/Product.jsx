import React from 'react'

const Product = (props) => {
  return (
    <>
        <div className="pro-data">
            <div className="pro-img">
                <img src={props.img} alt="" />
            </div>
            <div className="sale">
                <p className='m-0'>{props.sale}</p>
            </div>
            <div className="pro-info">
                <span>{props.name}</span>
                <p>{props.title}</p>
                <h6><span className='rate'>{props.real} </span>{props.price}</h6>
            </div>
        </div>
    </>
  )
}

export default Product
