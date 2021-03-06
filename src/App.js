import logo from './logo.svg';
import './App.css';
import FrontTest from './Component/test';
import SignUpPage from './Component/signup';
import LoginPage from './Component/login';
import CreateContent from './Component/newContent';
import ShowContent from './Component/ContentList';
import RenderContent from './Component/RenderContent';
import {Routes, Route, Link, useNavigate} from 'react-router-dom'

function App() {
  return (
    <div className="App" >
      <nav className='topNav'>
      <Link to={'/'}element={<FrontTest/>}><img className='NavLogo' src='/images/FiresideNavLogoS.png'/> </Link>
        <Link to={'/content/create'} style={{ textDecoration: 'none' , color: 'antiquewhite', top: '10px', right: '5cm', position: 'absolute'  }} element={<CreateContent/>}>Demo</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to={'/signup'} style={{ textDecoration: 'none' , color: 'antiquewhite', top: '10px', right: '1cm', position: 'absolute'  }} element={<FrontTest/>}>Signup</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to={'/content'} style={{ textDecoration: 'none' , color: 'antiquewhite', top: '10px', right: '9cm', position: 'absolute'  }} element={<ShowContent/>}>Content List</Link>
      </nav>
      <div className='reactApp' style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
      <Routes>
      <Route path='/' element={<FrontTest/>}/>
      <Route path='/signup' element={<SignUpPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/content/create' element={<CreateContent/>} />
      <Route path='/content' element={<ShowContent/>} />
      <Route path='/content/:id' element={<RenderContent/>} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
