// ai.js
import { GoogleGenerativeAI } from "@google/generative-ai";

// AI Configuration
export const AI_CONFIG = {
    // ⚠️ Better to load this from env: process.env.REACT_APP_GEMINI_API_KEY
    GEMINI_API_KEY: "AIzaSyDoaxgQyqSJ1bGI2EcMwUuRE1P3DGUnZVk",

    MODEL_NAME: "gemini-1.5-flash",

    GENERATION_CONFIG: {
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
        maxOutputTokens: 2048,
    },

    SAFETY_SETTINGS: [
        { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
        { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
        { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
        { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
    ],
};

// Validate API key
export const validateApiKey = () => {
    const apiKey = AI_CONFIG.GEMINI_API_KEY;
    if (!apiKey || apiKey === "YOUR_GEMINI_API_KEY_HERE") {
        console.error("⚠️ Gemini API key not configured. Please add your API key to the environment variables.");
        return false;
    }
    return true;
};

// Get configured model
export const getConfiguredModel = () => {
    if (!validateApiKey()) {
        throw new Error("Gemini API key not configured");
    }

    const genAI = new GoogleGenerativeAI(AI_CONFIG.GEMINI_API_KEY);

    return genAI.getGenerativeModel({
        model: AI_CONFIG.MODEL_NAME,
        generationConfig: AI_CONFIG.GENERATION_CONFIG,
        safetySettings: AI_CONFIG.SAFETY_SETTINGS,
    });
};
