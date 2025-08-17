// Flow validation utility functions

/**
 * Validates the flow before saving
 * @param {Array} nodes - Array of nodes in the flow
 * @param {Array} edges - Array of edges in the flow
 * @returns {Object} - Validation result with isValid boolean and error message
 */
export const validateFlow = (nodes, edges) => {
  // If there are no nodes, the flow is valid (empty flow)
  if (nodes.length === 0) {
    return { isValid: true, error: '' };
  }

  // If there's only one node, the flow is valid
  if (nodes.length === 1) {
    return { isValid: true, error: '' };
  }

  // Check for nodes with empty target handles
  const nodesWithEmptyTargetHandles = getNodesWithEmptyTargetHandles(nodes, edges);

  // Validation rule: If there are more than one nodes and more than one node has empty target handles
  if (nodes.length > 1 && nodesWithEmptyTargetHandles.length > 1) {
    return {
      isValid: false,
      error: 'Cannot save Flow: More than one node has empty target handles. Please connect all nodes properly.'
    };
  }

  // Additional validation: Check for disconnected nodes (nodes with no connections at all)
  const disconnectedNodes = getDisconnectedNodes(nodes, edges);
  if (disconnectedNodes.length > 0) {
    return {
      isValid: false,
      error: `Cannot save Flow: Found ${disconnectedNodes.length} disconnected node(s). Please connect all nodes to create a valid flow.`
    };
  }

  return { isValid: true, error: '' };
};

/**
 * Gets nodes that have empty target handles (no incoming edges)
 * @param {Array} nodes - Array of nodes in the flow
 * @param {Array} edges - Array of edges in the flow
 * @returns {Array} - Array of node IDs with empty target handles
 */
const getNodesWithEmptyTargetHandles = (nodes, edges) => {
  const nodesWithTargetHandles = nodes.filter(node => {
    // Check if this node has any incoming edges (target handles)
    const hasIncomingEdges = edges.some(edge => edge.target === node.id);
    return !hasIncomingEdges;
  });

  return nodesWithTargetHandles.map(node => node.id);
};

/**
 * Gets nodes that are completely disconnected (no incoming or outgoing edges)
 * @param {Array} nodes - Array of nodes in the flow
 * @param {Array} edges - Array of edges in the flow
 * @returns {Array} - Array of node IDs that are disconnected
 */
const getDisconnectedNodes = (nodes, edges) => {
  return nodes.filter(node => {
    // Check if this node has any connections (incoming or outgoing)
    const hasIncomingEdges = edges.some(edge => edge.target === node.id);
    const hasOutgoingEdges = edges.some(edge => edge.source === node.id);
    
    return !hasIncomingEdges && !hasOutgoingEdges;
  }).map(node => node.id);
};

/**
 * Gets the flow statistics for debugging purposes
 * @param {Array} nodes - Array of nodes in the flow
 * @param {Array} edges - Array of edges in the flow
 * @returns {Object} - Flow statistics
 */
export const getFlowStats = (nodes, edges) => {
  const nodesWithEmptyTargetHandles = getNodesWithEmptyTargetHandles(nodes, edges);
  const disconnectedNodes = getDisconnectedNodes(nodes, edges);

  return {
    totalNodes: nodes.length,
    totalEdges: edges.length,
    nodesWithEmptyTargetHandles: nodesWithEmptyTargetHandles.length,
    disconnectedNodes: disconnectedNodes.length,
    nodeTypes: nodes.reduce((acc, node) => {
      acc[node.type] = (acc[node.type] || 0) + 1;
      return acc;
    }, {})
  };
};
