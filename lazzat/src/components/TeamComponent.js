import React, { useEffect, useState } from 'react';
import { ourTeamData } from '../service/api';
export default function TeamComponent() {


const [ourTeam , setOurTeam] = useState([])

    useEffect(()=>
    {
        getOurTeam()
    },[])
    const getOurTeam =  async() =>
    {
        const response = await ourTeamData()
        setOurTeam(response.data)

    }

    return (
        <div className="container-xxl pt-5 pb-3">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 className="section-title ff-secondary text-center text-primary fw-normal">Team Members</h5>
                    <h1 className="mb-5">Our Master Chefs</h1>
                </div>
                <div className="row g-4">
                    {
                        ourTeam.map(masterChefs=>(
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item text-center rounded overflow-hidden">
                                <div className="rounded-circle overflow-hidden m-4">
                                    <img className="img-fluid" src={`uploads/OurTeam/${masterChefs.teamImage}`} alt="" />
                                </div>
                                <h5 className="mb-0">{masterChefs.teamName}</h5>
                                <small>{masterChefs.teamTitle}</small>
                                <div className="d-flex justify-content-center mt-3">
                                    <a className="btn btn-square btn-primary mx-1" href={masterChefs.teamFacebook}><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href={masterChefs.teamInsta}><i className="fab fa-instagram"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href={masterChefs.teamWhatsapp}><i className="fab fa-whatsapp"></i></a>
                                </div>
                            </div>
                        </div>
                        ))
                    }
                   
                    {/* <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="team-item text-center rounded overflow-hidden">
                            <div className="rounded-circle overflow-hidden m-4">
                                <img className="img-fluid" src="img/head-chef.jpeg" alt="" />
                            </div>
                            <h5 className="mb-0">Mrs. Roma Khalid</h5>
                            <small>Sr. Chef</small>
                            <div className="d-flex justify-content-center mt-3">
                                <a className="btn btn-square btn-primary mx-1" href="https://www.facebook.com/Lazzateziyafat/"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href="https://www.instagram.com/lazzateziyafat/"><i className="fab fa-instagram"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href="https://wa.me/923143053649"><i className="fab fa-whatsapp"></i></a>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="team-item text-center rounded overflow-hidden">
                            <div className="rounded-circle overflow-hidden m-4">
                                <img className="img-fluid" src="img/chef2.jpeg" alt="" />
                            </div>
                            <h5 className="mb-0">Mrs. Maryam Ejaz</h5>
                            <small>Chef</small>
                            <div className="d-flex justify-content-center mt-3">
                                <a className="btn btn-square btn-primary mx-1" href="https://www.facebook.com/Lazzateziyafat/"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href="https://www.instagram.com/lazzateziyafat/"><i className="fab fa-instagram"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href="https://wa.me/923143053649"><i className="fab fa-whatsapp"></i></a>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="team-item text-center rounded overflow-hidden">
                            <div className="rounded-circle overflow-hidden m-4">
                                <img className="img-fluid" src="img/chef3.jpeg" alt="" />
                            </div>
                            <h5 className="mb-0">Ms. Nimra Ehsan</h5>
                            <small>Chef</small>
                            <div className="d-flex justify-content-center mt-3">
                                <a className="btn btn-square btn-primary mx-1" href="https://www.facebook.com/Lazzateziyafat/"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href="https://www.instagram.com/lazzateziyafat/"><i className="fab fa-instagram"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href="https://wa.me/923143053649"><i className="fab fa-whatsapp"></i></a>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
