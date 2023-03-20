import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";




export default function EditBooking() {


    // const defaultValue  = {
    //     name: '',
    //     description: '',
    //     image: '',
    //     price: '',
    //     status: '',
    //     is_featured: '',
    //     category: ''

    // }
    const [edit, setEdit] = useState('')
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        loadEditMenu();
    }, [])



    const loadEditMenu = async () => {
        const response = await getSingleMenu(id)
        console.log(response.data)
        setEdit(response.data)

    }

    const getSingleMenu = async (id) => {
        try {
            return await axios.get(`http://localhost:4000/editmenu/${id}`)
        }
        catch (err) {
            console.log('Error while calling api get single menu', err)
        }
    }


    const formik = useFormik(
        {
            initialValues: {
                yourName: '',
                phoneNumber: '',
                requiredOn: '',
                noOfPerson: '',
                yourRequest: '',
            },

            validationSchema: Yup.object({
                yourName: Yup
                    .string().min(2).max(30)
                    .required('Please enter a name'),
                phoneNumber: Yup
                    .string().required('Please enter a phone no'),
                requiredOn: Yup
                    .string().required('Please enter date and time'),
                noOfPerson: Yup
                    .string().min(2).max(30)
                    .required('Please enter no of person'),
                yourRequest: Yup
                    .string().min(2).max(30)
                    .required('Please enter a request'),
            }),
            onSubmit: async (values) => {
                console.log(values)

                const dataf = new FormData();

                dataf.append('name', values.yourName)
                dataf.append('description', values.phoneNumber)
                dataf.append('image', values.requiredOn)
                dataf.append('price', values.noOfPerson)
                dataf.append('status', values.yourRequest)

                try {
                    await axios.post(`http://localhost:4000/`, dataf)
                    navigate('/booking')
                }
                catch (err) {
                    console.log('Error while calling api menu post', err)
                }

            }

        }
    )

    // console.log(edit.name)
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
            <h2>Edit Booking</h2>

            <form onSubmit={formik.handleSubmit}>

                <TextField type='text' name='yourName' id='yourName' onChange={formik.handleChange} value={edit.yourName} label="Name" variant="standard" />
                {formik.errors.yourName && formik.touched.yourName ? (<p>{formik.errors.yourName}</p>) : null}
                <br /> <br />

                <TextField type='text' name='phoneNumber' id='phoneNumber' onChange={formik.handleChange} value={edit.phoneNumber} label="Phone Number" variant="standard" />
                {formik.errors.phoneNumber && formik.touched.phoneNumber ? (<p>{formik.errors.phoneNumber}</p>) : null}
                <br /> <br />

                <TextField type='text' name='requiredOn' id='requiredOn' onChange={formik.handleChange} value={edit.requiredOn} label="Date & time" variant="standard" />
                {formik.errors.requiredOn && formik.touched.requiredOn ? (<p>{formik.errors.requiredOn}</p>) : null}
                <br /><br />

                <TextField type='text' name='noOfPerson' id='noOfPerson' onChange={formik.handleChange} value={edit.noOfPerson} label="No Of Person" variant="standard" />
                {formik.errors.noOfPerson && formik.touched.noOfPerson ? (<p>{formik.errors.noOfPerson}</p>) : null}
                <br /><br />

                <TextField type='text' name='yourRequest' id='yourRequest' onChange={formik.handleChange} value={edit.yourRequest} label="Request" variant="standard" />
                {formik.errors.yourRequest && formik.touched.yourRequest ? (<p>{formik.errors.yourRequest}</p>) : null}
                <br /><br />
                <Button type='submit' variant="contained">Edited</Button>
                <br />
                <br />
            </form>
        </>
    )
}