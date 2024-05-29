import React from 'react'
import { Link } from 'react-router-dom'

const Jewellery = (props) => {
  return (
    <>
      <div className="jewellery-data">
        <div className="jewellery-img mb-4">
          <img src={props.image} alt="jewellwery-img" />
        </div>
        <div className="jewellery-info">
          <h6>{props.name}</h6>
          <h5>{props.title} <span className='d-block'>{props.sub}</span></h5>
         <Link to={"/shop"}><button>Shop Now</button></Link> 
        </div>
      </div>
    </>
  )
}

export default Jewellery

