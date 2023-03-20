import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export default function AddTestimonials() {


    const navigate = useNavigate()
    const formik = useFormik(
        {
            initialValues: {
                clientText: '',
                clientName: '',
                Profession: '',
                photoTestimonial: '',
            },
            validationSchema: Yup.object({
                clientText: Yup
                    .string().min(2)
                    .required('Please enter a Text/Comments'),
                clientName: Yup
                    .string().required('Please enter a client name'),
                Profession: Yup
                    .string().required('A Image is profession'),
                photoTestimonial: Yup
                    .string().min(2).max(30)
                    .required('Image is required'),
            }),
            onSubmit: async (values) => {
                console.log(values)

                const dataf = new FormData();

                dataf.append('clientText', values.clientText)
                dataf.append('clientName', values.clientName)
                dataf.append('Profession', values.Profession)
                dataf.append('photoTestimonial', values.photoTestimonial)

                try {
                    await axios.post(`http://localhost:4000/testing`, dataf)
                    navigate('/testimonials')
                }
                catch (err) {
                    console.log('Error while calling api menu post', err)
                }
            }
        }
    )
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light  bg-dark ">
                <div class="container-fluid ">
                    <a class="navbar-brand" href="#"> <img src="lz-logo.png" alt="Logo" style={{ width: '120px' }} /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active text-light" aria-current="page" href="/dashboard">DASHBOARD</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active text-light" aria-current="page" href="/adminmenu">MENU</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active text-light" aria-current="page" href="/addmenu">ADD MENU</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active text-light" aria-current="page" href="/booking">BOOKINGS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active text-light" aria-current="page" href="/testimonials">TESTIMONIALS</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <h1>Add Testimonials</h1>

            <form onSubmit={formik.handleSubmit}>

                <TextField   type='text' maxRows={3} name='clientText' id='clientText' onChange={formik.handleChange} value={formik.values.clientText} label="Text Area" variant="standard" multiline  />
                {formik.errors.clientText && formik.touched.clientText ? (<p>{formik.errors.clientText}</p>) : null}
                <br /> <br />

                <TextField type='text' name='clientName' id='clientName' onChange={formik.handleChange} value={formik.values.clientName} label="Client Name" variant="standard" />
                {formik.errors.clientName && formik.touched.clientName ? (<p>{formik.errors.clientName}</p>) : null}
                <br /> <br />


                <TextField type='text' name='Profession' id='Profession' onChange={formik.handleChange} value={formik.values.Profession} label="Profession" variant="standard" />
                {formik.errors.Profession && formik.touched.Profession ? (<p>{formik.errors.Profession}</p>) : null}
                <br /> <br />

                <Button variant="contained" component="label">
                    <input type="file" name='photoTestimonial' accept="image/*" id='photoTestimonial' onChange={(e) =>
                        formik.setFieldValue('photoTestimonial', e.target.files[0])} label="image" />
                </Button>
                {formik.errors.photoTestimonial && formik.touched.photoTestimonial ? (<p>{formik.errors.photoTestimonial}</p>) : null}
                <br /><br />  

                <Button type='submit' variant="contained">Submit</Button>
                <br />
                <br />
            </form>
        </>

    )
}