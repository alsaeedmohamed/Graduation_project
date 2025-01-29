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
import SignUpDoctor from './pages/SignUpDoctor'
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

