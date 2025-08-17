import React, { useState, useEffect } from 'react'
import test1 from '../assets/test1.png'
import test2 from '../assets/test2.png'
import test3 from '../assets/test3.png'
import test4 from '../assets/test4.png'
import test5 from '../assets/test5.png'
import test6 from '../assets/test6.png'
import test7 from '../assets/test7.png'

function Testimonials() {
  const [translateX, setTranslateX] = useState(0)

  const images = [test1, test2, test3, test4, test5, test6, test7]

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateX(prev => {
        const newTranslate = prev - 0.5
        // Reset when we've scrolled through all items
        if (Math.abs(newTranslate) >= images.length * 280) {
          return 0
        }
        return newTranslate
      })
    }, 30)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section 
      style={{
        display: "flex",
        width: "100%",
        height: "200px",
        maxWidth: "100%",
        placeItems: "center",
        margin: "0px",
        padding: "20px 10px",
        listStyleType: "none",
        opacity: 1,
        maskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%)",
        overflow: "hidden",
        backgroundColor: "#ffff"
      }}
    >
      <ul 
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          placeItems: "center",
          margin: "0px",
          padding: "0px",
          listStyleType: "none",
          gap: "40px",
          position: "relative",
          flexDirection: "row",
          willChange: "transform",
          transform: `translateX(${translateX}px)`,
          alignItems: "center"
        }}
      >
        {images.map((image, index) => (
          <li key={index} style={{ willChange: "transform" }}>
            <div
              style={{
                width: "200px",
                height: "120px",
                backgroundColor: "white",
                borderRadius: "16px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                padding: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #e2e8f0",
                transition: "all 0.3s ease",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.05)"
                e.target.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.15)"
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)"
                e.target.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.08)"
              }}
            >
              <img 
                src={image} 
                alt="Testimonial" 
                style={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  borderRadius: "12px",
                  objectPosition: "center",
                  objectFit: "cover",
                  filter: "brightness(0.9) contrast(1.1)"
                }}
              />
            </div>
          </li>
        ))}
        
        {/* Duplicate images for seamless loop */}
        {images.map((image, index) => (
          <li key={`duplicate-${index}`} style={{ willChange: "transform" }}>
            <div
              style={{
                width: "200px",
                height: "120px",
                backgroundColor: "white",
                borderRadius: "16px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                padding: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #e2e8f0",
                transition: "all 0.3s ease",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.05)"
                e.target.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.15)"
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)"
                e.target.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.08)"
              }}
            >
              <img 
                src={image} 
                alt="Testimonial" 
                style={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  borderRadius: "12px",
                  objectPosition: "center",
                  objectFit: "cover",
                  filter: "brightness(0.9) contrast(1.1)"
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Testimonials
