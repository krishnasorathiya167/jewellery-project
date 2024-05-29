import React from 'react'

const Support = ({icon,s_data,p_data}) => {

  
   

  return (
    <>
      <div className="support-data d-flex">
          <div className="support-icon">
            <span>{icon}</span>
          </div>
          <div className="support-detail">
            <h4>{s_data}</h4>
            <p>{p_data}</p>
          </div>
      </div>
    </>
  )
}

export default Support
