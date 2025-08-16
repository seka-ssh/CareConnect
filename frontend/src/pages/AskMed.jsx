import React, { useContext, useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { Send, Bot, User, Loader2 } from 'lucide-react';
import { toast } from 'react-toastify';
import { getConfiguredModel, validateApiKey } from '../config/ai';

const AskMed = () => {
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
                text: "Hello! I'm AskMed, your AI health assistant. I can help you with general health queries, medical information, and wellness advice. Please note that I'm not a substitute for professional medical care. How can I help you today?",
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
            const prompt = `You are AskMed, a knowledgeable and compassionate AI health assistant. Your role is to provide helpful, accurate, and safe medical information while always encouraging users to consult healthcare professionals for serious concerns.

Guidelines:
- Provide evidence-based health information
- Be clear about limitations and when to seek professional help
- Use simple, understandable language
- Show empathy and care in your responses
- Always include a disclaimer for serious medical issues
- Never provide specific medical diagnoses or treatment plans

User question: ${inputMessage}

Please provide a helpful, informative response:`;

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
                text: "I apologize, but I'm having trouble processing your request right now. Please try again in a moment or rephrase your question.",
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
        <div className="flex flex-col h-screen max-w-4xl mx-auto bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b px-6 py-4">
                <div className="flex items-center gap-3">
                    <div className="bg-primary p-2 rounded-full">
                        <Bot className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold text-gray-800">AskMed</h1>
                        <p className="text-sm text-gray-600">Your AI Health Assistant</p>
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
                                    ? 'bg-primary text-white'
                                    : 'bg-white text-gray-800 shadow-sm border'
                            }`}
                        >
                            <div className="flex items-start gap-2">
                                {message.sender === 'bot' && (
                                    <Bot className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
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
                                <Loader2 className="w-5 h-5 text-primary animate-spin" />
                                <span className="text-sm">AskMed is thinking...</span>
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

            {/* Input Area */}
            <div className="bg-white border-t p-4">
                <div className="flex gap-3">
                    <div className="flex-1 relative">
                        <textarea
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder={apiKeyError ? "API key not configured" : "Ask me about health, wellness, or medical information..."}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                            rows="1"
                            disabled={isLoading || apiKeyError}
                        />
                    </div>
                    <button
                        onClick={handleSendMessage}
                        disabled={!inputMessage.trim() || isLoading || apiKeyError}
                        className="bg-primary text-white p-3 rounded-lg hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
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

export default AskMed;