import logo from './logo.svg';
import './App.css';
import Register from './components/register/Register';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

import {Route, Routes} from 'react-router-dom'
import Home from './components/home/Home';
import Notification from './components/notification/Notification';
import Login from './components/login/Login';
import RegisterPage from './components/register/Register';
import About from './components/about/About';
import Gigs from './components/gig/gigs';
import Profile from './components/profile/profile';
import UserGigs from './components/profile/userGigs/userGigs';
import UpdateGig from './components/profile/updateGig/updateGig';
import AddGig from './components/profile/addGig/addGig';
import AdminLogin from './components/admin/adminLogin/adminLogin';
import AdminHome from './components/admin/adminHome/adminHome';
import HireBill from './hireBill/hireBill';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/gigs" element = {<Gigs title="Programming" subtitle="Web,Mobile,Desktop" description="Develop the best versions of your dream applications at the best price in the market!" price={425}/>} />
        <Route path = "/login" element = {<Login/>} />
        <Route path = "/register" element = {<RegisterPage/>} />
        <Route path = "/about" element = {<About/>} />
        <Route path = "/notification" element = {<Notification />} /> 
        <Route path = "/profile" element = {<Profile />} /> 
        <Route path="/userGigs" element = {<UserGigs />} />
        <Route path='/updateGig' element= {<UpdateGig />} />
        <Route path='/addGig' element = {<AddGig />} />
        <Route path='gigs/hireBill' element = {<HireBill />} />

        {/* Admin rotes begin here */}
        <Route path='/admin' element = {<AdminLogin />} />
        <Route path='/admin/home' element = {<AdminHome />} />
        
      </Routes>
      <Footer />
    
    </div>
  );
}

export default App;
