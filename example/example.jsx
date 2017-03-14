import React from 'react';
import ReactDOM from 'react-dom';
import { Widget, Group } from 'react-windowed';

const widget = (
  <Widget title="🎃&nbsp;&nbsp;Pumpkin">
    <div>Hello, world!</div>
    <Group title="Scissors">
      <input />
      <button>Frobulate!</button>
    </Group>
  </Widget>
);

ReactDOM.render(
  widget,
  document.getElementById('root'),
);
