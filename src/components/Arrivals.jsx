import React from 'react'

const Arrivals = (props) => {
  return (
    <div>
      <div className="arrival-data">
        <div className="arrival-img">
            <img src={props.img} alt="" />
        </div>
        <div className="arrival-info pt-3">
          <span>{props.name}</span>
          <p className='mb-3'>{props.jewel}</p>
          <h6>${props.rupee}</h6>
        </div>
      </div>
    </div>
  )
}

export default Arrivals

