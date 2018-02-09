import React, {Component, PureComponent} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {connect} from 'react-redux';
import uuidv1 from 'uuid/v1';

import ShowStatus from './../../../components/ShowStatus';
import Title from "../../../components/Title/index";

import s from './CreateMacro.scss';
import {graphQueryResp, handleInputChange} from './../../../helpers';

import getCurrentMacro from '../../../actions/macro/currentMacro';
import FooterButton from "../../../components/FooterButton/index";

class createMacro extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      status: null,
      message: null
    };
  }

  createMacro = async (event) => {
    event.preventDefault();
    const id = uuidv1();
    const {macroName} = this.state;

    this.props.getCurrentMacro(id);

    //TODO add type
    const query = `addMacro(name: "${macroName}", type: 1) {uuid name}`;

    try {
      const resp = await graphQueryResp(query);
      const {name, uuid} = resp.data.data.addMacro;
      const status = true;
      const message = `Macro with name ${name} and id ${uuid} created!`;

      this.setState(() => ({status, message}))
    }
    catch (err) {
      const status = false;
      const message = err.toString();

      this.setState(() => ({status, message}))
    }

    this.form.reset();
  };

  render() {
    const {title} = this.props;
    const {status, message} = this.state;

    return (
      <div className="card">
        <Title title={title}/>
        <form
          ref={el => this.form = el}
          onSubmit={event => this.createMacro(event)}>
          <div className="card-body">
            <label htmlFor="macroName">Name</label>
            <input
              className="form-control"
              ref="macroName"
              name="macroName"
              onChange={event => handleInputChange(event, this)}
              required
            />
            <ShowStatus status={status} message={message}/>
          </div>
          <FooterButton text={'Save'}/>
        </form>
      </div>)
  }
}

const mapStateToProps = ({getCurrentMacro}) => ({
  currentMacro: getCurrentMacro,
});
const mapDispatchToProps = {
  getCurrentMacro,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(s)(createMacro));