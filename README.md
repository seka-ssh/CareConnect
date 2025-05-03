# CareConnect

**CareConnect** is an AI-powered, full-stack healthcare web application designed to simplify appointment booking, patient management, and doctor-patient interactions. Built with a modern tech stack, it supports secure authentication, real-time dashboards, AI assistants, all in one integrated system.

---

## 🚀 Features

### 🔹 Core Functionalities
- View & Filter Doctors by Specialty
- Book & Manage Appointments
- Role-based Authentication: Patient, Doctor, Admin
- Doctor & Admin Dashboards
- Profile Management for all users

### 👤 For Users
- Register and login securely
- Update and manage profile with image uploads
- View available doctors and book appointments
- Pay online for appointments
- View, cancel, and track appointment status

### 👩‍⚕️ For Doctors
- Register and login securely
- Manage profile including specialization and available slots
- View booked appointments and appointment history

### ⚙️ Admin
- Monitor all users and doctors
- Create and manage docotor's profile
- Manage platform-wide data

### 🤖 AI-Powered Tools (Medical AI Suite)
- **AskMed**: AI Health Assistant for general health queries  
- **MedImageAI**: Image-based medical analysis (e.g., skin conditions, X-rays)  
- **MindEase**: Mental Health Conversational Chatbot 

### 🔐 Authentication

- **JWT-based** login system
- Separate tokens for users and doctors
- Middleware protects private routes

---

## 🛠 Tech Stack

### Frontend
- React.js
- Axios
- Tailwind CSS
- Toastify for alerts
- Context API for global state management

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Cloudinary for image uploads
- JWT for authentication
- Multer for file handling

### AI Integration
- LLaMA 3.3 70B (via ChatGroq + LangChain + Chroma), Google Generative AI
- **Streaming Interface**: Streamlit

---

## 🛠️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/addittidas/CareConnect.git
cd CareConnect
```

### 2. Run Backend
```bash
cd backend
npm start server
```

Create a `.env` file in the `server/` directory with the following:
```bash
MONGO_URL=your_mongo_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```
### 3. Run Frontend
```bash
cd frontend
npm run dev
```

Click on the link generated.

### 4. Run Admin
```bash
cd admin
npm run dev
```

Click on the link generated.

### 5. Run Medical Chatbot (AskMed)
```bash
cd med_chatbot
.venv\Scripts\activate                                                                                                 
streamlit run app.py
```

### 6. Run Medical Analysis App (MedImageAI)
```bash
cd medical_analysis
.venv\Scripts\activate                                                                                                 
streamlit run app.py
```

### 7. Run Mental Chatbot (MindEase)
```bash
cd mental_chatbot
streamlit run app.py
```
---

## 📝 License
This project is licensed under the MIT License.