import React from 'react';

// SaveButton component - handles saving the flow with validation
const SaveButton = ({ onSave }) => {
  return (
    <button
      onClick={onSave}
      style={{
        padding: '12px 24px',
        backgroundColor: '#4caf50',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        fontSize: '14px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        boxShadow: '0 2px 8px rgba(76, 175, 80, 0.3)',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = '#45a049';
        e.target.style.transform = 'translateY(-2px)';
        e.target.style.boxShadow = '0 6px 20px rgba(76, 175, 80, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = '#4caf50';
        e.target.style.transform = 'translateY(0)';
        e.target.style.boxShadow = '0 2px 8px rgba(76, 175, 80, 0.3)';
      }}
      onMouseDown={(e) => {
        e.target.style.transform = 'translateY(0)';
        e.target.style.boxShadow = '0 2px 8px rgba(76, 175, 80, 0.3)';
      }}
      onMouseUp={(e) => {
        e.target.style.transform = 'translateY(-2px)';
        e.target.style.boxShadow = '0 6px 20px rgba(76, 175, 80, 0.4)';
      }}
    >
      {/* Save Icon */}
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/>
      </svg>
      Save Changes
    </button>
  );
};

export default SaveButton;
