import React from 'react';
import s from 'styles/styles.scss';

const Group = props =>
  <div className={[s.group, props.className].join(' ')}>
    <div className={s.title}><span>{props.title}</span></div>
    {props.children}
  </div>;

Group.propTypes = {
  children: React.PropTypes.node,
  title: React.PropTypes.string,
  className: React.PropTypes.string,
};

Group.defaultProps = {
  children: <div />,
  title: 'Group',
  className: '',
};

export default Group;
