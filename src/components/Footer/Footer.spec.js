import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from './Footer.js';

Enzyme.configure({adapter: new Adapter()});

describe('Footer', () => {
  it('should be defined', () => expect(Footer).toBeDefined());
  it('should render correctly', () => {
    const tree = shallow(
      <div>
        <img class="Footer-footer__logo-3BzF-" src="/assets/src/components/Footer/footer-logo-color.png?220e400b"
             alt="Adnami footer logo"/>
      </div>
    );
    expect(tree).toMatchSnapshot();
  });
});