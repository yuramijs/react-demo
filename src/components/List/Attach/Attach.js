import React, {Component} from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './Attach.scss';

import {attach} from "../../../helpers";
import ToggleShow from "../../ToggleShow/ToggleShow";

const attachUserUrl = '/attach-user';
const attachPublisherUrl = '/attach-publisher';

const Li = ({data, id}) => {
  return (data.map(({name}, index) =>
    <li className="list-group-item flex__between mr_30" key={index}>
      <span>User name - {name}</span>
      <i onClick={() => attach(attachUserUrl, id, name)} className="fa fa-plus"></i>
    </li>
  ));
};

class Attach extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  static propTypes = {
    id: PropTypes.string.isRequired,
    subusers: PropTypes.array,
    subproperties: PropTypes.array,
    subpublishers: PropTypes.array,
  };

  show = () => this.setState(() => ({show: !this.state.show}));

  close = () => this.setState(() => ({show: false}));

  render() {
    const {id, subusers, subproperties, subpublishers} = this.props;
    const {show} = this.state;
    const attach = show ? 'attach active' : 'attach';
    const collapse = show ? 'collapse show' : 'collapse';

    return (
      <div>
        <ToggleShow show={show} onClick={this.show}/>
        <div className={attach}>
          <div className="attach__close" onClick={this.close}>+</div>
          <div className={collapse}>
            <div className="card-header">List</div>
            <ul className="list-group list-group-flush">
              {subusers && <Li data={subusers} id={id}/>}
              {subpublishers && <Li data={subpublishers} id={id}/>}
            </ul>
            <ul className="list-group list-group-flush">
              {subproperties && subproperties.map(({url}, index) =>
                <li className="list-group-item" key={index}>
                  <span>Property name - {url}</span>
                  <i onClick={() => attach(attachPublisherUrl, id, url)}> attach this</i>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(s)(Attach);