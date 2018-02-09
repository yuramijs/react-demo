import React, {Component} from 'react';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Account.scss';

import ToggleShow from '../ToggleShow/ToggleShow';

class AccountList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      currentPublisher: null,
    };
  }

  changePublisher = id => this.props.getCurrentPublisher(id);

  show = () => this.setState(() => ({show: !this.state.show}));

  render() {
    const {accounts, currentPublisher} = this.props;
    const {Publishers, name} = accounts;
    const {show} = this.state;
    const collapse = show ? 'collapse show' : 'publisher__item collapse';

    return (
      <div
        className={s.publisher}>
        Account name - {name}
        <ToggleShow show={show} onClick={this.show}/>
        {Publishers &&
        Publishers.map(({id, name}, index) =>
          <div
            onClick={() => this.changePublisher(id)}
            className={collapse}
            key={index}>
            <div className={currentPublisher === id ?
              s.publisher__li_active :
              s.publisher__li}>
              Publisher name - {name}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(s)(AccountList);