// App.jsx
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LoggedInNavbar from "./components/LoggedInHeader";
import Contact from './pages/contactUs';
import AboutUs from './pages/aboutUs';
// Auth Pages 
import RoleSelectionPage from './pages/Auth/SelectRole';
import SignUpForm from './pages/Auth/SignUpForm';
import SignInForm from './pages/Auth/SignInForm';
import ForgotPassword from './pages/Auth/forgotPassword';
import Verify from './pages/Auth/Verify';
import ResetPass from './pages/Auth/ResetPass';
import SignUpDoctor from './pages/Auth/SignUpDoctor';
// Patient Pages 
import HomePatient from "./pages/Patient/Homepatient";
import PatientDetails from './pages/Patient/patientDetails';
import PatientReport from './pages/Patient/patientReport';
// Stroke Pages 
import Services from './pages/Stroke/services';
import Scan from './pages/Stroke/scan';
import Scanning from './pages/Stroke/scaning';
import ChatBotPage from './pages/Stroke/ChatBotPage';
import Prediction from './pages/Stroke/predict';
import HighRisk from './pages/Stroke/highrisk';
import LowRisk from './pages/Stroke/lowrisk';
import ScanResult from "./pages/Stroke/ScanResult";
// Doctor Pages
import FindDoctors from './pages/Doctor/findDoctors';
import Drinfo from './pages/Doctor/drinfo';
import HomeDoctor from './pages/Doctor/homeDoctor';
// Appointment Pages
import PaymentPage from './pages/Appointment/paymentpage';
import AddCardPage from './pages/Appointment/addcardpage';
import Appointment from './pages/Appointment/appointment';
import Appointments from './pages/Appointment/appointments';





function App() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // حالة تسجيل الدخول

  const handleLogin = () => {
    setIsLoggedIn(true);
  };


  return (
    <Router>
      <div className="bg-[#f6fbfc] min-h-screen">
        {/* Navbar login */}
        {isLoggedIn ? <LoggedInNavbar /> : <Header />}

        <main style={{ minHeight: "80vh" }}>
          <Routes>
            <Route path="/register" element={<RoleSelectionPage />} />
            <Route path="/patients/register" element={<SignUpForm />} />
            <Route path="/doctors/register" element={<SignUpDoctor />} />
            <Route path="/login" element={<SignInForm onLogin={handleLogin} />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/verify-otp" element={<Verify />} />
            <Route path="/reset-password" element={<ResetPass />} />
            <Route path="/" element={<HomePatient />} />
            <Route path="/patient-details" element={<PatientDetails />} />
            <Route path="/patient-report" element={<PatientReport />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/add-card" element={<AddCardPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/chatbot" element={<ChatBotPage />} />
            <Route path="/predict" element={<Prediction />} />
            <Route path="/high-risk" element={<HighRisk />} />
            <Route path="/low-risk" element={<LowRisk />} />
            <Route path="/scan-result" element={<ScanResult />} />
            <Route
              path="/scan"
              element={<Scan setUploadedImage={setUploadedImage} />}
            />
            <Route
              path="/scaning"
              element={<Scanning uploadedImage={uploadedImage} />}
            />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/doctors" element={<FindDoctors />} />
            <Route path="/doctor" element={<Drinfo />} />
            <Route path="/doctors/home" element={<HomeDoctor />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
