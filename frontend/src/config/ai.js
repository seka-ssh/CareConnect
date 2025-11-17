// ai.js
import { GoogleGenerativeAI } from "@google/generative-ai";

// AI Configuration (now uses ENV KEY)
export const AI_CONFIG = {
    GEMINI_API_KEY: import.meta.env.VITE_GEMINI_API_KEY, // <-- secure & correct

    MODEL_NAME: "gemini-2.0-flash",  // Fully valid model

    GENERATION_CONFIG: {
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
        maxOutputTokens: 2048,
    },

    SAFETY_SETTINGS: [
        {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
        },
        {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
        },
        {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
        },
        {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
        },
    ],
};

// Validate API key
export const validateApiKey = () => {
    const apiKey = AI_CONFIG.GEMINI_API_KEY;
    if (!apiKey) {
        console.error("⚠️ Gemini API key missing. Please set VITE_GEMINI_API_KEY in your .env file.");
        return false;
    }
    return true;
};

// Initialize model
export const getConfiguredModel = () => {
    if (!validateApiKey()) throw new Error("Gemini API key not configured");

    const genAI = new GoogleGenerativeAI(AI_CONFIG.GEMINI_API_KEY);

    return genAI.getGenerativeModel({
        model: AI_CONFIG.MODEL_NAME,
        generationConfig: AI_CONFIG.GENERATION_CONFIG,
        safetySettings: AI_CONFIG.SAFETY_SETTINGS,
    });
};
