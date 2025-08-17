import React from 'react'
import bgr1 from '../assets/bgr1.png'
import bgr2 from '../assets/bgr2.png'
import bgr3 from '../assets/bgr3.png'

function AIsection() {
  const teamMembers = [
    {
      id: 1,
      name: "AskMed AI",
      role: "Your AI Health Assistant",
      image: bgr1,
      buttonText: "How can I help?",
      redirectTo: "/medicalai/ask-med"
    },
    {
      id: 2,
      name: "MedImage AI",
      role: "AI-powered medical image analysis",
      image: bgr2,
      buttonText: "What Image you have?",
      redirectTo: "/medicalai/med-image-ai"
    },
    {
      id: 3,
      name: "MindEase AI",
      role: "Your Mental Health Companion",
      image: bgr3,
      buttonText: "What's Problems You have?",
      redirectTo: "/medicalai/mind-ease"
    }
  ]

  const handleRedirect = (url) => {
    window.location.href = url
  }

  return (
    <section style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div style={{ padding: "60px 20px", maxWidth: "1200px", margin: "0 auto" }}>
        <h1 style={{
          fontSize: "30px",
          fontWeight: "500",
          color: "#1e293b",
          textAlign: "center",
          marginBottom: "12px"
        }}>
          Meet Our Medical AI Tools
        </h1>
        <p style={{
          color: "#64748b",
          textAlign: "center",
          fontSize: "16px",
          marginBottom: "48px"
        }}>
          The brilliant AI-powered healthcare solutions, passionate about revolutionizing Health technology.
        </p>
        
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "24px",
          marginTop: "48px"
        }}>
          {teamMembers.map((member) => (
            <div key={member.id} style={{
              maxWidth: "320px",
              backgroundColor: "#000",
              color: "white",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-8px)"
              e.target.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.15)"
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)"
              e.target.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.1)"
            }}>
              <div style={{
                position: "relative",
                marginTop: "-1px",
                overflow: "hidden",
                borderRadius: "16px"
              }}>
                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    height: "270px",
                    width: "100%",
                    borderRadius: "16px",
                    objectFit: "cover",
                    objectPosition: "center",
                    transition: "transform 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.05)"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)"
                  }}
                />
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  zIndex: 10,
                  height: "240px",
                  width: "100%",
                  background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)",
                  pointerEvents: "none"
                }}></div>
              </div>

              <div style={{
                padding: "16px 16px 24px",
                textAlign: "center"
              }}>
                <p style={{
                  marginTop: "16px",
                  fontSize: "18px",
                  fontWeight: "500",
                  marginBottom: "8px"
                }}>
                  {member.name}
                </p>
                <p style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  background: "linear-gradient(to right, #17A4A5, #9938CA, #17A4A5)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  marginBottom: "20px"
                }}>
                  {member.role}
                </p>
                <button 
                  onClick={() => handleRedirect(member.redirectTo)}
                  style={{
                    backgroundColor: "#17A4A5",
                    color: "white",
                    padding: "12px 24px",
                    borderRadius: "25px",
                    fontSize: "14px",
                    fontWeight: "500",
                    border: "none",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease, transform 0.2s ease",
                    boxShadow: "0 4px 15px rgba(23, 164, 165, 0.3)",
                    width: "100%"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#149494"
                    e.target.style.transform = "translateY(-2px)"
                    e.target.style.boxShadow = "0 6px 20px rgba(23, 164, 165, 0.4)"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#17A4A5"
                    e.target.style.transform = "translateY(0)"
                    e.target.style.boxShadow = "0 4px 15px rgba(23, 164, 165, 0.3)"
                  }}
                >
                  {member.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AIsection
