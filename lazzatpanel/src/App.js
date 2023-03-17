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

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
