import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ToggleShow from './ToggleShow.js';

Enzyme.configure({adapter: new Adapter()});

describe('ToggleShow', () => {
  it('should be defined', () => expect(ToggleShow).toBeDefined());
  it('should have correct className', () => {
    const tree = shallow(<ToggleShow/>);
    const className = tree.props().className;
    expect(className).toEqual('right');
  });
  it('should have correct props', () => {
    const tree = shallow(<ToggleShow/>);
    const props = tree.props().children.props;
    expect(props).toEqual({className: 'fa fa-arrow-up', 'aria-hidden': 'true'});
  });
});