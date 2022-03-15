import logo from './logo.svg';
import './App.css';
import FrontTest from './Component/test';
import SignUpPage from './Component/signup';
import LoginPage from './Component/login';
import {Routes, Route, Link, useNavigate} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <nav className='topNav'>
        <Link to={'/'} element={<FrontTest/>}>Test</Link>
        <Link to={'/signup'} element={<FrontTest/>}>Signup</Link>
      </nav>
      <Routes>
      <Route path='/' element={<FrontTest/>}/>
      <Route path='/signup' element={<SignUpPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
