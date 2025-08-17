import React, { useState, useCallback, useRef } from 'react';
import ReactFlow, {
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  ReactFlowProvider,
} from 'reactflow';
import 'reactflow/dist/style.css';

import TextNode from './components/TextNode';
import NodesPanel from './components/NodesPanel';
import SettingsPanel from './components/SettingsPanel';
import Header from './components/Header';
import WelcomeScreen from './components/WelcomeScreen';
import FlowStats from './components/FlowStats';
import { validateFlow } from './utils/flowValidation';

// Import node types for React Flow
const nodeTypes = {
  textNode: TextNode,
};

function App() {
  // State for nodes and edges
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  
  // State for selected node and error message
  const [selectedNode, setSelectedNode] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  // React Flow instance ref
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  // Handle edge connections
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  // Handle node selection
  const onNodeClick = useCallback((event, node) => {
    setSelectedNode(node);
    setErrorMessage(''); // Clear any previous errors when selecting a node
  }, []);

  // Handle node deselection (clicking on canvas)
  const onPaneClick = useCallback(() => {
    setSelectedNode(null);
    setErrorMessage('');
  }, []);

  // Handle saving the flow
  const handleSave = useCallback(() => {
    const validationResult = validateFlow(nodes, edges);
    if (validationResult.isValid) {
      setErrorMessage('');
      console.log('Flow saved successfully!', { nodes, edges });
      // Here you would typically send the data to your backend
    } else {
      setErrorMessage(validationResult.error);
    }
  }, [nodes, edges]);

  // Handle drag over event for the canvas
  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  // Handle drop event for adding new nodes
  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData('application/reactflow');

      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

      const newNode = {
        id: `${type}-${Date.now()}`,
        type,
        position,
        data: { 
          label: type === 'textNode' ? 'New Message' : 'New Node',
          text: type === 'textNode' ? 'Enter your message here...' : ''
        },
      };

      setNodes((nds) => [...nds, newNode]);
    },
    [reactFlowInstance, setNodes]
  );

  // Handle React Flow initialization
  const onInit = useCallback((instance) => {
    setReactFlowInstance(instance);
  }, []);

  // Handle updating node data (for settings panel)
  const onNodeDataChange = useCallback((nodeId, newData) => {
    setNodes((nds) =>
      nds.map((node) =>
        node.id === nodeId ? { ...node, data: { ...node.data, ...newData } } : node
      )
    );
  }, [setNodes]);

  return (
    <ReactFlowProvider>
      <div className="app">
        {/* Enhanced Header */}
        <Header onSave={handleSave} nodes={nodes} edges={edges} />

        {/* Error Message Display */}
        {errorMessage && (
          <div style={{
            padding: '12px 20px',
            backgroundColor: '#ffebee',
            color: '#c62828',
            borderBottom: '1px solid #ffcdd2',
            textAlign: 'center',
            fontSize: '14px',
            fontWeight: '500'
          }}>
            {errorMessage}
          </div>
        )}

        {/* Main Content Area */}
        <div style={{ flex: 1, display: 'flex', position: 'relative' }}>
          {/* Flow Canvas */}
          <div ref={reactFlowWrapper} style={{ flex: 1, position: 'relative' }}>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              onNodeClick={onNodeClick}
              onPaneClick={onPaneClick}
              onDragOver={onDragOver}
              onDrop={onDrop}
              onInit={onInit}
              nodeTypes={nodeTypes}
              fitView
            >
              <Controls />
              <Background />
            </ReactFlow>

            {/* Welcome Screen - shown when no nodes exist */}
            {nodes.length === 0 && <WelcomeScreen />}

            {/* Flow Statistics - shown when nodes exist */}
            {nodes.length > 0 && <FlowStats nodes={nodes} edges={edges} />}
          </div>

          {/* Right Panel - Nodes Panel or Settings Panel */}
          <div style={{ 
            width: '300px', 
            backgroundColor: 'white', 
            borderLeft: '1px solid #e0e0e0',
            boxShadow: '-2px 0 8px rgba(0, 0, 0, 0.1)'
          }}>
            {selectedNode ? (
              <SettingsPanel 
                node={selectedNode} 
                onDataChange={onNodeDataChange}
              />
            ) : (
              <NodesPanel />
            )}
          </div>
        </div>
      </div>
    </ReactFlowProvider>
  );
}

export default App;
