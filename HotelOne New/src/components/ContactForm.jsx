import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = ({ formData, handleInputChange }) => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_ghi2gxk', 
      
'event_tpDMlpmmqVF5CrbqSMWgXM2W', 
      e.target, 
      'dinukabk24' 
    )
      .then((result) => {
        setStatus('Your message has been sent successfully!');
      })
      .catch((error) => {
        setStatus('There was an error sending your message. Please try again later.');
      });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-lg font-medium text-gray-700">
          Hotel D
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-lg font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md"
          required
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-lg font-medium text-gray-700">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-lg font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md"
          required
        ></textarea>
      </div>

      {status && (
        <p className="text-center text-lg mt-4">
          {status}
        </p>
      )}

      <div className="text-center mt-6">
        <button type="submit" className="bg-indigo-600 text-white p-2 px-4 rounded-lg">
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
