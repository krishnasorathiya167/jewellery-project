import React from 'react'
import { Link } from 'react-router-dom'


const Shop = () => {
  return (
    <>

    <section className="main">
      <h1>Shop</h1>
      <div className="main-data d-flex justify-content-center">
        <Link to={"/"}><p className='home'>Home </p></Link>
        <i class="fa-solid fa-chevron-right"></i>
        <p> Shop</p>
      </div>
    </section>
      <div className="shop">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="datas">
                <h1>Categories</h1>
                <ul>
                  <li>Anklet</li>
                  <li className='d-flex justify-content-between'>Bag Charm<i class="fa-solid fa-chevron-right"></i></li>
                  <li>Circlet</li>
                  <li className='d-flex justify-content-between'>Earring<i class="fa-solid fa-chevron-right"></i></li>
                  <li className='d-flex justify-content-between'>Kitchen & Dining<i class="fa-solid fa-chevron-right"></i></li>
                  <li className='d-flex justify-content-between'>Living Room Sets<i class="fa-solid fa-chevron-right"></i></li>
                  <li>Navaratna</li>
                  <li className='d-flex justify-content-between'>Necklaces<i class="fa-solid fa-chevron-right"></i></li>
                  <li className='d-flex justify-content-between'>Shoe Buckle<i class="fa-solid fa-chevron-right"></i></li>
                  <li>TV Stands</li>
                  <li>Uncategorized</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Shop
