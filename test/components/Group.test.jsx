import React from 'react';
import { shallow } from 'enzyme';
import Group from 'components/Group';
import s from 'styles/styles.scss';

describe('Group', () => {
  it('renders the title', () => {
    const wrapper = shallow(<Group title="Hello, world!"><p>foobar</p></Group>);
    const title = wrapper.find(`.${s.title}`);
    expect(title).to.have.length(1);
    expect(title.text()).to.equal('Hello, world!');
  });

  it('renders the children', () => {
    const wrapper = shallow(<Group title="Hello, world!"><p>foobar</p></Group>);
    const child = wrapper.find('p');
    expect(child).to.have.length(1);
    expect(child.text()).to.equal('foobar');
  });
});
