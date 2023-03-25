import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { Table, TableBody, TableCell, TableHead, TableRow, styled } from "@mui/material"
import axios from "axios";

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

export default function OurTeam() {

    const [OurTeam, setOurTeam] = useState([])

    useEffect(() => {
        getData()
    },[])


    const getData = async () => {
        const response = await getDataTeam()
        setOurTeam(response.data)
    }

    const getDataTeam = async () => {
        try {
            return await axios.get(`http://localhost:4000/getOurTeam`)
        }
        catch (err) {
            console.log('Error while calling api get admin chefs team data menu', err)
        }
    }


   

    const delbtn = async(id) =>
    {
        try {
            return await axios.delete(`http://localhost:4000/deleteteam/${id}`)
        }
        catch (err) {
            console.log('Error while calling api Delete team', err)
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

                        <Button class="btn btn-outline-info" type="submit" component={Link} to={`/addourteam`}>+Add Team</Button>

                    </div>
                </div>
            </nav>

            <h1>Our Team</h1>



            <StyledTable>
                <TableHead >    
                    <Thead>
                        <TableCell>IMAGE</TableCell>
                        <TableCell>NAME</TableCell>
                        <TableCell>TITLE</TableCell>
                        <TableCell>FACEBOOK</TableCell>
                        <TableCell>INSTAGRAM</TableCell>
                        <TableCell>WHATSAPP</TableCell>
                        <TableCell></TableCell>
                    </Thead>
                </TableHead>
                <TableBody>
                    {
                        OurTeam.map(adminTeam => (

                            <TableRow key={adminTeam._id}>
                                <TableCell>{adminTeam.teamImage}</TableCell>
                                <TableCell>{adminTeam.teamName}</TableCell>
                                <TableCell>{adminTeam.teamTitle}</TableCell>
                                <TableCell>{adminTeam.teamFacebook}</TableCell>
                                <TableCell>{adminTeam.teamInsta}</TableCell>
                                <TableCell>{adminTeam.teamWhatsapp}</TableCell>
                                <TableCell>
                                    <Button component={Link} to={`/editteam/${adminTeam._id}`}>
                                        <i class="bi bi-pencil-square"></i>
                                    </Button>
                                    <Button onClick={()=> delbtn(adminTeam._id)}>
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