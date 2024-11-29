import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link,NavLink} from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App() {
  return (
    <div className='App'>
      <Router>
        <nav>
          <ul>
          <li><Link to='home'>Home</Link></li>
          <li><Link to='aboutus'>AboutUs</Link></li>
          <li><Link to='contactus'>ContactUs</Link></li>
          <li><Link to='dashboard'>Dashboard</Link></li>
          <li><Link to='login'>Login</Link></li>
          </ul>
        </nav>
        

        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/contactus' element={<ContactUs/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/login' element={<Login/>}/>
          
        </Routes>
      </Router>
      

    </div>
    
  );
}

export default App;
