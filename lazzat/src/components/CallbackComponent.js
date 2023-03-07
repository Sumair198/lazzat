import React, { useRef, useState } from 'react';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import ReCAPTCHA from "react-google-recaptcha";

export default function CallbackComponent() {

    const [verified, setVerified] = useState('')
    const captchaRef = useRef()
    const Site = '6LcyYp4kAAAAACFdpY370Y3BY0ovyPLiU_FNViNR'
    const Secret = '6LcyYp4kAAAAAKKSOj_1Bt3QKkdz6z9F3TXjNWgJ'

    const formik = useFormik(
        {
            initialValues: {
                yourName: '',
                phoneNumber: '',
                requiredOn: '',
                noOfPerson: '',
                yourRequest: ''
            },
            validationSchema: Yup.object({
                yourName: Yup
                    .string().min(2).max(30)
                    .required('Please enter a name'),
                phoneNumber: Yup
                    .string().required('Please enter a number'),
                requiredOn: Yup
                    .string()
                    .required('Please select date and time'),
                noOfPerson: Yup
                    .string()
                    .required('Please select no of person'),
                yourRequest: Yup
                    .string()
                    .required('Please enter request'),

            }),
            onSubmit:  (values) => {
                console.log(values)
                const token = captchaRef.current.getValue()
                console.log(token)
                const art = {secret:Secret , response:token}
                axios.post(`https://www.google.com/recaptcha/api/siteverify`, art
                ).then(async({data})=>
                {
                    console.log(data);
                    if(data.success)
                    {
                        try {
                            return await axios.post(`http://localhost:4000/booknow `, values,verified,captchaRef.current.reset())
                            
                        }
                        catch (err) {
                            console.log('Error while calling api', err)
                        }
                    }else{
                        return console.log('Invalid recaptcha!!!')
                    }
                }).catch(error=>
                {
                    console.log(error.message)
                })  
            }
        }
    )
    
    //Recapcha Function
    function onChange(value) {
        console.log("Captcha value:", value);
        setVerified(value)
      }
    return (
        <>
            <div className="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
                <div className="row g-0">
                    <div className="col-md-6">
                        <div className="video">
                            <button type="button" className="btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                <span></span>
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6 bg-dark d-flex align-items-center">
                        <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
                            <h5 className="section-title ff-secondary text-start text-primary fw-normal">Booking</h5>
                            <h1 className="text-white mb-4">Book Your Event Catering</h1>
                            <form onSubmit={formik.handleSubmit}>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" onChange={formik.handleChange} value={formik.values.yourName} className="form-control" placeholder="Your Name" name='yourName' />
                                            {formik.errors.yourName && formik.touched.yourName ? (<p>{formik.errors.yourName}</p>) : null}
                                            <label htmlFor="name">Your Name </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="phone" onChange={formik.handleChange} value={formik.values.phoneNumber} name='phoneNumber' className="form-control" id="phone" placeholder="Phone Number" />
                                            {formik.errors.phoneNumber && formik.touched.phoneNumber ? (<p>{formik.errors.phoneNumber}</p>) : null}
                                            <label htmlFor="phone">Phone Number</label>
                                         </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating date" id="date3" data-target-input="nearest">

                                            <input type="datetime-local" onChange={formik.handleChange} value={formik.values.requiredOn} name='requiredOn' className="form-control" id="datetime" placeholder="Date & Time" data-target="#date3" />
                                            {formik.errors.requiredOn && formik.touched.requiredOn ? (<p>{formik.errors.requiredOn}</p>) : null}
                                            <label htmlFor="requiredOn">Date & Time</label>
                                        </div>

                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <select className="form-select" id="select1" onChange={formik.handleChange} value={formik.values.noOfPerson} name='noOfPerson'>
                                                <option value="04-10">04-10 Persons</option>
                                                <option value="10-20">10-20 Persons</option>
                                                <option value="20-30">20-30 Persons</option>
                                                <option value="30-40">30-40 Persons</option>
                                                <option value="40+">40+ Persons</option>
                                            </select>
                                            {formik.errors.noOfPerson && formik.touched.noOfPerson ? (<p>{formik.errors.noOfPerson}</p>) : null}
                                            <label htmlFor="select1">No Of People</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea onChange={formik.handleChange} value={formik.values.yourRequest} name='yourRequest' className="form-control" placeholder="Special Request" id="message" style={{ height: '100px' }}></textarea>
                                            {formik.errors.yourRequest && formik.touched.yourRequest ? (<p>{formik.errors.yourRequest}</p>) : null}
                                            <label htmlFor="message">Your Request</label>
                                        </div>
                                    </div>
                                    <ReCAPTCHA
                                        sitekey={Site}
                                        onChange={onChange}
                                        ref={captchaRef}
                                    />,
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit" >Book Now</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="videoModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content rounded-0">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Lazzat Video</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <div className="ratio ratio-16x9">
                                <iframe className="embed-responsive-item" src="" title="hello" id="video" allowFullScreen allowscriptaccess="always"
                                    allow="autoplay"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
//work
