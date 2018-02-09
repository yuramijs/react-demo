import React, {Component} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import ShowStatus from './../../../../components/ShowStatus';
import s from './MacroCreateTag.scss';
import {graphQueryResp, handleInputChange} from './../../../../helpers';
import MacroCreateDefinition from './../../definition/ChangeDefinition/';
import FooterButton from "../../../../components/FooterButton/index";
import TableHead from "../../../../components/TableHead/index";


const ErrorDefinition = ({showError}) => ((showError === null) ?
  <div className="alert alert-danger">Attach definition</div> : null);

const Definition = ({definitions, that}) =>
  definitions.map(({id, name}, index) =>
    <tr key={index}>
      <td className={s.macro__definition__delete}>
        <label className={`form-check-label ${s.macro__definition__delete__label}`}>
          <input
            className={`form-check-input ${s.macro__definition__delete__input}`}
            name="definition"
            value={name}
            type="radio"
            onChange={event => {
              that.setState(() => ({id: id}));
              handleInputChange(event, that);
            }}/>
          {name}
        </label>
        <div className="btn btn-primary" onClick={() => that.delete(id)}>Delete</div>
      </td>
    </tr>
  );

class MacroCreateTag extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
      id: false,
      status: null,
      message: null
    };
  }

  createMacroTag = async (event) => {
    event.preventDefault();
    const {macroTagName, id} = this.state;
    const {macro} = this.props;

    if (id === false) {
      this.setState(() => ({id: null}));
    }

    const query = `createTagForMacro(macro: "${macro}", id: ${id}, name: "${macroTagName}") { id }`;

    try {
      const resp = await graphQueryResp(query);
      const {id} = resp.data.data.createTagForMacro;
      const status = true;
      const message = `Tag with id ${id} created!`;
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
    const {currentMacro} = this.props;
    this.props.deleteDefinition(id);
    this.props.getDefinitions(currentMacro)
  };

  render() {
    let {title, definitions} = this.props;
    const {show, status, message, id} = this.state;
    const captions = ['Name'];

    return (
      <div className="card">
        <h4 className="card-header">{title}</h4>
        <form
          ref={el => this.form = el}
          onSubmit={event => this.createMacroTag(event)}>
          <div className="card-body">
            <label htmlFor="macroTagName">Name</label>
            <input
              className="form-control"
              ref="macroTagName"
              name="macroTagName"
              onChange={event => handleInputChange(event, this)}
              required
            />
            <ShowStatus status={status} message={message}/>
          </div>
          <h4 className="card-header">Definition</h4>
          <div className="card-body">
            <ErrorDefinition showError={id}/>
            <div className={s.macro__wrapper}>
              <table className="table table-bordered">
                <TableHead captions={captions}/>
                <tbody>
                {definitions && <Definition definitions={definitions} that={this}/>}
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

export default withStyles(s)(MacroCreateTag);