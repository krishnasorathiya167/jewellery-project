import React from 'react'

const Blog = (props) => {
    return (
        <>
            <div className="blog-data">
                <div className="blog-img">
                    <img src={props.img} alt="blog-img" />
                </div>
                <div className="blog-info">
                    <p>By <span> Admin</span> / April 25,2018</p>
                    <h4>{props.name}</h4>
                </div>
            </div>
        </>
    )
}

export default Blog
