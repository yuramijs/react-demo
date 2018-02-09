import React, {Component} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {connect} from 'react-redux';

import ShowStatus from './../../../../components/ShowStatus';
import s from './MacroUpdateTag.scss';
import {graphQueryResp, handleInputChange} from './../../../../helpers';
import MacroCreateDefinition from './../../definition/ChangeDefinition/';

import getCurrentTag from '../../../../actions/tag/currentTag';
import deleteDefinition from '../../../../actions/definition/deleteDefinition';
import getDefinitions from '../../../../actions/definition/getDefinitions';
import getCurrentMacro from '../../../../actions/macro/currentMacro';
import FooterButton from "../../../../components/FooterButton/index";
import TableHead from "../../../../components/TableHead/index";

class MacroUpdateTag extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
      status: null,
      message: null
    };
  }

  componentDidMount() {
    const {macro} = this.props.currentMacro;
    this.props.getDefinitions(macro);
  }

  updateMacroTag = async (event, tag) => {
    event.preventDefault();
    const idTag = this.props.currentTag.tag;
    const idDef = parseInt(event.target.definition.value, 10);

    const link = event.target.action;

    const {macroTagName} = this.state;

    const query = `updateTag(idTag: ${idTag} idDef: ${idDef} name: "${macroTagName}") { id }`;

    try {
      const resp = await graphQueryResp(query);
      const {data} = resp.data;
      const {id} = data.updateTag;
      const status = true;
      const message = `Tag with id ${id} updated!!`;
      this.setState(() => ({status, message}))
    }
    catch (err) {
      const status = false;
      const message = err.toString();

      this.setState(() => ({status, message}))
    }

    this.form.reset();
  };

  toggleShowDefinition = () => this.setState(() => ({show: true}));

  delete = id => {
    const macro = this.props.currentMacro.macro;
    this.props.deleteDefinition(id);
    this.props.getDefinitions(macro)
  };

  //TODO create component definition
  render() {
    let {title, definitions} = this.props;
    const {show, currentTag, name, status, message} = this.state;
    const captions = ['Name'];

    return (
      <div className="card">
        <h4 className="card-header">{title}</h4>
        <form
          ref={el => this.form = el}
          onSubmit={event => this.updateMacroTag(event, currentTag)}>
          <div className="card-body">
            <label htmlFor="macroTagName">Name</label>
            <input
              className="form-control"
              ref="macroTagName"
              name="macroTagName"
              value={name}
              onChange={event => handleInputChange(event, this)}
              required
            />
            <ShowStatus status={status} message={message}/>
          </div>
          <h4 className="card-header">Definition</h4>
          <div className="card-body">
            <div className={s.macro__wrapper}>
              <table className="table table-bordered">
                <TableHead captions={captions}/>
                <tbody>
                {definitions &&
                definitions.map(({id, name}, index) => (
                  <tr key={index}>
                    <td className={s.macro__definition__delete}>
                      <label className={`form-check-label ${s.macro__definition__delete__label}`}>
                        <input
                          className={`form-check-input ${s.macro__definition__delete__input}`}
                          ref="definition"
                          name="definition"
                          value={id}
                          type="radio"
                          onChange={event => handleInputChange(event, this)}/>
                        {name}
                      </label>
                      <div className="btn btn-primary" onClick={() => this.delete(id)}>Delete</div>
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
          <FooterButton text={'Send'}/>
        </form>
        <div className="card-body">
          <div className="btn btn-primary" role="button" onClick={this.toggleShowDefinition}>New defintion</div>
          {show && <MacroCreateDefinition/>}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({getCurrentTag, getCurrentMacro, getDefinitions}) => ({
  currentTag: getCurrentTag,
  currentMacro: getCurrentMacro,
  definitions: getDefinitions.definitions,
});
const mapDispatchToProps = {
  getCurrentTag,
  getDefinitions,
  deleteDefinition,
  getCurrentMacro,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(s)(MacroUpdateTag));