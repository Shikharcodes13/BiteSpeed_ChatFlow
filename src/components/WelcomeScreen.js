import React from 'react';

// WelcomeScreen component - shown when the flow is empty
const WelcomeScreen = () => {
  return (
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center',
      zIndex: 1,
      pointerEvents: 'none'
    }}>
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        padding: '40px',
        borderRadius: '16px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        maxWidth: '400px'
      }}>
        {/* Welcome Icon */}
        <div style={{
          width: '80px',
          height: '80px',
          margin: '0 auto 20px',
          backgroundColor: '#e3f2fd',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="#1976d2">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
          </svg>
        </div>

        {/* Welcome Text */}
        <h2 style={{
          color: '#1976d2',
          fontSize: '24px',
          fontWeight: '600',
          margin: '0 0 12px 0'
        }}>
          Welcome to Chatbot Flow Builder
        </h2>
        
        <p style={{
          color: '#666',
          fontSize: '16px',
          lineHeight: '1.5',
          margin: '0 0 24px 0'
        }}>
          Start building your chatbot flow by dragging nodes from the panel on the right
        </p>

        {/* Quick Start Steps */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          textAlign: 'left'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{
              width: '24px',
              height: '24px',
              backgroundColor: '#1976d2',
              color: 'white',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
              fontWeight: '600'
            }}>
              1
            </div>
            <span style={{ color: '#333', fontSize: '14px' }}>
              Drag a "Message" node from the right panel
            </span>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{
              width: '24px',
              height: '24px',
              backgroundColor: '#1976d2',
              color: 'white',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
              fontWeight: '600'
            }}>
              2
            </div>
            <span style={{ color: '#333', fontSize: '14px' }}>
              Connect nodes by dragging from source to target handles
            </span>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{
              width: '24px',
              height: '24px',
              backgroundColor: '#1976d2',
              color: 'white',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
              fontWeight: '600'
            }}>
              3
            </div>
            <span style={{ color: '#333', fontSize: '14px' }}>
              Click on nodes to edit their content
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
