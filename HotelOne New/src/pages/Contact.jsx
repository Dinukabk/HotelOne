import React, { useState } from 'react';
import ContactForm from '../components/ContactForm'; // Import ContactForm component

// This component renders the Contact page with the contact form and hotel details.
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: '',
    hotelAddress: '1234 Hotel Lane, Beach City, Country', // Default hotel address
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-6 text-indigo-600">
          Contact Us
        </h1>
        <p className="text-lg text-gray-700 text-center mb-8">
          We're here to help! Please use the form below to reach us for any inquiries.
        </p>
        
        {/* Hotel Address Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Our Hotel Details</h2>
          <p className="text-gray-600 mt-2">
            <strong>Hotel Name:</strong> D Hotel <br />
            <strong>Address:</strong> {formData.hotelAddress} <br />
            <strong>Phone:</strong> 0712345678<br />
            <strong>Email:</strong> contact@HotelD.com <br />
            <strong>Address:</strong> Anuradhapura

          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
          <ContactForm
            formData={formData}
            handleInputChange={handleInputChange}
          /> {/* Render the ContactForm component */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
