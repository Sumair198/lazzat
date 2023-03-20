import React from "react";

export default function Dashboard() {


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
                        </ul>

                        <button class="btn btn-outline-info" type="submit">+Add Menu</button>

                    </div>
                </div>
            </nav>
            <h1>DASHBOARD</h1>
        </>
    )
}