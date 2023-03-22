import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// import axios from 'axios'
// import { useNavigate, useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

export default function EditTestimonials() {

    // const [edit, setEdit] = useState('')
    // const navigate = useNavigate()
    // const { id } = useParams()

    // useEffect(() => {
    //     loadEditMenu();
    // }, [])


    // const loadEditMenu = async () => {
    //     const response = await getSingleMenu(id)
    //     console.log(response.data)
    //     setEdit(response.data)

    // }

    // const getSingleMenu = async (id) => {
    //     try {
    //         return await axios.get(`http://localhost:4000/editmenu/${id}`)
    //     }
    //     catch (err) {
    //         console.log('Error while calling api get single menu', err)
    //     }
    // }


    const formik = useFormik(
        {
            initialValues: {
                clientText: '',
                clientName: '',
                Profession: '',
                photoTestimonial: ''
            },

            validationSchema: Yup.object({
                clientText: Yup
                    .string().min(2).max(30)
                    .required('Please enter a text'),
                clientName: Yup
                    .string().required('Please enter a name'),
                Profession: Yup
                    .string().required('Please enter a profession'),
                photoTestimonial: Yup
                    .string().min(2).max(30)
                    .required('A image is Required')
            }),
            onSubmit: async (values) => {
                console.log(values)

                // const dataf = new FormData();

                // dataf.append('name', values.name)
                // dataf.append('description', values.description)
                // dataf.append('image', values.image)
                // dataf.append('price', values.price)
                // dataf.append('status', values.status)
                // dataf.append('is_featured', values.is_featured)
                // dataf.append('category', values.category)

                // try {
                //     await axios.post(`http://localhost:4000/upload`, dataf)
                //     navigate('/adminmenu')
                // }
                // catch (err) {
                //     console.log('Error while calling api menu post', err)
                // }

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
                        </ul>
                    </div>
                </div>
            </nav>
            <h1>Edit Testimonial</h1>

            <form onSubmit={formik.handleSubmit}>


                <TextField type='text' name='clientText' id='clientText' onChange={formik.handleChange} value={formik.values.clientText} label="Client text" variant="standard" />
                {formik.errors.clientText && formik.touched.clientText ? (<p>{formik.errors.clientText}</p>) : null}
                <br /> <br />

                <TextField type='text' name='clientName' id='clientName' onChange={formik.handleChange} value={formik.values.clientName} label="Client name" variant="standard" />
                {formik.errors.clientName && formik.touched.clientName ? (<p>{formik.errors.clientName}</p>) : null}
                <br /> <br />


                <TextField type='text' name='Profession' id='Profession' onChange={formik.handleChange} value={formik.values.Profession} label="Profession" variant="standard" />
                {formik.errors.Profession && formik.touched.Profession ? (<p>{formik.errors.Profession}</p>) : null}
                <br /> <br />

                {/* <TextField type='file' name='image' id='image' onChange={formik.handleChange} value={formik.values.image} label="image" variant="standard" /> */}
                <Button variant="contained" component="label">
                    <input type="file" name='photoTestimonial' accept="image/*" id='photoTestimonial' onChange={(e) =>
                        formik.setFieldValue('photoTestimonial', e.target.files[0])} label="photoTestimonial" value={formik.values.photoTestimonial} />
                </Button>
                {formik.errors.image && formik.touched.image ? (<p>{formik.errors.image}</p>) : null}
                <br /><br />

                <Button type='submit' variant="contained">Edited</Button>
                <br />
                <br />
            </form>
        </>



    )
}