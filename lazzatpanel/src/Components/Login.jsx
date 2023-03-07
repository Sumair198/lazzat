import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


export default function Login() {
    let navigate = useNavigate();
    
    const formik = useFormik(
        {
            initialValues: {
                email: '',
                password: ''
            },
             validationSchema: Yup.object({
                email: Yup
                    .string().email()
                    .required('Please enter a email'),
                password: Yup
                    .string().min(6).required('Please enter a password'),   
            }),
            onSubmit: async(values) => {
                console.log(values)
                try {
                    // return await axios.post(`http://localhost:4000/register`, values)
                    return  axios.post(`http://localhost:4000/login`, values).then((res)=>
                    {
                        if(res.data === 'Logined')
                        {
                            navigate('/dashboard') 
                        }  
                    })
                }
                catch (err) {
                    console.log('Error while calling api register user post', err)
                }
            }
        }
    ) 
    return (
        <>
             <a href="/" className="navbar-brand p-0">
                    
                    <img src="lz-logo.png" alt="Logo" style={{width:'200px'}} />
                </a>

            <form onSubmit={formik.handleSubmit}>

                <TextField type='email' name='email' id='email' onChange={formik.handleChange} value={formik.values.email} label="Email" variant="standard" />
                {formik.errors.email && formik.touched.email ? (<p>{formik.errors.email}</p>) : null}
                <br /> <br />

                <TextField type='password' name='password' id='password' onChange={formik.handleChange} value={formik.values.password} label="Password" variant="standard" />
                {formik.errors.password && formik.touched.password ? (<p>{formik.errors.password}</p>) : null}
                <br /> <br />
                
                <Button type='submit' variant="contained"  >Submit</Button>
                <br />
                <br />
            </form>
        </>
    )
}
//work