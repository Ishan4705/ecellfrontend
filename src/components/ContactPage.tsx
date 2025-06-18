import React from 'react';
import Navbar from './Navbar';
import ContactForm from './ContactForm';
import './styles.css';
// import Navbar from './Navbar';
export default function ContactPage() {
  return (
    <div className="page-bg bg-gradient-1 py-10 w-full">
      <Navbar />
      <div className="max-w-7xl w-full px-24 mx-auto">
        <div className="main-section flex items-center justify-between gap-16">
          <div className="info-section w-1/2">
            <div className="cta-buttons">
              <button className="contact-btn">Contact Us</button>
              <button className="join-btn">Join Us</button>
            </div>
            <h1>
              Want to Know More?<br /> Reach Out to us!
            </h1>
            <p>We will get back to you asap!</p>
            <img src="/logo_large.png" alt="KIIT E-Cell Logo" className="large-logo" />
          </div>
          <div className="w-1/2 flex justify-center">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}