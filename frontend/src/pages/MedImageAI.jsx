import React, { useContext, useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { Upload, Image as ImageIcon, Loader2, X, Download } from 'lucide-react';
import { toast } from 'react-toastify';
import { getConfiguredModel, validateApiKey } from '../config/ai';

const MedImageAI = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [analysis, setAnalysis] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [apiKeyError, setApiKeyError] = useState(false);
    const fileInputRef = useRef(null);
    const navigate = useNavigate();
    const { token, setToken, userData } = useContext(AppContext);

    // Check API key on component mount
    useEffect(() => {
        if (!validateApiKey()) {
            setApiKeyError(true);
            toast.error('Gemini API key not configured. Please check your environment variables.');
        }
    }, []);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            if (!file.type.startsWith('image/')) {
                toast.error('Please select a valid image file');
                return;
            }
            if (file.size > 10 * 1024 * 1024) {
                toast.error('Image size should be less than 10MB');
                return;
            }
            setSelectedImage(file);
            const reader = new FileReader();
            reader.onload = (e) => setImagePreview(e.target.result);
            reader.readAsDataURL(file);
            setAnalysis(null);
        }
    };

    const removeImage = () => {
        setSelectedImage(null);
        setImagePreview(null);
        setAnalysis(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    const fileToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    };

    const analyzeImage = async () => {
        if (!selectedImage || apiKeyError) {
            toast.error(apiKeyError ? 'API key not configured' : 'Please select an image first');
            return;
        }

        setIsLoading(true);
        setAnalysis(null);

        try {
            const model = getConfiguredModel();
            const base64Image = await fileToBase64(selectedImage);
            
            const prompt = `You are a medical image analysis expert. Analyze this medical image and provide:
1. Detailed Analysis: What you observe in the image
2. Analysis Report: Structured findings
3. Recommendations: Suggested next steps
4. Treatments: If applicable, treatment suggestions

Always include: "Consult with a Doctor before making any decisions."`;

            const result = await model.generateContent([
                prompt,
                {
                    inlineData: {
                        mimeType: selectedImage.type,
                        data: base64Image.split(',')[1]
                    }
                }
            ]);

            const response = await result.response;
            setAnalysis({
                text: response.text(),
                timestamp: new Date(),
                imageName: selectedImage.name
            });
            toast.success('Analysis completed!');

        } catch (error) {
            console.error('Error:', error);
            if (error.message.includes('API key')) {
                setApiKeyError(true);
                toast.error('API key error. Please check your configuration.');
            } else {
                toast.error('Error analyzing image. Please try again.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="bg-primary p-3 rounded-full">
                            <ImageIcon className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-3xl font-bold text-gray-800">MedImageAI</h1>
                    </div>
                    <p className="text-gray-600">AI-powered medical image analysis</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    <div className="bg-white rounded-lg shadow-sm border p-6">
                        <h2 className="text-xl font-semibold mb-4">Upload Medical Image</h2>
                        
                        {!imagePreview ? (
                            <div
                                onClick={() => fileInputRef.current?.click()}
                                className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors"
                            >
                                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                <p className="text-gray-600">Click to upload image</p>
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className="hidden"
                                />
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <div className="relative">
                                    <img
                                        src={imagePreview}
                                        alt="Preview"
                                        className="w-full h-64 object-cover rounded-lg"
                                    />
                                    <button
                                        onClick={removeImage}
                                        className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>
                                <button
                                    onClick={analyzeImage}
                                    disabled={isLoading || apiKeyError}
                                    className="w-full bg-primary text-white py-3 px-4 rounded-lg hover:bg-primary-dark disabled:opacity-50"
                                >
                                    {isLoading ? 'Analyzing...' : apiKeyError ? 'API Key Required' : 'Analyze Image'}
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="bg-white rounded-lg shadow-sm border p-6">
                        <h2 className="text-xl font-semibold mb-4">Analysis Results</h2>

                        {!analysis && !isLoading ? (
                            <div className="text-center py-12 text-gray-500">
                                <ImageIcon className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                                <p>Upload an image to get started</p>
                            </div>
                        ) : isLoading ? (
                            <div className="text-center py-12">
                                <Loader2 className="w-12 h-12 mx-auto mb-4 text-primary animate-spin" />
                                <p>Analyzing your image...</p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <div className="bg-gray-50 rounded-lg p-4 max-h-96 overflow-y-auto">
                                    <pre className="whitespace-pre-wrap text-sm text-gray-800">
                                        {analysis.text}
                                    </pre>
                                </div>
                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                                    <p className="text-sm text-yellow-800">
                                        <strong>Disclaimer:</strong> Always consult with a healthcare professional.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MedImageAI;