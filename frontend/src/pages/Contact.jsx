import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading spinner

    const googleSheetURL = "https://script.google.com/macros/s/AKfycbySKcBJCESX75oyf2rZD5NLlj-aKs8hzIMH6-btHPVJXbrhRw5FAX8IjBF19tHGHlQ7/exec";

    try {
      const response = await fetch(googleSheetURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      setLoading(false); // Hide loading spinner

      alert("Thank you! Your message has been sent.");
      setFormData({ name: '', email: '', subject: '', message: '' });

    } catch (error) {
      setLoading(false); // Hide loading spinner
      console.error("Error:", error);
      alert("Failed to send the message. Please try again.");
    }
  };

  return (
    <div>
      <div className='text-center text-3xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-800 font-medium'>RW</span></p>
      </div>

      <p className='text-center pt-5 pb-5 text-gray-600'>Have questions or need assistance? We're here to help! Reach out to us via phone, email, or the contact form below.</p>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-20 mb-28 text-sm'>

        <img className='w-full md:max-w-[350px] shadow-md' src={assets.contact_image} alt="" />

        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className='text-gray-500'>KN, 3540<br /> Gatsata Health Center, 32PW+23X, Kigali</p>
          <a href="https://www.google.com/maps/dir//32PW%2B23X,+Kigali/@-1.9148781,29.9628301,21214m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x19dca3d979ec0015:0x674e701f33f02d38!2m2!1d30.0452494!2d-1.915061?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className='border border-black px-2 py-1 hover:bg-black hover:text-white transition-all duration-300 rounded-md'> See Direction</a>
          <p className='text-gray-500'>
            Tel: <a href="tel:09871146825" className="hover:text-primary">0732754111</a> <br />
            Email: <a href="mailto:sekashalom74@gmail.com" className="hover:text-primary">sekashalom74@gmail.com</a>
          </p>
          <p className='text-gray-500'>Working hours: <br /> Monday - Saturday: 9:00 AM - 6:00 PM <br /> Sunday: Closed</p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-3xl mx-auto bg-gray-50 shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Send Us a Message</h2>
        <p className="text-gray-600 text-center mb-6">Fill out the form below and we'll get back to you as soon as possible.</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Name Field */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-gray-700"
            required
          />

          {/* Email Field */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-gray-700"
            required
          />

          {/* Subject Field */}
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-gray-700"
            required
          />

          {/* Message Field */}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-gray-700 resize-none"
            required
          />

          {/* Submit Button */}
          <button type="submit" className="w-full bg-[#17A4A5] text-white py-3 rounded-md text-lg font-semibold hover:bg-[#17A4A5]transition-all duration-300 flex items-center justify-center">
            {loading ? (
              <div className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                </svg>
                <span>Sending...</span>
              </div>
            ) : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact