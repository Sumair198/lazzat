import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { testimonialsData } from '../service/api';

export default function ReviewsComponent() {
    const [testi , setTesti] = useState([])

    useEffect(()=>
    {
        getTestiData()
    },[])

    const getTestiData = async () =>
    {
        const responseData = await testimonialsData()
        setTesti(responseData.data)
    }

    const options = {
        margin: 30,
        responsiveClass: true,
        nav: true,
        dots: false,
        autoplay: false,
        navText: ["Prev", "Next"],
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 1,
            },
            700: {
                items: 2,
            },
            1000: {
                items: 3,

            }
        },
    };

    return (
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="text-center">
                    <h5 className="section-title ff-secondary text-center text-primary fw-normal">Testimonial</h5>
                    <h1 className="mb-5">Our Clients Say!!!</h1>
                </div>
                <OwlCarousel className='owl-theme' loop margin={10} {...options} nav>


                    {
                            testi.map(getTesti =>(
                                <div className="testimonial-item bg-transparent border rounded p-4">
                                <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                                <p style={{ height: '192px' }}>{getTesti.clientText}</p>
                                <div className="d-flex align-items-center">
                                    <img className="img-fluid flex-shrink-0 rounded-circle" alt="" src={`uploads/Testimonial-uploads/${getTesti.photoTestimonial}`} style={{ width: '50px', height: '50px' }} />
                                    <div className="ps-3">
                                        <h5 className="mb-1">{getTesti.clientName}</h5>
                                        <small>{getTesti.Profession}</small>
                                    </div>
                                </div>
                            </div>
                            ))
                    }
                   

                   
                    {/* <div className="testimonial-item bg-transparent border rounded p-4">
                        <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                        <p style={{ height: '192px' }}>highly recommended,  must try, Great value, Creative cuisine, Professional staff</p>
                        <div className="d-flex align-items-center">
                            <img className="img-fluid flex-shrink-0 rounded-circle" alt="" src="https://scontent.fkhi16-1.fna.fbcdn.net/v/t1.6435-1/159025701_887439495405981_1205296167039108764_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=mhQYOM5m9pAAX-BN-D7&_nc_ht=scontent.fkhi16-1.fna&oh=00_AfAMpfZ3cq9NMEa8HnzHbEE3gCgCsA-AeJELpm2AA8vPtQ&oe=63E48689" style={{ width: '50px', height: '50px' }} />
                            <div className="ps-3">
                                <h5 className="mb-1">Waqas Khan</h5>
                                <small>Professional</small>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="testimonial-item bg-transparent border rounded p-4">
                        <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                        <p style={{ height: '192px' }}>I ordered Makhni Karahi and Murgh Cholay, which were both delicious. Customer service is excellent. YOU MADE MY DAY😊😊😊!!! I urge that you all go out and order some delectable things.</p>
                        <div className="d-flex align-items-center">
                            <img className="img-fluid flex-shrink-0 rounded-circle" alt="" src="https://scontent.fkhi16-1.fna.fbcdn.net/v/t39.30808-1/209367390_115369060791347_1587936088436533898_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=3cmDQOM5DkwAX9r03uP&_nc_ht=scontent.fkhi16-1.fna&oh=00_AfCMTrhlpkJXCYBmh1j6lcgLzDEcqUdYP6E6sh-nQjWrFw&oe=63C2290B" style={{ width: '50px', height: '50px' }} />
                            <div className="ps-3">
                                <h5 className="mb-1">Ahmed Abeera</h5>
                                <small>Professional</small>
                            </div>
                        </div>
                    </div> */}

                    {/* <div className="testimonial-item bg-transparent border rounded p-4">
                        <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                        <p style={{ height: '192px' }}>I am so satisfied with the food and customer service. Quality and quantity is so amazing and the taste is very delicious 😋❤️😍</p>
                        <div className="d-flex align-items-center">
                            <img className="img-fluid flex-shrink-0 rounded-circle" alt="" src="https://scontent.fkhi16-1.fna.fbcdn.net/v/t39.30808-1/293983868_1432257300623737_2927428315969249687_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=wD_A2jM8BuIAX_WUqrz&_nc_ht=scontent.fkhi16-1.fna&oh=00_AfA_goHKy8v_Ml0S9jOjgEOchTFmBFuDvy1_sXz1h9jknA&oe=63C119C6" style={{ width: '50px', height: '50px' }} />
                            <div className="ps-3">
                                <h5 className="mb-1">Aysha Khan</h5>
                                <small>Student</small>
                            </div>
                        </div>
                    </div> */}

                    {/* <div className="testimonial-item bg-transparent border rounded p-4">
                        <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                        <p style={{ height: '192px' }}>Very delicious cuisines, I never found such hygiene, taste, and catering service from any homemade but this rocked. highly recommended to health-conscious people like me 😉. this is now my permanent cook.</p>
                        <div className="d-flex align-items-center">
                            <img className="img-fluid flex-shrink-0 rounded-circle" alt="" src="https://scontent.fkhi16-1.fna.fbcdn.net/v/t1.6435-1/142994765_103479078424728_6324422114737623578_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=Nk64WHpZj3oAX9g2Ol6&_nc_ht=scontent.fkhi16-1.fna&oh=00_AfDnc_SRidgv20v-w6tgOAxGLxMZ16I39bhkYWH5Jif_bw&oe=63E487E5" style={{ width: '50px', height: '50px' }} />
                            <div className="ps-3">
                                <h5 className="mb-1">Bilal Mustafa</h5>
                                <small>Businessman</small>
                            </div>
                        </div>
                    </div> */}

                    {/* <div className="testimonial-item bg-transparent border rounded p-4">
                        <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                        <p style={{ height: '192px' }}>Highly recommend, good presentation with taste</p>
                        <div className="d-flex align-items-center">
                            <img className="img-fluid flex-shrink-0 rounded-circle" alt="" src="https://scontent.fkhi16-1.fna.fbcdn.net/v/t39.30808-1/240599790_6270055123066571_7844517173880928743_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=gsN4d1yO25EAX8-YUqU&_nc_ht=scontent.fkhi16-1.fna&oh=00_AfD4OvG3LnDuLYxZ8gY6h8MxXCwd1lptggM1g45NOvtgSA&oe=63C2A898" style={{ width: '50px', height: '50px' }} />
                            <div className="ps-3">
                                <h5 className="mb-1">Danish Iqbal</h5>
                                <small>Student</small>
                            </div>
                        </div>
                    </div> */}

                    {/* <div className="testimonial-item bg-transparent border rounded p-4" >
                        <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                        <p style={{ height: '192px' }}>Very delicious taste highly recommend</p>
                        <div className="d-flex align-items-center">
                            <img className="img-fluid flex-shrink-0 rounded-circle" alt="" src="https://scontent.fkhi16-1.fna.fbcdn.net/v/t1.6435-1/39105846_124751128461656_5341801304509382656_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=E58irWYLQKcAX8iCuAx&_nc_ht=scontent.fkhi16-1.fna&oh=00_AfBNX9GiMC04v33cA-8eq03rNLAD1O-pe9gmupXXFQbxkA&oe=63E4692D" style={{ width: '50px', height: '50px' }} />
                            <div className="ps-3">
                                <h5 className="mb-1">Sehar Iqbal</h5>
                                <small>House wife</small>
                            </div>
                        </div>
                    </div> */}


                </OwlCarousel>
            </div>
        </div>
    )
}
