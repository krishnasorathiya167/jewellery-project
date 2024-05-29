import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="#"><img src="http://corano.mallthemes.com/wp-content/uploads/2019/07/logo_corano.png" alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="head d-flex  justify-content-between align-items-center">
                            <div className="head-info">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link to={"/"} className="nav-link active" aria-current="page" href="#">Home<i class="fa-solid fa-chevron-down"></i></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={"/shop"} className="nav-link" aria-current="page" href="#">Shop<i class="fa-solid fa-chevron-down"></i></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={"/about"} className="nav-link" aria-current="page" href="#">Pages<i class="fa-solid fa-chevron-down"></i></Link>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="#">Blog<i class="fa-solid fa-chevron-down"></i></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="#">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <form className='d-flex'>
                            <i class="fa-solid fa-magnifying-glass"></i><input className="form-control me-2" type="search" placeholder="Search products..." aria-label="Search" />
                            </form>
                            <div className="head-icon">
                                    <span><i className="fa-regular fa-circle-user"></i></span>
                                    <span><i className="fa-regular fa-heart"></i></span>
                                    <span><i className="fa-solid fa-cart-shopping"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
