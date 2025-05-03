import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const MindEase = () => {
    const [appUrl, setAppUrl] = useState('');

    const navigate = useNavigate();

    const { token, setToken, userData } = useContext(AppContext)

    const [showMenu, setShowMenu] = useState(false)

    const logout = () => {
        setToken(false)
        localStorage.removeItem('token')
    }

    // Automatically set app URL when page loads
    useEffect(() => {
        setAppUrl('http://localhost:8503'); // Streamlit App 3 URL (MindEase)
    }, []);

    return (
        <div className="flex flex-col items-center min-h-screen gap-8">

            {appUrl && (
                <iframe
                    src={appUrl}
                    width="100%"
                    height="1000px"
                    frameBorder="0"
                    className="mt-10"
                    title="Medical AI App"
                ></iframe>
            )}
        </div>
    )
}

export default MindEase