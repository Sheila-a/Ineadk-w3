import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Landing } from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import RoleSelection from './pages/Signup/RoleSelection';
import FreelancerSignUp from './pages/Signup/FreelanceS';
import CompanySignUp from './pages/Signup/CompanyS';
import Dashboard from './pages/Dashboard/Freelancer/Home/Dashboard';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/role-selection' element={<RoleSelection />} />
        <Route path='/signup/freelancer' element={<FreelancerSignUp />} />
        <Route path='/signup/company' element={<CompanySignUp />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
