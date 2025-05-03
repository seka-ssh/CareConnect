import React, { useContext, useState } from 'react';
import { Heart, Image, MessageCircle, Plus, MessageSquare } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const MedicalAI = () => {

  const navigate = useNavigate();

  const { token, setToken, userData } = useContext(AppContext)

  const [showMenu, setShowMenu] = useState(false)

  const logout = () => {
    setToken(false)
    localStorage.removeItem('token')
  }

  return (
    <div className="flex flex-col items-center min-h-screen gap-8">

      <div className='text-center text-3xl pt-10 text-gray-500'>
        <p>MEDICAL <span className='text-gray-800 font-medium'>AI TOOLS</span></p>
      </div>

      <div className="flex flex-col md:flex-row gap-12 mt-12 justify-center items-center">

        {/* AskMed */}
        <div className="flex flex-col items-center text-center gap-4 p-8 rounded-3xl bg-gray-50 hover:shadow-2xl transition-all w-full md:w-[400px]">
          <div className="bg-primary p-4 rounded-full mb-2">
            {/* Medical Icon */}
            <div className="relative">
              <MessageSquare className="w-12 h-12 text-white" />
              <Plus className="w-6 h-6 text-white absolute -bottom-1 -right-1" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">AskMed</h2>
          <p className="text-gray-600 px-3">
            An AI powered assistant to assist with general health queries. Reliable support and information whenever you need it.
          </p>
          <button
            onClick={() => window.open('/medicalai/ask-med', '_blank')}
            className="mt-4 text-white bg-primary px-6 py-2 rounded-full hover:bg-primary-dark transition-all"
          >
            Talk to AskMed
          </button>
        </div>

        {/* MedImageAI */}
        <div className="flex flex-col items-center text-center gap-4 p-8 rounded-3xl bg-gray-50 hover:shadow-2xl transition-all w-full md:w-[400px]">
          <div className="bg-primary p-4 rounded-full mb-2">
            {/* Medical Icon */}
            <div className="relative">
              <Image className="w-12 h-12 text-white" />
              <Plus className="w-6 h-6 text-white absolute -bottom-1 -right-1" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">MedImageAI</h2>
          <p className="text-gray-600 px-3">
            An app to help with medical analysis using images. Upload, analyze, and get instant insights.
          </p>
          <button
            onClick={() => window.open('/medicalai/med-image-ai', '_blank')}
            className="mt-4 text-white bg-primary px-6 py-2 rounded-full hover:bg-primary-dark transition-all"
          >
            Explore MedImageAI
          </button>
        </div>

        {/* MindEase */}
        <div className="flex flex-col items-center text-center gap-4 p-8 rounded-3xl bg-gray-50 hover:shadow-2xl transition-all w-full md:w-[400px]">
          <div className="bg-primary p-4 rounded-full mb-2">
            {/* Chat Bubble Icon */}
            <div className="relative">
              <MessageCircle className="w-12 h-12 text-white" />
              <Heart className="w-6 h-6 text-white absolute -bottom-1 -right-1" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">MindEase</h2>
          <p className="text-gray-600 px-3">
            A compassionate chatbot designed to assist with mental well-being. Friendly conversations anytime you need.
          </p>
          <button
            onClick={() => window.open('/medicalai/mind-ease', '_blank')}
            className="mt-4 text-white bg-primary px-6 py-2 rounded-full hover:bg-primary-dark transition-all"
          >
            Talk to MindEase
          </button>
        </div>

      </div>

    </div>
  )
}

export default MedicalAI;
