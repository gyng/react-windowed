import React from 'react';
import ReactDOM from 'react-dom';
import Widget from '../src/components/Widget';
import Group from '../src/components/Group';

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
