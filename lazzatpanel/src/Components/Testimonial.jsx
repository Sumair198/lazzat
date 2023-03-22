import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableRow, styled } from "@mui/material"
import axios from "axios";
import 'bootstrap-icons/font/bootstrap-icons.css';

const StyledTable = styled(Table)
    `
width : 90%;
margin : 40px auto 0 auto
`
const Thead = styled(TableRow)`
    background : #303030; 
    & > th
    {
        font-size : 20px; 
        color : #fff
    }

`

const Tcell = styled(TableCell)`
width : 30%;
`



export default function Testimonail() {

    const [testimonials, setTestimonials] = useState([])

    useEffect(() => {
        getTestiData()
    },[])


    const getTestiData = async () => {
        const response = await getDataTesti()
        setTestimonials(response.data)
    }

    const getDataTesti = async () => {
        try {
            return await axios.get(`http://localhost:4000/gettestimonials`)
        }
        catch (err) {
            console.log('Error while calling api get admin testimonials data menu', err)
        }
    }

    const delbtn = async (id) =>
    {
        console.log(id)
        try {
            return await axios.delete(`http://localhost:4000/deltestimonial/${id}`)
        }
        catch (err) {
            console.log('Error while calling api Delete testimonial', err)
        }
    }

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
                        </ul>
                        <Button class="btn btn-outline-info" type="submit" component={Link} to={`/addtestimonial`}>+Add Testimonial</Button>
                    </div>
                </div>
            </nav>
            <h1>Testimonial</h1>

            <StyledTable>
                <TableHead >
                    <Thead>
                        <Tcell>CLIENT TEXT</Tcell>
                        <TableCell>NAME</TableCell>
                        <TableCell>PROFESSION</TableCell>
                        <TableCell>PHOTO</TableCell>
                        <TableCell></TableCell>
                    </Thead>
                </TableHead>
                <TableBody>
                    {
                        testimonials.map(adminTesti => (

                            <TableRow key={adminTesti._id}>
                                <TableCell>{adminTesti.clientText}</TableCell>
                                <TableCell>{adminTesti.clientName}</TableCell>
                                <TableCell>{adminTesti.Profession}</TableCell>
                                <TableCell>{adminTesti.photoTestimonial}</TableCell>
                                <TableCell>
                                    <Button component={Link} to={`/edittestimonial/${adminTesti._id}`}>
                                        <i class="bi bi-pencil-square"></i>
                                    </Button>
                                    <Button onClick={()=> delbtn(adminTesti._id)}>
                                        <i class="bi bi-trash-fill"></i>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </StyledTable>

        </>
    )
}

