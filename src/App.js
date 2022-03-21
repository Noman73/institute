import logo from './logo.svg';
// import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import Header from './components/common/header';
import Footer from './components/common/footer';
import Banner from './components/common/banner';
import Login from './components/login/login';
function App() {
  return (
    <>
    <Header/>
    <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/login" element={<Login show={true} />} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
