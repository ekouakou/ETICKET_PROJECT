import './App.css';
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterForm from './AppPages/Home/RegisterForm';
import LoadExternalScripts from './AppComponents/LoadExternalScripts';
import HomePage from './AppPages/Home/HomePage';
import DetailPage from './AppPages/Detail/DetailPage';
import SignIn from './AppPages/Home/SignIn';
import Contact from './AppPages/Home/Contact';
import NotFound from './AppPages/Home/NotFound';
import AboutUs from './AppPages/Home/AboutUs';
import MyAcount from './AppPages/Home/MyAcount';
import DetailEventRedirect from './AppPages/Home/DetailEventRedirect';
import Footer from './AppComponents/Footer/Footer';
import ScrollToTop from './AppComponents/ScrollToTop';

import PhotoFrameApp from './AppPages/Home/PhotoFrameApp';


function App() {
  return (
    <div className="app-content">
      <Router>
         <ScrollToTop />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/PhotoFrameApp" element={<PhotoFrameApp />} />
            <Route path="/form" element={<RegisterForm />} />
            <Route path="/detail-event" element={<DetailPage />} />
            <Route path="/detail-event/:id" element={<DetailEventRedirect />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/contactUs" element={<Contact />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/profile" element={<MyAcount />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
      <LoadExternalScripts />
    </div>
  );
}

export default App;
