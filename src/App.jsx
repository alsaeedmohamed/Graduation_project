
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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App

