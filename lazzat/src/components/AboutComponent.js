import React from 'react';

const AboutComponent = ()=>
{
    return (
        

        <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5 align-items-center">
                <div className="col-lg-6">
                    <div className="row g-3">
                        <div className="col-6 text-start">
                            <img className="img-fluid rounded w-100 wow zoomIn" alt="" data-wow-delay="0.1s" src="img/about-1.jpg" />
                        </div>
                        <div className="col-6 text-start">
                            <img className="img-fluid rounded w-75 wow zoomIn" alt="" data-wow-delay="0.3s" src="img/about-2.jpg" style={{marginTop: '25%'}} />
                        </div>
                        <div className="col-6 text-end">
                            <img className="img-fluid rounded w-75 wow zoomIn" alt="" data-wow-delay="0.5s" src="img/about-3.jpg" />
                        </div>
                        <div className="col-6 text-end">
                            <img className="img-fluid rounded w-100 wow zoomIn" alt="" data-wow-delay="0.7s" src="img/about-4.jpg" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <h5 className="section-title ff-secondary text-start text-primary fw-normal">About Us</h5>
                    <h1 className="mb-4">Welcome to <i className="fa fa-utensils text-primary me-2"></i>Lazzat</h1>
                    <p className="mb-4">We are energetic and passionate team of certified and experienced home based chefs. Our team consists on house wives who love hygiene cooking.</p>
                    <p className="mb-4">Our aim is to take care of clients' health by making customized meal in an hygiene environment. We don't compromise on quality of raw material and do not use frozen but fresh material.</p>
                    <div className="row g-4 mb-4">
                        <div className="col-sm-6">
                            <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                                <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">15</h1>
                                <div className="ps-4">
                                    <p className="mb-0">Years of</p>
                                    <h6 className="text-uppercase mb-0">Experience</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                                <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">74</h1>
                                <div className="ps-4">
                                    <p className="mb-0">Managed</p>
                                    <h6 className="text-uppercase mb-0">Events & Parties</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4 mb-4">
                        <div className="col-sm-6">
                            <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                                <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">200+</h1>
                                <div className="ps-4">
                                    <p className="mb-0">Varaity of</p>
                                    <h6 className="text-uppercase mb-0">Dishes</h6>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
        </div>

    )
}  

export default AboutComponent;

        
    
