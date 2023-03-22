import React, { useEffect, useState } from "react";
import { Button, Table, TableBody, TableCell, TableHead, TableRow, styled } from "@mui/material"
import axios from "axios";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from "react-router-dom";

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

export default function AdminBooking() {

    const [booking, setBooking] = useState([])

    useEffect(() => {
        getbooking()
    }, [])

    const getbooking = async () => {
        const responseUsers = await getAdminBooking()
        setBooking(responseUsers.data)
    }

    const getAdminBooking = async () => {

        try {
            return await axios.get(`http://localhost:4000/booking`)
        }
        catch (err) {
            console.log('Error while calling api get admin booking', err)
        }
    }

    const delebtn = async (id) => {
        console.log(id)
            try {
                return await axios.delete(`http://localhost:4000/delbooking/${id}`)
            }
            catch (err) {
                console.log('Error while calling api Delete Booking', err)
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
                                <a class="nav-link active text-light" aria-current="page" href="/testimonials">TESTIMONIALS</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link active text-light" aria-current="page" href="/ourteam">OUR TEAM</a>
                            </li>
                        </ul>

                        <button class="btn btn-outline-info" type="submit">+Add Menu</button>

                    </div>
                </div>
            </nav>
            <h2>BOOKINGS</h2>
            <StyledTable>
                <TableHead >
                    <Thead>
                        <TableCell>NAME</TableCell>
                        <TableCell>PHONE-NO</TableCell>
                        <TableCell>DATE-TIME</TableCell>
                        <TableCell>NO-OF-PERSON</TableCell>
                        <TableCell>REQUEST</TableCell>
                        <TableCell></TableCell>
                    </Thead>
                </TableHead>

                <TableBody>
                    {
                        booking.map(adminBooking => (

                            <TableRow key={adminBooking._id}>
                                <TableCell>{adminBooking.yourName}</TableCell>
                                <TableCell>{adminBooking.phoneNumber}</TableCell>
                                <TableCell>{adminBooking.requiredOn}</TableCell>
                                <TableCell>{adminBooking.noOfPerson}</TableCell>
                                <TableCell>{adminBooking.yourRequest}</TableCell>
                                <TableCell>
                                <Button component={Link} to={`/editbooking/${adminBooking._id}`}>
                                        <i class="bi bi-pencil-square"></i>
                                    </Button>
                                    <Button onClick={() => delebtn(adminBooking._id)}>
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