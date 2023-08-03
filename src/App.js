import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Homepage';
import Login from "./components/Login";
import HomePageAuth from "./components/HomepageAuth";
import AdminDashboard from "./components/AdminDashboard";
import RegisterForm from './components/RegisterForm';
import ForgotPassword from './components/ForgotPassword';
import ForgotNewPassword from './components/ForgotNewPassword';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/RegisterForm" element={<RegisterForm />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/new-password/:token" element={<ForgotNewPassword />} />
        <Route path="/HomepageAuth" element={<HomePageAuth />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
