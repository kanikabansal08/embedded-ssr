'use client';

import { useState, useEffect } from 'react';

export default function MetricsGrid() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Add delay to match connector loading time (8-10 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 5 seconds delay

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="metrics-grid">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="metric-card" style={{ opacity: 0.6 }}>
            <div className="metric-icon" style={{ background: '#e0e0e0', animation: 'pulse 1.5s ease-in-out infinite' }}>
              <div style={{ width: '24px', height: '24px', background: '#f5f5f5', borderRadius: '4px' }}></div>
            </div>
            <div className="metric-content">
              <div className="metric-label" style={{ background: '#e0e0e0', height: '16px', width: '120px', borderRadius: '4px', marginBottom: '8px' }}></div>
              <div className="metric-value" style={{ background: '#e0e0e0', height: '32px', width: '60px', borderRadius: '4px', marginBottom: '4px' }}></div>
              <div className="metric-change" style={{ background: '#e0e0e0', height: '14px', width: '100px', borderRadius: '4px' }}></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="metrics-grid">
      <div className="metric-card">
        <div className="metric-icon metric-icon-blue">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="metric-content">
          <div className="metric-label">Total Components</div>
          <div className="metric-value">12</div>
          <div className="metric-change positive">+2 this month</div>
        </div>
      </div>

      <div className="metric-card">
        <div className="metric-icon metric-icon-green">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 3H4C3.44772 3 3 3.44772 3 4V8C3 8.55228 3.44772 9 4 9H8C8.55228 9 9 8.55228 9 8V4C9 3.44772 8.55228 3 8 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20 3H16C15.4477 3 15 3.44772 15 4V8C15 8.55228 15.4477 9 16 9H20C20.5523 9 21 8.55228 21 8V4C21 3.44772 20.5523 3 20 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 15H4C3.44772 15 3 15.4477 3 16V20C3 20.5523 3.44772 21 4 21H8C8.55228 21 9 20.5523 9 20V16C9 15.4477 8.55228 15 8 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20 15H16C15.4477 15 15 15.4477 15 16V20C15 20.5523 15.4477 21 16 21H20C20.5523 21 21 20.5523 21 20V16C21 15.4477 20.5523 15 20 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="metric-content">
          <div className="metric-label">Active Embeds</div>
          <div className="metric-value">48</div>
          <div className="metric-change positive">+8 this week</div>
        </div>
      </div>

      <div className="metric-card">
        <div className="metric-icon metric-icon-purple">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 12S5 4 12 4S23 12 23 12S19 20 12 20S1 12 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="metric-content">
          <div className="metric-label">Total Views</div>
          <div className="metric-value">1.2K</div>
          <div className="metric-change positive">+124 today</div>
        </div>
      </div>

      <div className="metric-card">
        <div className="metric-icon metric-icon-orange">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 16L12 11L16 15L21 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 10V3H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="metric-content">
          <div className="metric-label">Performance</div>
          <div className="metric-value">98%</div>
          <div className="metric-change neutral">Uptime status</div>
        </div>
      </div>
    </div>
  );
}

