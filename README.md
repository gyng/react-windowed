# react-windows

A toy implementation of Windows-styled windows in React. I use it for wrapping around development tools.

## Installation

    npm install react-windows

or

    yarn add react-windows

## Usage

See `example/` for detailed usage.

    // src/MyComponent.jsx
    import Group, Widget from 'react-windows';
    
    export default const () => (
      <Widget title="🎃 Pumpkin">
        <Group title="Scissors">
          <button>Activate!</button>
        </Group>
      </Widget>
