import React from 'react'
import { Link } from 'react-router-dom'
import Arrivals from '../Arrivals'


const Shop = () => {

  let product = [

    {
      id:1,
      img: "http://corano.mallthemes.com/wp-content/uploads/2018/11/7.jpg",
      name: "Chatelaine,Neckleces",
      jewel: "Diamond Band Ring",
      rupee: "100.00"
    },
    {
      id:2,
      img: "http://corano.mallthemes.com/wp-content/uploads/2018/11/15.jpg",
      name: "Broches,Flatware",
      jewel: "Diamond Band Ring",
      rupee: "86.00"
    },
    {
      id:3,
      img: "http://corano.mallthemes.com/wp-content/uploads/2018/11/2.jpg",
      name: "Neckleces,Runners",
      jewel: "Dissent Collar Ring",
      rupee: "95.00"
    },
    {
      id:4,
      img: "http://corano.mallthemes.com/wp-content/uploads/2018/11/13.jpg",
      name: "Neckleces,tiara",
      jewel: "Long Earring Women",
      rupee: "70.00",
    },
    {
      id:5,
      img: "http://corano.mallthemes.com/wp-content/uploads/2018/11/4.jpg",
      name: "Cutting Boards, Plates",
      jewel: "Extra Large Bambo",
      rupee: "80.00",
    },
    {
      id:6,
      img: "http://corano.mallthemes.com/wp-content/uploads/2018/11/5.jpg",
      name: "Clocks, Wall Decor",
      jewel: "Lapis Hoop Earrings",
      rupee: "115.00",
    },
    {
      id:7,
      img: "http://corano.mallthemes.com/wp-content/uploads/2018/11/17.jpg",
      name: "Brooches, End Tables",
      jewel: "Panther Braclet",
      rupee: "100.00",
    },
    {
      id:8,
      img: "http://corano.mallthemes.com/wp-content/uploads/2018/11/6.jpg",
      name: "Brooches, Candles, Wall Decor",
      jewel: "PEar-shaped Black",
      rupee: "70.00",
    }

  ]

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

            <div className="col-lg-9 ps-4">
              <div className="row">
                {
                  product.map((val, ind) => {
                    return (
                      <div className="col-lg-4 text-center">
                        <Arrivals img={val.img} name={val.name} jewel={val.jewel} rupee={val.rupee} />
                        <Link to={`/${val.id}`}><button className='btn-view mx-auto text-center'>View</button></Link>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Shop
