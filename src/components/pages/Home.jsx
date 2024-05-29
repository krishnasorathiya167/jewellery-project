import React from 'react'
import Bannerr from '../Bannerr'
import Support from '../Support'
import Jewellery from '../Jewellery'
import Arrivals from '../Arrivals'
import Product from '../Product'
import { Link } from 'react-router-dom'
import Feature from '../Feature'
import Blog from '../Blog'

// import { Link } from 'react-router-dom'


const Home = () => {

    let support = [
        {
            icon: <i class="fa-solid fa-plane-departure"></i>,
            s_data: "Free Shipping",
            p_data: "Free Shipping On All US Order Or Order Above $200"
        },
        {
            icon: <i class="fa-solid fa-life-ring"></i>,
            s_data: "Support 24/7",
            p_data: "Contact Us 24 Hours A Day, 7 Days A Week"
        },
        {
            icon: <i class="fa-solid fa-arrow-rotate-left"></i>,
            s_data: "30 Days Return",
            p_data: "Simply Return It Within 30 Days For An Exchange"
        },
        {
            icon: <i class="fa-regular fa-credit-card"></i>,
            s_data: "100% Payment Secure",
            p_data: "We Ensure Secure Payment With PEV"
        }
    ]

    let jewellery = [
        {
            id: 1,
            image: "http://corano.mallthemes.com/wp-content/uploads/2019/04/banner1-1.jpg",
            name: "BEATIFUL",
            title: "Wedding",
            sub: "Rings",
        },
        {
            id: 2,
            image: "http://corano.mallthemes.com/wp-content/uploads/2019/04/banner1-2.jpg",
            name: "EARRING",
            title: "Tangerine Floral",
            sub: "Earring",
        },
        {
            id: 3,
            image: "http://corano.mallthemes.com/wp-content/uploads/2019/04/banner1-3.jpg",
            name: "NEW ARRIVALS",
            title: "Pearl",
            sub: "Necklaces",
        },
        {
            id: 4,
            image: "http://corano.mallthemes.com/wp-content/uploads/2019/04/banner1-4.jpg",
            name: "NEW DESIGN",
            title: "Diamond",
            sub: "Jewelry",
        },
    ]

    let arrival = [
        {
            img: "http://corano.mallthemes.com/wp-content/uploads/2018/11/7.jpg",
            name: "Chatelaine,Neckleces",
            jewel: "Diamond Band Ring",
            rupee: "100.00"
        },
        {
            img: "http://corano.mallthemes.com/wp-content/uploads/2018/11/15.jpg",
            name: "Broches,Flatware",
            jewel: "Diamond Band Ring",
            rupee: "86.00"
        },
        {
            img: "http://corano.mallthemes.com/wp-content/uploads/2018/11/2.jpg",
            name: "Neckleces,Runners",
            jewel: "Dissent Collar Ring",
            rupee: "95.00"
        },
        {
            img: "http://corano.mallthemes.com/wp-content/uploads/2018/11/13.jpg",
            name: "Neckleces,tiara",
            jewel: "Long Earring Women",
            rupee: "70.00",
        }
    ]

    let design = [
        {
            img: "http://corano.mallthemes.com/wp-content/uploads/2019/04/banner2-1.jpg",
            name: "EARRINGS"
        },
        {
            img: "http://corano.mallthemes.com/wp-content/uploads/2019/04/banner2-2.jpg",
            name: "NECKLACES"
        },
        {
            img: "http://corano.mallthemes.com/wp-content/uploads/2019/04/banner2-3.jpg",
            name: "RINGS"
        },
        {
            img: "http://corano.mallthemes.com/wp-content/uploads/2019/04/banner2-4.jpg",
            name: "BREACLETS"
        },
    ]

    let products = [
        {
            img: "http://corano.mallthemes.com/wp-content/uploads/2018/11/9.jpg",
            name: "Rugs,Wall Decor",
            title: "Carat Solitaire Diamond",
            price: "$78.00"
        },
        {
            img: "http://corano.mallthemes.com/wp-content/uploads/2018/11/6.jpg",
            name: "Brooches,Cnadles,Wall Decor",
            title: "Pear-Shaped Black",
            sale: "Sale!",
            price: "$60.00 - $100.00"
        },
        {
            img: "http://corano.mallthemes.com/wp-content/uploads/2018/11/3.jpg",
            name: "Candles,Wall Decor",
            title: "The World Jewelery",
            price: "$115.00"
        },
        {
            img: "http://corano.mallthemes.com/wp-content/uploads/2018/11/8.jpg",
            name: "Candles,Wall Decor",
            title: "Women's Falla Earrings",
            sale: "Sale!",
            price: "$60.00",
            real: "$85.00",
        },
        {
            img: "http://corano.mallthemes.com/wp-content/uploads/2018/11/5.jpg",
            name: "Clocks,Wall Decor",
            title: "LApis Hoop Earrings",
            price: "$115.00"
        },
        {
            img: "http://corano.mallthemes.com/wp-content/uploads/2018/11/1.jpg",
            name: "Rugs,Wall Decor",
            title: "Sterling Silver Earrings",
            sale: "Sale!",
            price: "$70.00",
            real: "$80.00",
        },
        {
            img: "http://corano.mallthemes.com/wp-content/uploads/2018/11/10.jpg",
            name: "Brocches,Wall Decor",
            title: "Women's Bijou Ear",
            sale: "Sale!",
            price: "$40.00",
            real: "$45.00",
        },
        {
            img: "http://corano.mallthemes.com/wp-content/uploads/2018/11/19.jpg",
            name: "Candles,Wall Decor",
            title: "Zmen Womens Bijou 10K",
            sale: "Sale!",
            price: "$7.00 - $9.00"
        }

    ]

    let feature = [
        {
            img: "http://corano.mallthemes.com/wp-content/uploads/2018/11/9.jpg",
            name: "Carat Solitaire Daimond",
            price: "$78.00"
        },
        {
            img: "http://corano.mallthemes.com/wp-content/uploads/2018/11/15.jpg",
            name: "Diamond Band Ring",
            price: "$86.00"
        },
        {
            img: "http://corano.mallthemes.com/wp-content/uploads/2018/11/7.jpg",
            name: "Diamond Band Ring",
            price: "$100.00"
        },
        {
            img: "http://corano.mallthemes.com/wp-content/uploads/2018/11/2.jpg",
            name: "Dissent Collar Earrings",
            price: "$95.00"
        },
    ]

    let seller = [
        {
            img: "http://corano.mallthemes.com/wp-content/uploads/2018/11/17.jpg",
            name: "Panther Braclet",
            price: "$100.00",
        },
        {
            img: "http://corano.mallthemes.com/wp-content/uploads/2018/11/15.jpg",
            name: "Diamond Band Ring",
            price: "$86.00",
        },
        {
            img: "	http://corano.mallthemes.com/wp-content/uploads/2018/11/18.jpg",
            name: "Sterling Silver Bead",
            price: "$80.00",
        },
        {
            img: "	http://corano.mallthemes.com/wp-content/uploads/2018/11/16.jpg",
            name: "Silvermist Bracelet",
            price: "$70.00",
        }
    ]

    let blog = [
        {
            img: "http://corano.mallthemes.com/wp-content/uploads/2018/04/blog2-1110x700.jpg",
            name: "Quisque Egestas"
        },
        {
            img: "http://corano.mallthemes.com/wp-content/uploads/2018/04/blog3-1110x700.jpg",
            name: "Post With Gallery"
        },
        {
            img: "http://corano.mallthemes.com/wp-content/uploads/2018/04/blog4-1110x700.jpg",
            name: "Maecenas Ultricies"
        }
    ]

    return (
        <>

            <Bannerr />

            <section className="support">
                <div className="container">
                    <div className="row">
                        {
                            support.map((val, ind) => {
                                return (
                                    <div className="col-lg-3">
                                        <Support icon={val.icon} s_data={val.s_data} p_data={val.p_data} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>

            <section className="jewellery">
                <div className="container">
                    <div className="row">
                        {
                            jewellery.map((val, ind) => {
                                return (
                                    <div className="col-lg-6">
                                        <Jewellery image={val.image} name={val.name} title={val.title} sub={val.sub} />
                                        {/* <Link to={`/${val.id}`}> <button>view</button></Link> */}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>

            <section className="arrival">
                <div className="container">
                    <div className="common-data">
                        <h1>New Arrivals</h1>
                        <p>Add new arrivals to weekly lineup</p>
                    </div>
                    <div className="datas">
                        <ul className='d-flex'>
                            <li className='first'>Bracelets</li>
                            <li className='mx-5'>Earrings</li>
                            <li>Necklaces</li>
                        </ul>
                    </div>

                    <div className="row">
                        {
                            arrival.map((val, ind) => {
                                return (
                                    <div className="col-md-3">
                                        <Arrivals img={val.img} name={val.name} jewel={val.jewel} rupee={val.rupee} />
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </section>

            <section className="jewel-design">
                <div className="container">
                    <div className="row">
                        {
                            design.map((val, ind) => {
                                return (
                                    <div className="col-lg-3 position-relative">
                                        <div className="design-img">
                                            <img src={val.img} alt="" />
                                        </div>
                                        <div className="data">
                                            <h5>{val.name}</h5>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </section>

            <section className="products">
                <div className="container">
                    <div className="common-data">
                        <h1>Our Products</h1>
                        <p>Add our products to weekly lineup</p>
                    </div>
                    <div className="row">
                        {
                            products.map((val, ind) => {
                                return (
                                    <div className="col-md-3 mb-4">
                                        <Product img={val.img} name={val.name} real={val.real} sale={val.sale} title={val.title} price={val.price} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>

            <section className="testimonial">
                <div className="container">
                    <div className="common-data">
                        <h1>Client Testimonials</h1>
                        <p>What they say</p>
                    </div>
                    <div className="testi-img">
                        <img src="http://corano.mallthemes.com/wp-content/uploads/2018/04/testimonial2-150x150.jpg" alt="" />
                    </div>
                    <div className="testi-data">
                        <p className='mt-4'>All Perfect !! I have three sites with magento , this theme is the best !! Excellent support , advice theme installation package , sorry for English, are Italian but I had no problem !! Thank you !</p>
                        <h6 className='mt-5'>john Sullivan <span>   /     Customer</span></h6>
                    </div>
                </div>
            </section>

            <section className="wedding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="wedding-data">
                                <div className="wed-img">
                                    <img src="http://corano.mallthemes.com/wp-content/uploads/2019/04/banner3.jpg" alt="" />
                                </div>
                                <div className="wed-info">
                                    <p>BEAUTIFUL</p>
                                    <h2>Wedding Ringss</h2>
                                    <Link to={"/Shop"}><button>Shop Now</button></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-md-6 ps-3">
                                    <div className="feature">
                                        <div className="data">
                                            <h3>Featured Products</h3>
                                        </div>
                                        {
                                            feature.map((val, ind) => {
                                                return (
                                                    <Feature img={val.img} name={val.name} price={val.price} />
                                                )
                                            })
                                        }
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="feature">
                                        <div className="data">
                                            <h3>Best Seller</h3>
                                        </div>
                                        {
                                            seller.map((val, ind) => {
                                                return (
                                                    <Feature img={val.img} name={val.name} price={val.price} />
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="blog">
                <div className="container">
                    <div className="common-data">
                        <h1>From Our Blog</h1>
                        <p className='mb-4'>There are latest blog posts</p>
                    </div>
                    <div className="row">
                        {
                            blog.map((val, ind) => {
                                return (
                                    <div className="col-md-4">
                                        <Blog img={val.img} name={val.name} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>

            <section className="logo">
                <div className="container">
                    <div className="row">
                        <div className="logo-img d-flex">
                            <img src="http://corano.mallthemes.com/wp-content/uploads/2019/04/img-brand1.jpg" alt="logo" />
                            <img src="http://corano.mallthemes.com/wp-content/uploads/2019/04/img-brand2.jpg" alt="logo" />
                            <img src="http://corano.mallthemes.com/wp-content/uploads/2019/04/img-brand.jpg" alt="logo" />
                            <img src="	http://corano.mallthemes.com/wp-content/uploads/2019/04/img-brand4.jpg" alt="logo" />
                            <img src="http://corano.mallthemes.com/wp-content/uploads/2019/04/img-brand5.jpg" alt="logo" />
                        </div>
                    </div>
                </div>
            </section>

        </>

    )
}

export default Home
