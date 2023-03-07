import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// import axios from 'axios'





export default function Dashboard() {
    
    const formik = useFormik(
        {
            initialValues: {
                name: '',
                description: '',
                image: '',
                price: '',
                status: '',
                is_featured: '',
                category: ''
            },
             validationSchema: Yup.object({
                name: Yup
                    .string().min(2).max(30)
                    .required('Please enter a name'),
                description: Yup
                    .string().required('Please enter a description'),
                image: Yup
                    .string().required('A Image is Required'),
                price: Yup
                    .string().min(2).max(30)
                    .required('Please enter a price'),
                status: Yup
                    .string().min(2).max(30)
                    .required('Please enter a status'),    
                is_featured: Yup
                    .string().min(2).max(30)
                    .required('Please enter a is_featured'),
                category: Yup
                    .string().min(2).max(30)
                    .required('Please enter a category'),   
            }),
            onSubmit: async(values) => {
                console.log(values)
                // try {
                //     return await axios.post(`http://localhost:4000/upload`, values)
                // }
                // catch (err) {
                //     console.log('Error while calling api admin post', err)
                // }
                

            }
        }
    )

    return (
        <>
             <a href="/" className="navbar-brand p-0">
                    
                    <img src="lz-logo.png" alt="Logo" style={{width:'200px'}} />
                </a>

            <form onSubmit={formik.handleSubmit}>

                <TextField type='text' name='name' id='name' onChange={formik.handleChange} value={formik.values.name} label="Name" variant="standard" />
                {formik.errors.name && formik.touched.name ? (<p>{formik.errors.name}</p>) : null}
                <br /> <br />

                <TextField type='text' name='description' id='description' onChange={formik.handleChange} value={formik.values.description} label="Description" variant="standard" />
                {formik.errors.description && formik.touched.description ? (<p>{formik.errors.description}</p>) : null}
                <br /> <br />

                {/* <TextField type='file' name='image' id='image' onChange={formik.handleChange} value={formik.values.image} label="image" variant="standard" /> */}
                <Button variant="contained" component="label">
                    Image Upload
                    <input hidden accept="image/*" multiple type="file" name='image' id='image' onChange={formik.handleChange} value={formik.values.image} label="image" />
                </Button>
                {formik.errors.image && formik.touched.image ? (<p>{formik.errors.image}</p>) : null}
                <br /><br />

                <TextField type='text' name='price' id='price' onChange={formik.handleChange} value={formik.values.price} label="price" variant="standard" />
                {formik.errors.price && formik.touched.price ? (<p>{formik.errors.price}</p>) : null}
                <br /><br />

                <TextField type='text' name='status' id='status' onChange={formik.handleChange} value={formik.values.status} label="status" variant="standard" />
                {formik.errors.status && formik.touched.status ? (<p>{formik.errors.status}</p>) : null}
                <br /><br />

                <TextField type='text' name='is_featured' id='is_featured' onChange={formik.handleChange} value={formik.values.is_featured} label="is_featured" variant="standard" />
                {formik.errors.is_featured && formik.touched.is_featured ? (<p>{formik.errors.is_featured}</p>) : null}
                <br /><br />

                <TextField type='text' name='category' id='category' onChange={formik.handleChange} value={formik.values.category} label="category" variant="standard" />
                {formik.errors.category && formik.touched.category ? (<p>{formik.errors.category}</p>) : null}
                <br /><br />
        
                <Button type='submit' variant="contained">Submit</Button>
                <br />
                <br />
            </form>
        </>
    )
}