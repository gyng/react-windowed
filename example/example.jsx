import React from 'react';
import ReactDOM from 'react-dom';
import Widget from '../src/components/Widget';
import Group from '../src/components/Group';

const widget = (
  <Widget title="🎃&nbsp;&nbsp;Demo widget">
    <div>Hello,</div>
    <Group title="World">
      <input />
      <button>Pull</button>
    </Group>
  </Widget>
);

ReactDOM.render(
  widget,
  document.getElementById('root'),
);
