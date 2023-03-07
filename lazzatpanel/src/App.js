
import './App.css';
import Login from './Components/Login';
import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <>
    {/* <Home /> */}
    {/* <Login/> */}
    <BrowserRouter>
        <Routes> 
          <Route exact path='/' element={<Login/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
