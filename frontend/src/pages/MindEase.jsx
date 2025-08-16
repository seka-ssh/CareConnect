import React, { useContext, useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { Send, Heart, User, Loader2, MessageCircle } from 'lucide-react';
import { toast } from 'react-toastify';
import { getConfiguredModel, validateApiKey } from '../config/ai';

const MindEase = () => {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [apiKeyError, setApiKeyError] = useState(false);
    const messagesEndRef = useRef(null);
    const navigate = useNavigate();
    const { token, setToken, userData } = useContext(AppContext);

    // Check API key on component mount
    useEffect(() => {
        if (!validateApiKey()) {
            setApiKeyError(true);
            toast.error('Gemini API key not configured. Please check your environment variables.');
        }
    }, []);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Initialize with welcome message
    useEffect(() => {
        setMessages([
            {
                id: 1,
                text: "Hello! I'm MindEase, your compassionate mental health companion. I'm here to listen, support, and provide gentle guidance. Remember, I'm not a replacement for professional mental health care, but I'm here to help you feel heard and supported. How are you feeling today?",
                sender: 'bot',
                timestamp: new Date()
            }
        ]);
    }, []);

    const handleSendMessage = async () => {
        if (!inputMessage.trim() || isLoading || apiKeyError) return;

        const userMessage = {
            id: Date.now(),
            text: inputMessage,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputMessage('');
        setIsLoading(true);

        try {
            const model = getConfiguredModel();
            const prompt = `You are MindEase, a compassionate and empathetic AI mental health companion. Your role is to provide emotional support, active listening, and gentle guidance while always encouraging professional help when needed.

Guidelines:
- Show genuine empathy and understanding
- Use warm, supportive, and non-judgmental language
- Practice active listening by reflecting feelings
- Provide gentle coping strategies and mindfulness techniques
- Always encourage professional help for serious mental health concerns
- Never give medical advice or diagnose conditions
- Focus on emotional support and validation
- Use encouraging and hopeful language

User message: ${inputMessage}

Please provide a supportive, empathetic response:`;

            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();

            const botMessage = {
                id: Date.now() + 1,
                text: text,
                sender: 'bot',
                timestamp: new Date()
            };

            setMessages(prev => [...prev, botMessage]);
        } catch (error) {
            console.error('Error generating response:', error);
            if (error.message.includes('API key')) {
                setApiKeyError(true);
                toast.error('API key error. Please check your configuration.');
            } else {
                toast.error('Sorry, I encountered an error. Please try again.');
            }
            
            const errorMessage = {
                id: Date.now() + 1,
                text: "I'm here for you, but I'm having trouble processing your message right now. Please try again in a moment. Remember, you're not alone and it's okay to reach out for support.",
                sender: 'bot',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <div className="flex flex-col h-screen max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-purple-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b px-6 py-4">
                <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-full">
                        <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold text-gray-800">MindEase</h1>
                        <p className="text-sm text-gray-600">Your Mental Health Companion</p>
                    </div>
                </div>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`max-w-[70%] rounded-lg px-4 py-3 ${
                                message.sender === 'user'
                                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                                    : 'bg-white text-gray-800 shadow-sm border'
                            }`}
                        >
                            <div className="flex items-start gap-2">
                                {message.sender === 'bot' && (
                                    <Heart className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                                )}
                                <div className="flex-1">
                                    <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                                    <p className="text-xs opacity-70 mt-2">
                                        {message.timestamp.toLocaleTimeString()}
                                    </p>
                                </div>
                                {message.sender === 'user' && (
                                    <User className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                                )}
                            </div>
                        </div>
                    </div>
                ))}
                
                {isLoading && (
                    <div className="flex justify-start">
                        <div className="bg-white text-gray-800 shadow-sm border rounded-lg px-4 py-3">
                            <div className="flex items-center gap-2">
                                <Loader2 className="w-5 h-5 text-purple-500 animate-spin" />
                                <span className="text-sm">MindEase is listening...</span>
                            </div>
                        </div>
                    </div>
                )}
                
                <div ref={messagesEndRef} />
            </div>

            {/* API Key Error Notice */}
            {apiKeyError && (
                <div className="bg-red-50 border-t border-red-200 px-6 py-3">
                    <p className="text-sm text-red-800 text-center">
                        <strong>Configuration Error:</strong> Gemini API key not configured. 
                        Please add REACT_APP_GEMINI_API_KEY to your environment variables.
                    </p>
                </div>
            )}

            {/* Crisis Support Notice */}
            <div className="bg-red-50 border-t border-red-200 px-6 py-3">
                <p className="text-sm text-red-800 text-center">
                    <strong>If you're in crisis:</strong> Please contact a mental health professional, 
                    call a crisis hotline, or go to your nearest emergency room. You're not alone.
                </p>
            </div>

            {/* Input Area */}
            <div className="bg-white border-t p-4">
                <div className="flex gap-3">
                    <div className="flex-1 relative">
                        <textarea
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder={apiKeyError ? "API key not configured" : "Share your thoughts, feelings, or concerns..."}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                            rows="1"
                            disabled={isLoading || apiKeyError}
                        />
                    </div>
                    <button
                        onClick={handleSendMessage}
                        disabled={!inputMessage.trim() || isLoading || apiKeyError}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-lg hover:from-blue-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                        <Send className="w-5 h-5" />
                    </button>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                    Press Enter to send, Shift+Enter for new line
                </p>
            </div>
        </div>
    );
};

export default MindEase;