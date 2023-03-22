import './App.css';
import Login from './Components/Login';
import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Dashboard from './Components/Dashboard';
import AddMenu from './Components/AddMenu';
import AdminMenu from './Components/AdminMenu';
import EditMenu from './Components/EditMenu';
import AdminBooking from './Components/AdminBooking';
import EditBooking from './Components/EditBooking';
import Testimonail from './Components/Testimonial';
import AddTestimonials from './Components/AddTestimonials';
import EditTestimonials from './Components/EditTestimonials';
import OurTeam from './Components/OurTeam';
import AddOurTeam from './Components/AddOurTeam';

function App() {
  return (
    <>
    {/* <Home /> */}
    {/* <Login/> */}
    <BrowserRouter>
        <Routes> 
          <Route exact path='/' element={<Login/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/addmenu' element={<AddMenu/>} />
          <Route path='/adminmenu' element={<AdminMenu/>} />
          <Route path='/editmenu/:id' element={<EditMenu />} />
          <Route path='/booking' element={<AdminBooking/>} />
          <Route path='/editbooking/:id' element={<EditBooking/>} />
          <Route path='/testimonials' element={<Testimonail />} />
          <Route path='/addtestimonial' element={<AddTestimonials />} />
          <Route path='/edittestimonial/:id' element={<EditTestimonials />} />
          <Route path='/ourteam' element={<OurTeam />} />
          <Route path='/addourteam' element={<AddOurTeam />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
