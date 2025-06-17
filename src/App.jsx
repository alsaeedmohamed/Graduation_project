// App.jsx
import { useState } from "react";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import ForgotPassword from './pages/forgotPassword';
import Verify from './pages/Verify';
import ResetPass from './pages/ResetPass';
import HomePatient from "./pages/Homepatient";
import Services from './pages/services';
import Scan from './pages/scan';
import Scanning from './pages/scaning';
import RoleSelectionPage from './pages/SelectRole';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpDoctor from './pages/SignUpDoctor';
import ChatBotPage from './pages/ChatBotPage';
import Prediction from './pages/predict';
import HighRisk from './pages/highrisk';
import LowRisk from './pages/lowrisk';
import FindDoctors from './pages/findDoctors';
import Drinfo from './pages/drinfo';
import PaymentPage from './pages/paymentpage';
import AddCardPage from './pages/addcardpage';
import Appointment from './pages/appointment';
import Contact from './pages/contactUs';
import AboutUs from './pages/aboutUs';
import HomeDoctor from './pages/homeDoctor';
import Appointments from './pages/appointments';
import PatientDetails from './pages/patientDetails';
import PatientReport from './pages/patientReport';
import LoggedInNavbar from "./components/LoggedInHeader";
import ScanResult from "./pages/ScanResult";





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
            <Route path="/chatbot.jsx" element={<ChatBotPage />} />
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
