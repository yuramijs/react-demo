import React, {Component} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {connect} from 'react-redux';

import ShowStatus from './../../../components/ShowStatus';

import {graphQueryResp, handleInputChange} from './../../../helpers';

import s from './UpdateMacro.scss';

import getCurrentMacro from '../../../actions/macro/currentMacro';
import FooterButton from "../../../components/FooterButton/index";

class UpdateMacro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: null,
      message: null
    };
  }

  updateMacro = async (event) => {
    event.preventDefault();
    const {macroName} = this.state;

    const {currentMacro} = this.props;

    //TODO add type
    const query = `updateMacro(uuid: "${currentMacro}", name: "${macroName}" type: 1) {uuid name}`;

    const resp = await graphQueryResp(query);

    try {
      const {name, uuid} = resp.data.data.updateMacro;
      const status = true;
      const message = `Macro with name ${name} and id ${uuid} updated!`;

      this.setState(() => ({status, message}))
    }
    catch (err) {
      const status = false;
      const message = err.toString();

      this.setState(() => ({status, message}))
    }

    this.form.reset();
  };

  componentDidMount() {
    const {currentMacro} = this.props;
    this.refs.macroName.value = (currentMacro && currentMacro.name) || '';
  }

  render() {
    const {title} = this.props;
    const {status, message} = this.state;

    return (
      <div className="card">
        <h4 className="card-header">{title}</h4>
        <form
          ref={el => this.form = el}
          onSubmit={event => this.updateMacro(event)}>
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
  currentMacro: getCurrentMacro.macro,
});
const mapDispatchToProps = {
  getCurrentMacro,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(s)(UpdateMacro));