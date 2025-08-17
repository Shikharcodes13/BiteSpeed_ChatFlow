import React, { useState, useEffect } from 'react';

// SettingsPanel component - allows editing of selected node properties
const SettingsPanel = ({ node, onDataChange }) => {
  // Local state for form inputs
  const [text, setText] = useState(node.data.text || '');

  // Update local state when node changes
  useEffect(() => {
    setText(node.data.text || '');
  }, [node]);

  // Handle text input changes
  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    onDataChange(node.id, { text: newText });
  };

  // Get node type display name
  const getNodeTypeDisplayName = (type) => {
    switch (type) {
      case 'textNode':
        return 'Message';
      default:
        return type;
    }
  };

  return (
    <div style={{
      padding: '20px',
      height: '100%',
      overflowY: 'auto'
    }}>
      {/* Panel Header */}
      <div style={{
        marginBottom: '20px',
        paddingBottom: '10px',
        borderBottom: '1px solid #e0e0e0',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        <span style={{
          fontSize: '16px',
          color: '#666'
        }}>
          ←
        </span>
        <h3 style={{
          color: '#333',
          fontSize: '18px',
          fontWeight: '600',
          margin: '0'
        }}>
          {getNodeTypeDisplayName(node.type)}
        </h3>
      </div>

      {/* Node ID Display */}
      <div style={{
        marginBottom: '16px',
        padding: '8px 12px',
        backgroundColor: '#f8f9fa',
        borderRadius: '6px',
        border: '1px solid #e9ecef'
      }}>
        <div style={{
          fontSize: '12px',
          color: '#6c757d',
          marginBottom: '4px'
        }}>
          Node ID:
        </div>
        <div style={{
          fontSize: '14px',
          color: '#333',
          fontFamily: 'monospace',
          fontWeight: '500'
        }}>
          {node.id}
        </div>
      </div>

      {/* Settings Form */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
        {/* Text Input Section */}
        <div>
          <label style={{
            display: 'block',
            fontSize: '14px',
            fontWeight: '600',
            color: '#333',
            marginBottom: '8px'
          }}>
            Text
          </label>
          <textarea
            value={text}
            onChange={handleTextChange}
            placeholder="Enter your message here..."
            style={{
              width: '100%',
              minHeight: '100px',
              padding: '12px',
              border: '1px solid #ddd',
              borderRadius: '6px',
              fontSize: '14px',
              fontFamily: 'inherit',
              resize: 'vertical',
              outline: 'none',
              transition: 'border-color 0.2s ease'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#1976d2';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#ddd';
            }}
          />
          <div style={{
            fontSize: '12px',
            color: '#666',
            marginTop: '4px'
          }}>
            {text.length} characters
          </div>
        </div>

        {/* Node Position Info */}
        <div style={{
          padding: '12px',
          backgroundColor: '#f8f9fa',
          borderRadius: '6px',
          border: '1px solid #e9ecef'
        }}>
          <div style={{
            fontSize: '12px',
            color: '#6c757d',
            marginBottom: '8px'
          }}>
            Position:
          </div>
          <div style={{
            fontSize: '14px',
            color: '#333',
            fontFamily: 'monospace'
          }}>
            X: {Math.round(node.position.x)}, Y: {Math.round(node.position.y)}
          </div>
        </div>

        {/* Node Type Info */}
        <div style={{
          padding: '12px',
          backgroundColor: '#e3f2fd',
          borderRadius: '6px',
          border: '1px solid #bbdefb'
        }}>
          <div style={{
            fontSize: '12px',
            color: '#1976d2',
            marginBottom: '4px'
          }}>
            Node Type:
          </div>
          <div style={{
            fontSize: '14px',
            color: '#1976d2',
            fontWeight: '600'
          }}>
            {getNodeTypeDisplayName(node.type)}
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div style={{
        marginTop: '20px',
        padding: '12px',
        backgroundColor: '#fff3cd',
        borderRadius: '6px',
        border: '1px solid #ffeaa7'
      }}>
        <div style={{
          fontSize: '12px',
          color: '#856404',
          lineHeight: '1.4'
        }}>
          <strong>Note:</strong> Changes are automatically saved as you type. Click outside this panel to deselect the node.
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
