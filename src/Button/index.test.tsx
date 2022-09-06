import '@testing-library/jest-dom';
import React from 'react';
// import { render, screen } from '@testing-library/react';
import Enzyme, { render, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
import Button from './index';

describe('Button 组件', () => {
  it('render text by order type', () => {
    const wrapper = shallow(<Button orderType={2}></Button>);
    expect(wrapper.text()).toEqual('已超时');
  });

  it('onClick disabled', () => {
    const onclick = jest.fn();
    const wrapper = shallow(
      <Button onClick={onclick} disabled>
        禁用按钮
      </Button>,
    );
    wrapper.simulate('click');
    expect(onclick).not.toBeCalled();
  });
});
