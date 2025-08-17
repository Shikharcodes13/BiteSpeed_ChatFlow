import React from 'react';
import SaveButton from './SaveButton';

// Enhanced Header component with better styling
const Header = ({ onSave, nodes, edges }) => {
  const stats = nodes.length > 0 ? `${nodes.length} node${nodes.length !== 1 ? 's' : ''}, ${edges.length} connection${edges.length !== 1 ? 's' : ''}` : 'Empty flow';

  return (
    <div style={{
      padding: '16px 24px',
      backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
    }}>
      {/* Left Section - Title and Stats */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '24px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          {/* Logo Icon */}
          <div style={{
            width: '40px',
            height: '40px',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(10px)'
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
            </svg>
          </div>
          
          {/* Title */}
          <div>
            <h1 style={{
              color: 'white',
              fontSize: '24px',
              fontWeight: '700',
              margin: '0',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
            }}>
              Chatbot Flow Builder
            </h1>
            <p style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '14px',
              margin: '4px 0 0 0',
              fontWeight: '400'
            }}>
              {stats}
            </p>
          </div>
        </div>
      </div>

      {/* Right Section - Actions */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px'
      }}>
        {/* Quick Actions */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '8px 12px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '6px',
              fontSize: '12px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
            </svg>
            Reset
          </button>
          
          <button
            onClick={() => {
              const flowData = { nodes, edges };
              const dataStr = JSON.stringify(flowData, null, 2);
              const dataBlob = new Blob([dataStr], { type: 'application/json' });
              const url = URL.createObjectURL(dataBlob);
              const link = document.createElement('a');
              link.href = url;
              link.download = 'chatbot-flow.json';
              link.click();
              URL.revokeObjectURL(url);
            }}
            style={{
              padding: '8px 12px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '6px',
              fontSize: '12px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
            </svg>
            Export
          </button>
        </div>

        {/* Save Button */}
        <SaveButton onSave={onSave} />
      </div>
    </div>
  );
};

export default Header;
