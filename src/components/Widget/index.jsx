import React from 'react';
import Draggable from 'react-draggable';
import s from 'styles/styles.scss';

export default class Widget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      minimized: false,
      open: true,
    };

    this.boundClose = this.close.bind(this);
    this.boundMinimize = this.minimize.bind(this);
  }

  close() {
    this.setState({ open: false });
  }

  minimize() {
    this.setState({ minimized: !this.state.minimized });
  }

  render() {
    const minimizeButton = this.props.minimizable
      ? <button className={s.button} onClick={this.boundMinimize}>＿</button>
      : null;

    const closeButton = this.props.closable
      ? <button className={s.button} onClick={this.boundClose}>Ｘ</button>
      : null;

    const widget = (
      <div className={[s.widget, this.props.className, this.state.minimized ? s.minimized : ''].join(' ')}>
        <div className={['handle', s.titlebar].join(' ')}>
          <span className={s.title}>{this.props.title}</span>
          {minimizeButton}
          {closeButton}
        </div>
        <div>
          {this.state.minimized ? null : this.props.children}
        </div>
      </div>
    );

    const drawnWidget = this.state.open
      ? widget
      : null;

    return (
      <Draggable
        disabled={!this.props.draggable}
        handle=".handle"
      >
        {drawnWidget}
      </Draggable>
    );
  }
}

Widget.propTypes = {
  children: React.PropTypes.element,
  className: React.PropTypes.string,
  closable: React.PropTypes.bool,
  draggable: React.PropTypes.bool,
  minimizable: React.PropTypes.bool,
  title: React.PropTypes.string,
};

Widget.defaultProps = {
  children: <div />,
  className: '',
  closable: true,
  draggable: true,
  minimizable: true,
  title: 'Widget',
};
