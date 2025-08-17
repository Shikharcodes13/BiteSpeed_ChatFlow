import React from 'react';
import { getFlowStats } from '../utils/flowValidation';

// FlowStats component - displays real-time flow statistics
const FlowStats = ({ nodes, edges }) => {
  const stats = getFlowStats(nodes, edges);

  return (
    <div style={{
      position: 'absolute',
      top: '20px',
      left: '20px',
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      padding: '16px',
      borderRadius: '12px',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      zIndex: 10,
      minWidth: '200px'
    }}>
      <h4 style={{
        margin: '0 0 12px 0',
        color: '#333',
        fontSize: '14px',
        fontWeight: '600',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#1976d2">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
        </svg>
        Flow Statistics
      </h4>
      
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <span style={{ color: '#666', fontSize: '12px' }}>Total Nodes:</span>
          <span style={{ 
            color: '#1976d2', 
            fontSize: '14px', 
            fontWeight: '600',
            backgroundColor: '#e3f2fd',
            padding: '2px 8px',
            borderRadius: '12px'
          }}>
            {stats.totalNodes}
          </span>
        </div>
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <span style={{ color: '#666', fontSize: '12px' }}>Total Connections:</span>
          <span style={{ 
            color: '#4caf50', 
            fontSize: '14px', 
            fontWeight: '600',
            backgroundColor: '#e8f5e8',
            padding: '2px 8px',
            borderRadius: '12px'
          }}>
            {stats.totalEdges}
          </span>
        </div>
        
        {stats.nodesWithEmptyTargetHandles > 0 && (
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <span style={{ color: '#666', fontSize: '12px' }}>Unconnected:</span>
            <span style={{ 
              color: '#ff9800', 
              fontSize: '14px', 
              fontWeight: '600',
              backgroundColor: '#fff3e0',
              padding: '2px 8px',
              borderRadius: '12px'
            }}>
              {stats.nodesWithEmptyTargetHandles}
            </span>
          </div>
        )}
        
        {stats.disconnectedNodes > 0 && (
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <span style={{ color: '#666', fontSize: '12px' }}>Disconnected:</span>
            <span style={{ 
              color: '#f44336', 
              fontSize: '14px', 
              fontWeight: '600',
              backgroundColor: '#ffebee',
              padding: '2px 8px',
              borderRadius: '12px'
            }}>
              {stats.disconnectedNodes}
            </span>
          </div>
        )}
      </div>
      
      {/* Flow Status */}
      <div style={{
        marginTop: '12px',
        paddingTop: '12px',
        borderTop: '1px solid #e0e0e0'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <div style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: stats.totalNodes === 0 ? '#9e9e9e' : 
                           stats.disconnectedNodes > 0 ? '#f44336' : 
                           stats.nodesWithEmptyTargetHandles > 1 ? '#ff9800' : '#4caf50'
          }} />
          <span style={{
            fontSize: '12px',
            color: '#666',
            fontWeight: '500'
          }}>
            {stats.totalNodes === 0 ? 'Empty Flow' :
             stats.disconnectedNodes > 0 ? 'Has Disconnected Nodes' :
             stats.nodesWithEmptyTargetHandles > 1 ? 'Multiple Entry Points' : 'Ready to Save'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FlowStats;
