import React from 'react';

// NodesPanel component - displays available node types for dragging
const NodesPanel = ({ onAddNode }) => {
  // Available node types - easily extensible for future node types
  const nodeTypes = [
    {
      type: 'textNode',
      label: 'Message',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#1976d2">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
        </svg>
      ),
      description: 'Send a text message'
    }
    // Future node types can be easily added here:
    // {
    //   type: 'conditionNode',
    //   label: 'Condition',
    //   icon: <ConditionIcon />,
    //   description: 'Add conditional logic'
    // },
    // {
    //   type: 'apiNode',
    //   label: 'API Call',
    //   icon: <ApiIcon />,
    //   description: 'Make an API request'
    // }
  ];

  // Handle drag start for adding nodes to the canvas
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
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
        borderBottom: '1px solid #e0e0e0'
      }}>
        <h3 style={{
          color: '#333',
          fontSize: '18px',
          fontWeight: '600',
          margin: '0'
        }}>
          Nodes Panel
        </h3>
        <p style={{
          color: '#666',
          fontSize: '14px',
          margin: '8px 0 0 0'
        }}>
          Drag and drop nodes to build your flow
        </p>
      </div>

      {/* Node Types List */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
        {nodeTypes.map((nodeType) => (
          <div
            key={nodeType.type}
            draggable
            onDragStart={(event) => onDragStart(event, nodeType.type)}
            style={{
              padding: '12px',
              border: '2px solid #e3f2fd',
              borderRadius: '8px',
              backgroundColor: 'white',
              cursor: 'grab',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = '#1976d2';
              e.target.style.transform = 'translateY(-1px)';
              e.target.style.boxShadow = '0 4px 12px rgba(25, 118, 210, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = '#e3f2fd';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            {/* Node Icon */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              backgroundColor: '#f5f5f5',
              borderRadius: '6px'
            }}>
              {nodeType.icon}
            </div>

            {/* Node Info */}
            <div style={{ flex: 1 }}>
              <div style={{
                fontWeight: '600',
                color: '#333',
                fontSize: '14px',
                marginBottom: '2px'
              }}>
                {nodeType.label}
              </div>
              <div style={{
                color: '#666',
                fontSize: '12px'
              }}>
                {nodeType.description}
              </div>
            </div>

            {/* Drag Indicator */}
            <div style={{
              color: '#999',
              fontSize: '12px'
            }}>
              Drag
            </div>
          </div>
        ))}
      </div>

      {/* Instructions */}
      <div style={{
        marginTop: '20px',
        padding: '12px',
        backgroundColor: '#f8f9fa',
        borderRadius: '6px',
        border: '1px solid #e9ecef'
      }}>
        <div style={{
          fontSize: '12px',
          color: '#6c757d',
          lineHeight: '1.4'
        }}>
          <strong>Tip:</strong> Drag any node from this panel and drop it onto the canvas to add it to your flow.
        </div>
      </div>
    </div>
  );
};

export default NodesPanel;
