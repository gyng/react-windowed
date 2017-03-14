# react-windows

[![Build Status](https://travis-ci.org/gyng/react-windows.svg?branch=master)](https://travis-ci.org/gyng/react-windows)

A toy implementation of Windows-styled windows in React. I use it for wrapping around development tools.

## Installation

    npm install react-windows

or

    yarn add react-windows

## Usage

See `example/` for detailed usage.

```jsx
// Frobulator.jsx
import Group, Widget from 'react-windows';

export default const () => (
  <Widget title="🎃 Pumpkin">
    <Group title="Scissors">
      <button>Frobulate!</button>
    </Group>
  </Widget>
);
```
