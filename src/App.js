// import logo from './logo.svg';
import CustomNavbar from './components/Navbar'
import Home from './components/Home'
import { Container } from 'reactstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Logout from './components/Logout';
import Registeration from './components/Registeration';
import { ToastContainer } from 'react-toastify';
import { Protector } from './helper';

function App() {
  return (
    <div className='bg-[#020024] h-[100vh]'>
    <Container className=' custom-nav'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Protector Component={Home}/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/registeration' element={<Registeration/>}/>
      </Routes>
      <ToastContainer/>
      </BrowserRouter>
    </Container>
    </div>
  );
}

export default App;
