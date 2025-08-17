import React from 'react';

// SaveButton component - handles saving the flow with validation
const SaveButton = ({ onSave }) => {
  return (
    <button
      onClick={onSave}
      style={{
        padding: '10px 20px',
        backgroundColor: '#1976d2',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        fontSize: '14px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = '#1565c0';
        e.target.style.transform = 'translateY(-1px)';
        e.target.style.boxShadow = '0 4px 12px rgba(25, 118, 210, 0.3)';
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = '#1976d2';
        e.target.style.transform = 'translateY(0)';
        e.target.style.boxShadow = 'none';
      }}
      onMouseDown={(e) => {
        e.target.style.transform = 'translateY(0)';
        e.target.style.boxShadow = '0 2px 8px rgba(25, 118, 210, 0.3)';
      }}
      onMouseUp={(e) => {
        e.target.style.transform = 'translateY(-1px)';
        e.target.style.boxShadow = '0 4px 12px rgba(25, 118, 210, 0.3)';
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
