import React, { useEffect, useState } from "react";
import { Button, Table, TableBody, TableCell, TableHead, TableRow,styled } from "@mui/material"
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

export default function AdminMenu() {

    const [Menu, setMenu] = useState([])

    useEffect(() => {
        getMenu()
    }, [])

    const getMenu = async () => {
        const responseUsers = await getAdminMenu()
        setMenu(responseUsers.data)
    }

    const getAdminMenu = async () => {

        try {
            return await axios.get(`http://localhost:4000/menu`)
        }
        catch (err) {
            console.log('Error while calling api get admin menu', err)
        }
    }
//Delete menu individual
    const delbtn = async (id) => {
        console.log(id)
        try {
            return await axios.delete(`http://localhost:4000/delete/${id}`)
        }
        catch (err) {
            console.log('Error while calling api Delete Menu', err)
        }

    }
    //Edit Menu
    // const edtbtn = () => {
    //     console.log('edited!!')

    // }

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
                                <a class="nav-link active text-light" aria-current="page" href="#">MENU</a>
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

                        <button class="btn btn-outline-info" type="submit">+Add Menu</button>

                    </div>
                </div>
            </nav>
            <h1>MENU</h1>

            <StyledTable>
                <TableHead >
                    <Thead>
                        <TableCell>NAME</TableCell>
                        <TableCell>DESCRIPTION</TableCell>
                        <TableCell>IMAGE</TableCell>
                        <TableCell>PRICE</TableCell>
                        <TableCell>STATUS</TableCell>
                        <TableCell>IS_FEATURED</TableCell>
                        <TableCell>CATEGORY</TableCell>
                        <TableCell></TableCell>
                    </Thead>
                </TableHead>
                <TableBody>
                    {
                        Menu.map(adminmenu => (

                            <TableRow key={adminmenu._id}>
                                <TableCell>{adminmenu.name}</TableCell>
                                <TableCell>{adminmenu.description}</TableCell>
                                <TableCell>{adminmenu.image}</TableCell>
                                <TableCell>{adminmenu.price}</TableCell>
                                <TableCell>{String(adminmenu.status)}</TableCell>
                                <TableCell>{String(adminmenu.is_featured)}</TableCell>
                                <TableCell>{adminmenu.category}</TableCell>

                                <TableCell>
                                    <Button component={Link} to={`/editmenu/${adminmenu._id}`}>
                                        <i class="bi bi-pencil-square"></i>
                                    </Button>
                                    <Button onClick={() => delbtn(adminmenu._id)}>
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