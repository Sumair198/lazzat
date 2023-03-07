import React, { useEffect, useState } from 'react';
import { ourspeciality, maincourse, yummydesserts, chinese } from '../service/api.js';


export default function HomeMenuCom() {


    const [ourspecialityMenu, setourspeciality] = useState([])
    const [maincourseState, setmaincourseState] = useState([])
    const [yummydessertsState, setyummydessertsState] = useState([])
    const [chineseState, setchineseState] = useState([])


    useEffect(() => {
        ourspecialityFun()
        maincourseFun()
        yummydessertsFun()
        chineseFun()
    }, [])

    const ourspecialityFun = async () => {
        const responseData = await ourspeciality()
        setourspeciality(responseData.data)
    }
    const maincourseFun = async () => {
        const responseData = await maincourse()
        setmaincourseState(responseData.data)
    }
    const yummydessertsFun = async () => {
        const responseData = await yummydesserts()
        setyummydessertsState(responseData.data)
    }
    const chineseFun = async () => {
        const responseData = await chinese()
        setchineseState(responseData.data)
    }


    return (

        <>
        
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h5 className="section-title ff-secondary text-center text-primary fw-normal">Food Menu</h5>
                        <h1 className="mb-5">Most Popular Items Home</h1>
                    </div>
                    <div className="tab-className text-center wow fadeInUp" data-wow-delay="0.1s">
                        <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                            <li className="nav-item">
                                <a className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill" href="#tab-1">
                                    <i className="fa fa-star fa-2x text-primary"></i>
                                    <div className="ps-3">
                                        <small className="text-body">Our</small>
                                        <h6 className="mt-n1 mb-0">Speciality</h6>
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill" href="#tab-2">
                                    <i className="fa-solid fa-bell-concierge fa-2x text-primary"></i>
                                    <div className="ps-3">
                                        <small className="text-body">Main</small>
                                        <h6 className="mt-n1 mb-0">Course</h6>
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill" href="#tab-3">
                                    <i className="fa fa-utensil-spoon fa-2x text-primary"></i>
                                    <div className="ps-3">
                                        <small className="text-body">Yummy</small>
                                        <h6 className="mt-n1 mb-0">Desserts</h6>
                                    </div>
                                </a>    
                            </li>
                            <li className="nav-item">
                                <a className="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill" href="#tab-4">
                                    <i className="fa fa-utensils fa-2x text-primary"></i>
                                    <div className="ps-3">
                                        <small className="text-body">Chinese</small>
                                        <h6 className="mt-n1 mb-0">Dishes</h6>
                                    </div>
                                </a>
                            </li>
                        </ul>
                       
                        <div className="tab-content">
                            <div id="tab-1" className="tab-pane fade show p-0 active">
                                <div className="row g-4" >
                                    {
                                        ourspecialityMenu.map(Spmenu => (

                                            <div className="col-lg-6">
                                                <div className="d-flex align-items-center">
                                                    <img className="flex-shrink-0 img-fluid rounded" src={`uploads/${Spmenu.image}`} alt="" style={{ width: '80px' }} />
                                                    <div className="w-100 d-flex flex-column text-start ps-4">
                                                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                            <span>{Spmenu.name}</span>
                                                            <span className="text-primary">Rs.{Spmenu.price}</span>
                                                        </h5>
                                                        <small className="fst-italic">{Spmenu.description}</small>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div id="tab-2" className="tab-pane fade show p-0">
                                <div className="row g-4" >
                                    {
                                        maincourseState.map(mCourse => (
                                            <div className="col-lg-6">
                                                <div className="d-flex align-items-center">
                                                    <img className="flex-shrink-0 img-fluid rounded" src={`uploads/${mCourse.image}`} alt="" style={{ width: '80px' }} />
                                                    <div className="w-100 d-flex flex-column text-start ps-4">
                                                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                            <span>{mCourse.name}</span>
                                                            <span className="text-primary">Rs.{mCourse.price}</span>
                                                        </h5>
                                                        <small className="fst-italic">{mCourse.description}</small>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div id="tab-3" className="tab-pane fade show p-0">
                                <div className="row g-4" >
                                    {
                                        yummydessertsState.map(ymmyD => (
                                            <div className="col-lg-6">
                                                <div className="d-flex align-items-center">
                                                    <img className="flex-shrink-0 img-fluid rounded" src={`uploads/${ymmyD.image}`} alt="" style={{ width: '80px' }} />
                                                    <div className="w-100 d-flex flex-column text-start ps-4">
                                                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                            <span>{ymmyD.name}</span>
                                                            <span className="text-primary">Rs.{ymmyD.price}</span>
                                                        </h5>
                                                        <small className="fst-italic">{ymmyD.description}</small>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                            <div id="tab-4" className="tab-pane fade show p-0">
                                <div className="row g-4" >
                                    {
                                        chineseState.map(chineseD => (
                                            <div className="col-lg-6">
                                                <div className="d-flex align-items-center">
                                                    <img className="flex-shrink-0 img-fluid rounded" src={`uploads/${chineseD.image}`} alt="" style={{ width: '80px' }} />
                                                    <div className="w-100 d-flex flex-column text-start ps-4">
                                                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                            <span>{chineseD.name}</span>
                                                            <span className="text-primary">Rs.{chineseD.price}</span>
                                                        </h5>
                                                        <small className="fst-italic">{chineseD.description}</small>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
//Work