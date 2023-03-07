import React from 'react';

export default function Header() {
        return (
    <>



        <div className="container-xxl position-relative p-0">
            <div className="whatsappp-container">
    <a href="https://wa.me/923143053649?text=Hello,%20Can%20someone%20assist%20me?" rel="noreferrer" target="_blank">
        <i className="fab fa-whatsapp"></i>
    </a>        
</div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
                <a href="/" className="navbar-brand p-0">
                    
                    <img src="lz-logo.png" alt="Logo"  />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0 pe-4">
                        <a href="/" className="nav-item nav-link active">Home</a>
                        <a href="/about" className="nav-item nav-link">About</a>
                        <a href="/service" className="nav-item nav-link">Service</a>
                        <a href="/menu" className="nav-item nav-link">Menu</a>
                        <div className="nav-item dropdown">
                            <a href="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu m-0">
                                <a href="/booking" className="dropdown-item">Booking</a>
                                <a href="/team" className="dropdown-item">Our Team</a>
                                <a href="/testimonial" className="dropdown-item">Testimonial</a>
                            </div>
                        </div>
                        <a href="/contact" className="nav-item nav-link">Contact</a>
                    </div>
                    <a href="/booking" className="btn btn-primary py-2 px-4">Book Now</a>
                </div>
            </nav>

            <div className="container-xxl py-5 bg-dark hero-header mb-5">
                <div className="container my-5 py-5">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 text-center text-lg-start">
                            <h1 className="display-3 text-white animated slideInLeft">Enjoy Homemade<br />Delicious Meal</h1>
                            <p className="text-white animated slideInLeft mb-4 pb-2">We are homemade food caterer and providing hygiene and delicious dishes for your home parties, birthday parties and small events.</p>
                            <a href="a.html" className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">Book Now</a>
                        </div>
                        <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                            <img className="img-fluid" src="img/hero.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        </>
        )
    }
