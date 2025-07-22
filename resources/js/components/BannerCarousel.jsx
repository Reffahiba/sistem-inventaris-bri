import React, { useEffect, useState } from 'react';

const slides = [
  { id: 1, src: '/assets/banner1.png', alt: 'Banner 1' },
  { id: 2, src: '/assets/banner2.png', alt: 'Banner 2' },
  { id: 3, src: '/assets/banner3.png', alt: 'Banner 3' },
];

export default function BannerCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        width: '1025px',
        height: '218px',
        overflow: 'hidden',
        position: 'relative',
        borderRadius: '12px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      }}
    >
      {/* Slide container */}
      <div
        style={{
          display: 'flex',
          width: `${slides.length * 100}%`,
          transform: `translateX(-${current * (100 / slides.length)}%)`,
          transition: 'transform 0.5s ease-in-out',
        }}
      >
        {slides.map((slide) => (
          <img
            key={slide.id}
            src={slide.src}
            alt={slide.alt}
            style={{
              width: '1025px',
              height: '218px',
              objectFit: 'cover',
              flexShrink: 1,
            }}
          />
        ))}
      </div>

      {/* Bullet Indicators with Glassmorphism Background */}
      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          padding: '6px 16px',
          borderRadius: '9999px',
          background: 'linear-gradient(to right, rgba(255, 255, 255, 0.4), rgba(200, 200, 200, 0.2))',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          display: 'flex',
          gap: '10px',
          alignItems: 'center',
        }}
      >
        {slides.map((_, index) => (
          <div
            key={index}
            style={{
              width: current === index ? '24px' : '10px',
              height: '10px',
              borderRadius: '9999px',
              backgroundColor: current === index
                ? 'rgba(255,255,255,0.9)'
                : 'rgba(255,255,255,0.4)',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>
    </div>
  );
}
