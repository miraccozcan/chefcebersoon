import React from 'react';

export default function ComingSoonPage() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-white overflow-hidden relative">
      {/* Main Content - Centered */}
      <div className="flex flex-col items-center justify-center text-center">
        {/* Simple SVG Icon */}
        <div className="mb-2">
        <img 
  src="/chef.svg" 
  alt="Chef hat"
  width="250"
  height="250"
  className="text-gray-400"
/>
        </div>

        {/* Coming Soon Text */}
        <div style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
        <h1 className="tracking-wide text-s text-xs" style={{color: "#3A2F1C"}}>
            Coming soon
          </h1>
        </div>
      </div>

      {/* Copyright - Absolute positioned at bottom */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <p className="text-xs text-gray-400" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
          © 2025 Chef Ceber. All rights reserved.
        </p>
      </div>
    </div>
  );
}