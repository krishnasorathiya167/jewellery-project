import React from 'react'
import { useParams } from 'react-router-dom'
import Arrivals from '../Arrivals';
import { Link } from 'react-router-dom';

const Productdetail = () => {

    let { id } = useParams()
    console.log(id);

    let product = [

        {
            id: 1,
            img: "http://corano.mallthemes.com/wp-content/uploads/2018/11/7.jpg",
            name: "Chatelaine,Neckleces",
            jewel: "Diamond Band Ring",
            rupee: "100.00"
        },
        {
            id: 2,
            img: "http://corano.mallthemes.com/wp-content/uploads/2018/11/15.jpg",
            name: "Broches,Flatware",
            jewel: "Diamond Band Ring",
            rupee: "86.00"
        },
        {
            id: 3,
            img: "http://corano.mallthemes.com/wp-content/uploads/2018/11/2.jpg",
            name: "Neckleces,Runners",
            jewel: "Dissent Collar Ring",
            rupee: "95.00"
        },
        {
            id: 4,
            img: "http://corano.mallthemes.com/wp-content/uploads/2018/11/13.jpg",
            name: "Neckleces,tiara",
            jewel: "Long Earring Women",
            rupee: "70.00",
        },
        {
            id: 5,
            img: "http://corano.mallthemes.com/wp-content/uploads/2018/11/4.jpg",
            name: "Cutting Boards, Plates",
            jewel: "Extra Large Bambo",
            rupee: "80.00",
        },
        {
            id: 6,
            img: "http://corano.mallthemes.com/wp-content/uploads/2018/11/5.jpg",
            name: "Clocks, Wall Decor",
            jewel: "Lapis Hoop Earrings",
            rupee: "115.00",
        },
        {
            id: 7,
            img: "http://corano.mallthemes.com/wp-content/uploads/2018/11/17.jpg",
            name: "Brooches, End Tables",
            jewel: "Panther Braclet",
            rupee: "100.00",
        },
        {
            id: 8,
            img: "http://corano.mallthemes.com/wp-content/uploads/2018/11/6.jpg",
            name: "Brooches, Candles, Wall Decor",
            jewel: "PEar-shaped Black",
            rupee: "70.00",
        }

    ]

    let res = product.filter((val) => val.id == id)
    console.log(res);

    return (
        <div>
            {/* <div className="col-lg-4 text-center">
                <Arrivals img={res[0].img} name={res[0].name} jewel={res[0].jewel} rupee={res[0].rupee} />
            </div> */}

            <section className="productdata">
                <h1>Product Details</h1>
                <div className="main-data d-flex justify-content-center">
                    <Link to={"/"}><p className='home'>Home </p></Link>
                    <i class="fa-solid fa-chevron-right"></i>
                    <p> Shop</p>
                </div>
            </section>

            <div className="listdata">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="list-img">
                                <img src={res[0].img} alt="img" />
                            </div>
                            <div className="images-all d-flex">
                                <img src="http://corano.mallthemes.com/wp-content/uploads/2018/11/9.jpg" alt="small" />
                                <img src="http://corano.mallthemes.com/wp-content/uploads/2018/11/14.jpg" alt="small" />
                                <img src="http://corano.mallthemes.com/wp-content/uploads/2018/11/11-150x150.jpg" alt="small" />
                                <img src="http://corano.mallthemes.com/wp-content/uploads/2018/11/10.jpg" alt="small" />
                            </div>

                        </div>

                        <div className="col-lg-6 ps-4">
                            <div className="details">
                                <div className="all-data">
                                    <h2>{res[0].jewel}</h2>
                                </div>
                                <div className="review d-flex align-items-center">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star def"></i>
                                    <span>(1 customer review)</span>
                                </div>
                                <div className="price">
                                    <h3>${res[0].rupee}</h3>
                                </div>
                                <div className="lorem">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus repellendus praesentium molestias accusamus ad nostrum dolorem! Delectus, optio quasi sed distinctio ex ut, voluptatibus rerum ea sunt consequatur quod error? Lorem ipsum dolor sit amet.</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default Productdetail
