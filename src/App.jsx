import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Landing } from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import RoleSelection from './pages/Signup/RoleSelection';
import FreelancerSignUp from './pages/Signup/FreelanceS';
import CompanySignUp from './pages/Signup/CompanyS';
import Dashboard from './pages/Dashboard/Freelancer/Home/Dashboard';
import Footer from './components/Footer/Footer';
import Project from './pages/Dashboard/Freelancer/Projects/Project';
import Message from './pages/Dashboard/Freelancer/Message/Message';
import Profile from './pages/Dashboard/Freelancer/Profile/Profile';
import Support from './pages/Dashboard/Freelancer/Support/Support';
import Earnings from './pages/Dashboard/Freelancer/Earnings/Earnings';
import Settings from './pages/Dashboard/Freelancer/Settings/Settings';
import SearchResults from './pages/Search/SearchResults';
import { useRole } from './context/RoleContext';
import Dashboard2 from './pages/Dashboard/Company/Home/Dashboard';

function App() {
  const { role } = useRole();
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route
          path='/search_results/:category/:query'
          element={<SearchResults />}
        />
        <Route path='/login' element={<Login />} />
        <Route path='/role-selection' element={<RoleSelection />} />
        <Route path='/signup/freelancer' element={<FreelancerSignUp />} />
        <Route path='/signup/company' element={<CompanySignUp />} />
        <Route path='/dashboard' element={<Dashboard />} />

        {/* <Route
          path={`/${role}dashboard`} // Renders the appropriate dashboard based on the role
          element={role === 'freelancer' ? <Dashboard /> : <Dashboard2 />}
        /> */}
        <Route path='/projects' element={<Project />} />
        <Route path='/message' element={<Message />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/support' element={<Support />} />
        <Route path='/earnings' element={<Earnings />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
