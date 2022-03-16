import logo from './logo.svg';
import './App.css';
import FrontTest from './Component/test';
import SignUpPage from './Component/signup';
import LoginPage from './Component/login';
import {Routes, Route, Link, useNavigate} from 'react-router-dom'

function App() {
  return (
    <div className="App" >
      <nav className='topNav'>
      <Link to={'/'}element={<FrontTest/>}><img className='NavLogo' src='/images/FiresideNavLogoS.png'/> </Link>
        <Link to={'/'} style={{ textDecoration: 'none' , color: 'antiquewhite', top: '10px', right: '5cm', position: 'absolute'  }} element={<FrontTest/>}>Demo</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to={'/signup'} style={{ textDecoration: 'none' , color: 'antiquewhite', top: '10px', right: '1cm', position: 'absolute'  }} element={<FrontTest/>}>Signup</Link>
      </nav>
      <div className='reactApp' style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
      <Routes>
      <Route path='/' element={<FrontTest/>}/>
      <Route path='/signup' element={<SignUpPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
