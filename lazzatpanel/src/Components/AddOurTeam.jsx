import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export default function AddOurTeam() {


    const navigate = useNavigate()
    const formik = useFormik(
        {
            initialValues: {
                teamImage: '',
                teamName: '',
                teamTitle: '',
                teamFacebook: '',
                teamInsta: '',
                teamWhatsapp: ''
            },
            validationSchema: Yup.object({
                teamImage: Yup
                    .string()
                    .required('Image is required'),
                teamName: Yup
                    .string().required('Please enter a name'),
                teamTitle: Yup
                    .string().required('Please enter a title'),
                teamFacebook: Yup
                    .string()
                    .required('Please enter facebook link'),
                teamInsta: Yup
                    .string()
                    .required('Please enter insta link'),
                teamWhatsapp: Yup
                    .string()
                    .required('Please enter whatsapp link'),
            }),
            onSubmit: async (values) => {
                console.log(values)

                const dataf = new FormData();

                dataf.append('teamImage', values.teamImage)
                dataf.append('teamName', values.teamName)
                dataf.append('teamTitle', values.teamTitle)
                dataf.append('teamFacebook', values.teamFacebook)
                dataf.append('teamInsta', values.teamInsta)
                dataf.append('teamWhatsapp', values.teamWhatsapp)

                try {
                    await axios.post(`http://localhost:4000/createourteam`, dataf)
                    navigate('/ourteam')
                }
                catch (err) {
                    console.log('Error while calling api add team post', err)
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
                            {/* <li class="nav-item">
                        <a class="nav-link active text-light" aria-current="page" href="#">DASHBOARD</a>
                    </li> */}
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
                            <li class="nav-item">
                                <a class="nav-link active text-light" aria-current="page" href="/ourteam">OUR TEAM</a>
                            </li>
                        </ul>

                    </div>
                </div>

            </nav>

            <h1>Add Our Team</h1>

            <form onSubmit={formik.handleSubmit}>
            <Button variant="contained" component="label">
                    <input type="file" name='teamImage' accept="image/*" id='teamImage' onChange={(e) =>
                        formik.setFieldValue('teamImage', e.target.files[0])} label="teamImage" />
                </Button>
                {formik.errors.teamImage && formik.touched.teamImage ? (<p>{formik.errors.teamImage}</p>) : null}
                <br /><br />

                <TextField type='text'  name='teamName' id='teamName' onChange={formik.handleChange} value={formik.values.teamName} label="Name" variant="standard"  />
                {formik.errors.teamName && formik.touched.teamName ? (<p>{formik.errors.teamName}</p>) : null}
                <br /> <br />

                <TextField type='text' name='teamTitle' id='teamTitle' onChange={formik.handleChange} value={formik.values.teamTitle} label="title" variant="standard" />
                {formik.errors.teamTitle && formik.touched.teamTitle ? (<p>{formik.errors.teamTitle}</p>) : null}
                <br /> <br />

                <TextField type='url' name='teamFacebook' id='teamFacebook' onChange={formik.handleChange} value={formik.values.teamFacebook} label="Facebook" variant="standard" />
                {formik.errors.teamFacebook && formik.touched.teamFacebook ? (<p>{formik.errors.teamFacebook}</p>) : null}
                <br /> <br />

                <TextField type='url' name='teamInsta' id='teamInsta' onChange={formik.handleChange} value={formik.values.teamInsta} label="Instagram" variant="standard" />
                {formik.errors.teamInsta && formik.touched.teamInsta ? (<p>{formik.errors.teamInsta}</p>) : null}
                <br /> <br />

                <TextField type='url' name='teamWhatsapp' id='teamWhatsapp' onChange={formik.handleChange} value={formik.values.teamWhatsapp} label="WhatsApp" variant="standard" />
                {formik.errors.teamWhatsapp && formik.touched.teamWhatsapp ? (<p>{formik.errors.teamWhatsapp}</p>) : null}
                <br /> <br />

                <Button type='submit' variant="contained">Submit</Button>
                <br />
                <br />
            </form>
        </>

    )

}
