import React  from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios'
import { useNavigate,useParams } from "react-router-dom";
import { useEffect ,useState } from "react";






export default function EditMenu() {


    // const defaultValue  = {
    //     name: '',
    //     description: '',
    //     image: '',
    //     price: '',
    //     status: '',
    //     is_featured: '',
    //     category: ''
    
    // }
    const [edit ,setEdit] = useState('')
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(()=>
    {
        loadEditMenu();
    },  [])
    
   

    const loadEditMenu = async () =>
    {
       const response =  await getSingleMenu(id)
       console.log(response.data)
       setEdit(response.data) 
       
    }

    const getSingleMenu = async(id) =>
    {
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
                name: '',
                description: '',
                image: '',
                price: '',
                status: '',
                is_featured: '',
                category: ''
            }  ,
            
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
            onSubmit: async (values) => {
                console.log(values)

                const dataf = new FormData();

                dataf.append('name', values.name)
                dataf.append('description', values.description)
                dataf.append('image', values.image)
                dataf.append('price', values.price)
                dataf.append('status', values.status)
                dataf.append('is_featured', values.is_featured)
                dataf.append('category', values.category)

                try {
                    await axios.post(`http://localhost:4000/upload`, dataf)
                    navigate('/adminmenu')
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
            <h2>Edit Menu</h2>

            <form onSubmit={formik.handleSubmit}>


                <TextField type='text' name='name' id='name' onChange={formik.handleChange} value={edit.name} label="Name" variant="standard" />
                {formik.errors.name && formik.touched.name ? (<p>{formik.errors.name}</p>) : null}
                <br /> <br />

                <TextField type='text' name='description' id='description' onChange={formik.handleChange} value={edit.description} label="Description" variant="standard" />
                {formik.errors.description && formik.touched.description ? (<p>{formik.errors.description}</p>) : null}
                <br /> <br />

                {/* <TextField type='file' name='image' id='image' onChange={formik.handleChange} value={formik.values.image} label="image" variant="standard" /> */}
                <Button variant="contained" component="label">
                    <input type="file" name='image' accept="image/*" id='image' onChange={(e) =>
                        formik.setFieldValue('image', e.target.files[0])} label="image" value={edit.image} />
                </Button>
                {formik.errors.image && formik.touched.image ? (<p>{formik.errors.image}</p>) : null}
                <br /><br />

                <TextField type='text' name='price' id='price' onChange={formik.handleChange} value={edit.price} label="price" variant="standard" />
                {formik.errors.price && formik.touched.price ? (<p>{formik.errors.price}</p>) : null}
                <br /><br />

                <TextField type='text' name='status' id='status' onChange={formik.handleChange} value={edit.status} label="status" variant="standard" />
                {formik.errors.status && formik.touched.status ? (<p>{formik.errors.status}</p>) : null}
                <br /><br />

                <TextField type='text' name='is_featured' id='is_featured' onChange={formik.handleChange} value={edit.is_featured} label="is_featured" variant="standard" />
                {formik.errors.is_featured && formik.touched.is_featured ? (<p>{formik.errors.is_featured}</p>) : null}
                <br /><br />

                <TextField type='text' name='category' id='category' onChange={formik.handleChange} value={edit.category} label="category" variant="standard" />
                {formik.errors.category && formik.touched.category ? (<p>{formik.errors.category}</p>) : null}
                <br /><br />

                <Button type='submit' variant="contained">Edited</Button>
                <br />
                <br />
            </form>
        </>
    )
}