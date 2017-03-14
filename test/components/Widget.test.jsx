import React from 'react';
import { shallow } from 'enzyme';
import Draggable from 'react-draggable';
import Widget from 'components/Widget';
import s from 'styles/styles.scss';

describe('Widget', () => {
  it('renders the title', () => {
    const wrapper = shallow(<Widget title="Hello, world!"><p>foobar</p></Widget>);
    const title = wrapper.find(`.${s.title}`);
    expect(title).to.have.length(1);
    expect(title.text()).to.equal('Hello, world!');
  });

  it('renders the children', () => {
    const wrapper = shallow(<Widget title="Hello, world!"><p>foobar</p></Widget>);
    const child = wrapper.find('p');
    expect(child).to.have.length(1);
    expect(child.text()).to.equal('foobar');
  });

  it('does not render the children if minimized', () => {
    const wrapper = shallow(<Widget title="Hello, world!"><p>foobar</p></Widget>);
    wrapper.setState({ minimized: true });
    const child = wrapper.find('p');
    expect(child).to.have.length(0);
  });

  it('does not render the widget if closed', () => {
    const wrapper = shallow(<Widget title="Hello, world!"><p>foobar</p></Widget>);
    wrapper.setState({ open: false });
    const widget = wrapper.find(Widget);
    expect(widget).to.have.length(0);
  });

  describe('control buttons', () => {
    it('renders the control buttons by default', () => {
      const wrapper = shallow(<Widget />);
      const buttons = wrapper.find(`.${s.button}`);
      expect(buttons).to.have.length(2);
    });

    it('does not renders the close button if not closable', () => {
      const wrapper = shallow(<Widget closable={false} />);
      const close = wrapper.findWhere(b => b.text() === 'Ｘ').find('button');
      expect(close).to.have.length(0);
    });

    it('renders the close button if not closable', () => {
      const wrapper = shallow(<Widget closable />);
      const close = wrapper.findWhere(b => b.text() === 'Ｘ').find('button');
      expect(close).to.have.length(1);
    });

    it('does not renders the minimize button if not minimizable', () => {
      const wrapper = shallow(<Widget minimizable={false} />);
      const minimize = wrapper.findWhere(b => b.text() === '＿').find('button');
      expect(minimize).to.have.length(0);
    });

    it('renders the minimize button if minimizable', () => {
      const wrapper = shallow(<Widget minimizable />);
      const minimize = wrapper.findWhere(b => b.text() === '＿').find('button');
      expect(minimize).to.have.length(1);
    });
  });

  describe('draggable behaviour', () => {
    it('is not Draggable if not draggable', () => {
      const wrapper = shallow(<Widget draggable={false} />);
      const draggable = wrapper.find(Draggable);
      expect(draggable.props().disabled).to.equal(true);
    });

    it('is Draggable if draggable', () => {
      const wrapper = shallow(<Widget draggable />);
      const draggable = wrapper.find(Draggable);
      expect(draggable.props().disabled).to.equal(false);
    });
  });
});
