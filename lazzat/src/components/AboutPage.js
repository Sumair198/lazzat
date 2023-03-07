import React from 'react';

export default function  AboutPage()
{
    return (
        <div className="container-xxl position-relative p-0">

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
                <a href="/" className="navbar-brand p-0">
                    
                    <img src="lz-logo.png" alt="Logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0 pe-4">
                        <a href="/" className="nav-item nav-link ">Home</a>
                        <a href="/about" className="nav-item nav-link active">About</a>
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
                        <a href="contact.html" className="nav-item nav-link">Contact</a>
                    </div>
                    <a href="/booking" className="btn btn-primary py-2 px-4">Book Now</a>
                </div>
            </nav>

            <div className="container-xxl py-5 bg-dark hero-header mb-5">
                <div className="container text-center my-5 pt-5 pb-4">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">About Us</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center text-uppercase">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>                            
                            <li className="breadcrumb-item text-white active" aria-current="page">About Us</li>
                        </ol>
                    </nav>
                </div>
            </div>
            
        </div>
   
    )
}
