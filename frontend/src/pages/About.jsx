import React from 'react'
import { assets } from '../assets/assets'
import { Users, Handshake, Eye } from "lucide-react"; // Importing icons
import { Clock, ShieldCheck, UserCheck, Globe } from "lucide-react"; // Importing icons
import { CalendarCheck, CreditCard, BrainCircuit, Video } from "lucide-react";

const About = () => {
  return (
    <div >
      <div className='text-center text-3xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-800 font-medium'>US</span></p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-10 px-6 md:px-16 py-16 bg-white">
        {/* Left - Image */}
        <div className="md:w-1/2">
          <img src={assets.about_image} alt="Doctors at CareConnect" className="w-full md:max-w-[425px] shadow-md" />
        </div>

        {/* Right - Text Content */}
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-justify text-sm text-gray-600">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 leading-snug">
            Welcome to <span className="text-primary">CareConnect</span>
          </h2>
          <p>
            At CareConnect, we are redefining the way healthcare is accessed. We recognize
            the challenges individuals face in scheduling doctor appointments and managing health records.
            Our platform provides a seamless, hassle-free experience, ensuring healthcare is available at your fingertips.
          </p>

          <p>
            We are dedicated to excellence in healthcare technology, continuously improving our platform with
            the latest advancements to enhance user experience. Whether you are booking your first appointment or
            managing ongoing care, CareConnect is here to support you every step of the way.
          </p>

          {/* Vision Section */}
          <div className="bg-thprim p-5 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800">Our Vision</h3>
            <p className="mt-2">
              Our vision at CareConnect is to create a seamless healthcare experience for every user.
              We strive to bridge the gap between patients and healthcare providers, making quality healthcare
              more accessible—whenever and wherever it is needed.
            </p>
          </div>
        </div>
      </div>



      <div className="py-16 px-6 md:px-16 bg-gray-50">

        {/* Box 1 - Our Approach */}
        <div className="bg-white rounded-lg shadow-md p-10 mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center">
            Our Approach to <span className='text-primary'>Healthcare</span>
          </h2>
          <p className="text-md text-gray-600 text-center mt-2">
            Providing high-quality, trusted, and accessible healthcare is our reason for being
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-12">
            {/* Connect */}
            <div className="flex flex-col items-center max-w-sm px-5">
              <Users size={60} className="text-gray-700 mb-4" />
              <h3 className="text-2xl font-medium text-gray-800">Connect</h3>
              <p className="text-gray-600 mt-2 text-center">
                We believe in deep patient-doctor relationships that lead to better outcomes.
              </p>
            </div>

            {/* Trust */}
            <div className="flex flex-col items-center max-w-sm px-5">
              <Handshake size={60} className="text-gray-700 mb-4" />
              <h3 className="text-2xl font-medium text-gray-800">Trust</h3>
              <p className="text-gray-600 mt-2 text-center">
                We ensure a seamless experience for both patients and doctors with transparency.
              </p>
            </div>

            {/* Transparency */}
            <div className="flex flex-col items-center max-w-sm px-5">
              <Eye size={60} className="text-gray-700 mb-4" />
              <h3 className="text-2xl font-medium text-gray-800">Transparency</h3>
              <p className="text-gray-600 mt-2 text-center">
                Open communication and ethical practices ensure quality healthcare services.
              </p>
            </div>
          </div>
        </div>

        {/* Box 2 - What We Offer */}
        <div className="bg-white rounded-lg shadow-md p-10 mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center">
            What We <span className="text-primary">Offer</span>
          </h2>
          <p className="text-gray-600 text-center mt-2">
            Experience seamless healthcare with CareConnect
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">

            {/* Feature 1 - Easy Appointment Booking */}
            <div className="bg-thprim p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center text-center">
              <CalendarCheck size={50} className="text-secprim mb-4" />
              <h3 className="text-xl font-medium text-gray-800">Easy Appointment Booking</h3>
              <p className="text-gray-600 mt-2">
                Find the right doctor based on specialty, availability, and location in just a few clicks.
              </p>
            </div>

            {/* Feature 2 - Secure Online Payments */}
            <div className="bg-thprim p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center text-center">
              <CreditCard size={50} className="text-secprim mb-4" />
              <h3 className="text-xl font-medium text-gray-800">Secure Online Payments</h3>
              <p className="text-gray-600 mt-2">
                Pre-pay consultation fees safely with our secure and hassle-free payment gateway.
              </p>
            </div>

            {/* Feature 3 - AI Tools Overview */}
            <div className="bg-thprim p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center text-center">
              <BrainCircuit size={50} className="text-secprim mb-4" />
              <h3 className="text-xl font-medium text-gray-800">AI-Powered Medical Tools</h3>
              <p className="text-gray-600 mt-2">
                Empower healthcare with AI: Analyze images, chat with assistants, and get instant insights.
              </p>
            </div>

            {/* Feature 3 - Video Consultations
            <div className="bg-thprim p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center text-center">
              <Video size={50} className="text-secprim mb-4" />
              <h3 className="text-xl font-medium text-gray-800">Video Consultations</h3>
              <p className="text-gray-600 mt-2">
                Get medical advice from trusted doctors from the comfort of your home.
              </p>
            </div> */}

          </div>
        </div>
      </div>

      {/* Box 3 - Why Choose CareConnect */}
      {/* Box 3 - Why Choose CareConnect */}
      <div className="bg-thprim text-white rounded-lg shadow-md p-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900">
          Why Choose <span className="text-primary">CareConnect?</span>
        </h2>
        <p className="text-lg text-center mt-2 text-gray-700">
          A smarter way to connect with doctors
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

          {/* Feature 1 - Fast & Convenient */}
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center text-center">
            <Clock size={48} className="text-thsec mb-4" /> {/* ⏳ Clock Icon */}
            <h3 className="text-lg font-medium">Fast & Convenient</h3>
            <p className="text-gray-600 mt-2">
              No long waiting times, book instantly.
            </p>
          </div>

          {/* Feature 2 - Secure & Reliable */}
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center text-center">
            <ShieldCheck size={48} className="text-thsec mb-4" /> {/* 🛡️ Security Icon */}
            <h3 className="text-lg font-medium">Secure & Reliable</h3>
            <p className="text-gray-600 mt-2">
              Data privacy and encryption ensure a safe experience.
            </p>
          </div>

          {/* Feature 3 - Trusted Healthcare Providers */}
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center text-center">
            <UserCheck size={48} className="text-thsec mb-4" /> {/* 👨‍⚕️ Verified Doctors */}
            <h3 className="text-lg font-medium">Trusted Healthcare</h3>
            <p className="text-gray-600 mt-2">
              Verified doctors to ensure the best care.
            </p>
          </div>

          {/* Feature 4 - 24/7 Accessibility */}
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center text-center">
            <Globe size={48} className="text-thsec mb-4" /> {/* 🌍 24/7 Access */}
            <h3 className="text-lg font-medium">24/7 Accessibility</h3>
            <p className="text-gray-600 mt-2">
              Book and consult anytime, from anywhere.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About