# AI Setup Guide for CareConnect

This guide will help you set up the Gemini AI integration for the CareConnect platform.

## 🚀 Quick Setup

### 1. Get Your Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy your API key (it will look like: `AIzaSyC...`)

### 2. Configure Environment Variables

Create a `.env` file in the `frontend/` directory:

```bash
# Gemini AI API Key
REACT_APP_GEMINI_API_KEY=your_actual_api_key_here

# Backend API URL (optional)
REACT_APP_API_URL=http://localhost:5666/api
```

### 3. Install Dependencies

```bash
cd frontend
npm install
```

### 4. Start the Application

```bash
npm run dev
```

## 🤖 AI Features

### AskMed - Health Assistant
- General health queries and information
- Wellness advice and tips
- Medical information (with disclaimers)
- Evidence-based health guidance

### MedImageAI - Medical Image Analysis
- Upload medical images for AI analysis
- Detailed analysis reports
- Recommendations and treatment suggestions
- Image format support: PNG, JPG, JPEG (max 10MB)

### MindEase - Mental Health Companion
- Emotional support and active listening
- Coping strategies and mindfulness techniques
- Crisis support resources
- Professional help encouragement

## ⚙️ Configuration

### AI Model Settings
The AI configuration is managed in `src/config/ai.js`:

- **Model**: Gemini 1.5 Pro
- **Temperature**: 0.7 (balanced creativity)
- **Max Tokens**: 2048
- **Safety Settings**: Enabled for all categories

### Customization
You can modify the AI behavior by editing:
- `src/config/ai.js` - Model configuration
- Individual component files - Prompts and responses

## 🔒 Security & Privacy

- API keys are stored in environment variables
- No data is stored locally
- All conversations are processed in real-time
- Medical disclaimers are included in all responses

## 🚨 Important Notes

1. **Medical Disclaimer**: AI responses are for informational purposes only
2. **Professional Care**: Always consult healthcare professionals for medical decisions
3. **Crisis Support**: MindEase includes crisis hotline information
4. **API Limits**: Be aware of Gemini API usage limits and costs

## 🛠️ Troubleshooting

### API Key Issues
- Ensure your API key is correctly set in `.env`
- Check that the key starts with `AIzaSy`
- Verify the key has proper permissions

### Image Analysis Issues
- Ensure images are under 10MB
- Use supported formats: PNG, JPG, JPEG
- Check internet connection for API calls

### General Issues
- Clear browser cache and restart the app
- Check browser console for error messages
- Verify all dependencies are installed

## 📞 Support

For technical issues:
1. Check the browser console for error messages
2. Verify your API key configuration
3. Ensure all dependencies are installed
4. Check your internet connection

For medical emergencies, contact emergency services immediately.
