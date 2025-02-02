import  { useState } from "react";
import './App.css'
import Header  from './components/Header'
import Footer from './components/Footer'
import SignUpForm from './pages/SignUpForm'
import SignInForm from './pages/SignInForm'
import Rest from './pages/Rest'
import Verify from './pages/Verify'
import RestPass from './pages/RestPass'
import HomePatient from './pages/HomePatient'
import Services from './pages/services'
import Scan from './pages/scan'
import Scanning from './pages/scaning'
import RoleSelectionPage from './pages/SelectRole'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpDoctor from './pages/SignUpDoctor';
import ChatBotPage from './pages/ChatBotPage';
import Prediction from './pages/predict'
import HighRisk from './pages/highrisk'
import LowRisk from './pages/lowrisk'
import FindDoctors from './pages/findDoctors'
import Drinfo from './pages/drinfo'
import PaymentPage from './pages/paymentpage'
import AddCardPage from './pages/addcardpage'
import Appointment from './pages/appointment'
import Contact from './pages/contactUs'
import AboutUs from './pages/aboutUs'
import HomeDoctor from './pages/homeDoctor'
import Appointments from './pages/appointments'
import PatientDetails from './pages/patientDetails'
import PatientReport from './pages/patientReport'
function App() {
  const [uploadedImage, setUploadedImage] = useState(null);

  return (
<Router>
      <div  className="bg-[#f6fbfc] min-h-screen" >
        <Header />
        <main style={{ minHeight: "80vh" }}>
          <Routes>
            <Route path="/src/pages/SignInForm.jsx" element={<SignInForm />} />
            <Route path="/src/pages/SignUpForm.jsx" element={<SignUpForm />} />
            <Route path="/src/pages/Rest.jsx" element={<Rest/>} />
            <Route path="/src/pages/Verify.jsx" element={<Verify/>} />
            <Route path="/src/pages/RestPass.jsx" element={<RestPass/>} />
            <Route path="/src/pages/HomePatient.jsx" element={<HomePatient/>} />
            <Route path="/src/pages/services.jsx" element={<Services/>} />
            <Route path="/src/pages/SelectRole.jsx" element={<RoleSelectionPage/>} />
            <Route path="/src/pages/SignUpDoctor.jsx" element={<SignUpDoctor/>} />
            <Route path="/src/pages/ChatBotPage.jsx" element={<ChatBotPage />} />
            <Route path="/src/pages/predict.jsx" element={<Prediction />} />
            <Route path="/src/pages/highrisk.jsx" element={<HighRisk />} />
            <Route path="/src/pages/lowrisk.jsx" element={<LowRisk />} />
            <Route path="/src/pages/findDoctors.jsx" element={<FindDoctors />} />
            <Route path="/src/pages/drinfo.jsx" element={<Drinfo />} />
            <Route path="/src/pages/paymentpage.jsx" element={<PaymentPage />} />
            <Route path="/src/pages/addcardpage.jsx" element={<AddCardPage />} />
            <Route path="/src/pages/appointment.jsx" element={<Appointment />} />
            <Route path="/src/pages/contactUs.jsx" element={<Contact />} />
            <Route path="/src/pages/aboutUs.jsx" element={<AboutUs />} />
            <Route path="/src/pages/homeDoctor.jsx" element={<HomeDoctor />} />
            <Route path="/src/pages/appointments.jsx" element={<Appointments />} />
            <Route path="/src/pages/patientDetails.jsx" element={<PatientDetails />} />
            <Route path="/src/pages/patientReport.jsx" element={<PatientReport />} />

            <Route
          path="/src/pages/scan.jsx"
          element={<Scan setUploadedImage={setUploadedImage} />}
        />
        <Route
          path="/src/pages/scaning.jsx"
          element={<Scanning uploadedImage={uploadedImage} />}
        />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App

