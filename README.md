# Chatbot Flow Builder

A simple and extensible chatbot flow builder built with React and React Flow. This application allows you to create interactive chatbot flows by connecting message nodes together.

## Features

### 🎯 Core Features

1. **Text Node**
   - Create text message nodes for your chatbot flow
   - Multiple text nodes can exist in one flow
   - Drag and drop nodes from the Nodes Panel to add them to the canvas

2. **Nodes Panel**
   - Displays all available node types
   - Currently supports Message nodes
   - Extensible design for easy addition of new node types
   - Drag and drop functionality to add nodes to the canvas

3. **Edge Connections**
   - Connect nodes together to define flow execution order
   - Visual representation of connections between nodes

4. **Source and Target Handles**
   - **Source Handle**: Origin point for connections (right side of nodes)
     - Can only have **one edge** originating from it
   - **Target Handle**: Destination point for connections (left side of nodes)
     - Can have **multiple edges** connecting to it

5. **Settings Panel**
   - Replaces the Nodes Panel when a node is selected
   - Edit text content of selected Text Nodes
   - View node properties and position information
   - Real-time updates as you type

6. **Save Button with Validation**
   - Save your flow with built-in validation
   - **Validation Rule**: Shows error if there are more than one nodes and more than one node has empty target handles
   - Prevents saving invalid flows

### 🎨 User Interface

- **Clean, Modern Design**: Minimalist interface with intuitive controls
- **Responsive Layout**: Adapts to different screen sizes
- **Visual Feedback**: Hover effects and smooth transitions
- **Error Handling**: Clear error messages for validation issues

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd chatbot-flow-builder
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

## How to Use

### Creating a Flow

1. **Add Nodes**: Drag a "Message" node from the Nodes Panel onto the canvas
2. **Connect Nodes**: Click and drag from a source handle (right side) to a target handle (left side) of another node
3. **Edit Content**: Click on a node to open the Settings Panel and edit the message text
4. **Save Flow**: Click the "Save Changes" button to save your flow

### Flow Validation Rules

The application enforces the following validation rules:

- **Multiple Empty Target Handles**: If there are more than one nodes and more than one node has empty target handles, the flow cannot be saved
- **Disconnected Nodes**: All nodes must be connected to create a valid flow
- **Single Node**: A single node is always valid
- **Empty Flow**: An empty canvas is valid

### Node Types

Currently supported node types:

- **Text Node**: Sends a text message in the chatbot flow
  - Has editable text content
  - Can be connected to other nodes
  - Displays message preview

## Architecture

### Component Structure

```
src/
├── components/
│   ├── TextNode.js          # Text message node component
│   ├── NodesPanel.js        # Panel for available node types
│   ├── SettingsPanel.js     # Panel for editing node properties
│   └── SaveButton.js        # Save button with validation
├── utils/
│   └── flowValidation.js    # Flow validation logic
├── App.js                   # Main application component
├── index.js                 # Application entry point
└── index.css               # Global styles
```

### Key Technologies

- **React**: Frontend framework
- **React Flow**: Flow builder library
- **JavaScript**: Programming language
- **CSS**: Styling

### Extensibility

The application is designed to be easily extensible:

1. **Adding New Node Types**:
   - Add new node type to the `nodeTypes` array in `NodesPanel.js`
   - Create corresponding node component
   - Register in `nodeTypes` object in `App.js`
   - Update validation logic if needed

2. **Custom Validation Rules**:
   - Modify `flowValidation.js` to add new validation logic
   - Update error messages in the validation functions

3. **UI Customization**:
   - Modify component styles in individual component files
   - Update global styles in `index.css`

## Development

### Project Structure

```
chatbot-flow-builder/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/         # React components
│   ├── utils/             # Utility functions
│   ├── App.js             # Main app component
│   ├── index.js           # Entry point
│   └── index.css          # Global styles
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

### Available Scripts

- `npm start`: Start development server
- `npm build`: Build for production
- `npm test`: Run tests
- `npm eject`: Eject from Create React App

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Future Enhancements

Potential features for future versions:

- **Condition Nodes**: Add conditional logic to flows
- **API Nodes**: Make API calls within the flow
- **Media Nodes**: Support for images, videos, and files
- **User Input Nodes**: Collect user input
- **Database Integration**: Save flows to database
- **Flow Templates**: Pre-built flow templates
- **Export/Import**: Export flows as JSON or import from files
- **Collaboration**: Multi-user editing capabilities
