import React, {Component} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {connect} from 'react-redux';
import moment from 'moment';

import history from '../../../../history';

import Link from '../../../../components/Link';

import {changeFormatTime} from './../../../../helpers';

import s from './MacroDefinitions.scss';
import currentDefinition from '../../../../actions/definition/currentDefinition';
import deleteDefinition from '../../../../actions/definition/deleteDefinition';
import TableHead from "../../../../components/TableHead/index";


class MacroDefinitions extends Component {

  deleteDefinition = id => {
    const {macro} = this.props.currentMacro;
    this.props.deleteDefinition(id);
    this.props.getDefinitions(macro);
  };

  openDefinition = id => {
    this.props.currentDefinition(id);
    history.push('update');
  };

  //TODO definition list
  render() {
    const {title, definitions} = this.props;
    const captions = ['Definition', 'Created', 'Last edited', 'Delete definition'];

    return (
      <div className="card">
        <h4 className="card-header">{title}</h4>
        <div className="card-body">
          <Link to="create" className="btn btn-primary">New definition</Link>
          <div className={s.macro__wrapper}>
            <table className="table table-bordered">
              <TableHead captions={captions}/>
              <tbody>
              {definitions &&
              definitions.map(({id, name, createdAt, updatedAt}) =>
                <tr className={s.definition__item} key={id}>
                  <td onClick={() => this.openDefinition(id)}>{name}</td>
                  <td onClick={() => this.openDefinition(id)}>{changeFormatTime(moment, createdAt)}</td>
                  <td onClick={() => this.openDefinition(id)}>{changeFormatTime(moment, updatedAt)}</td>
                  <td className={s.definition__delete} onClick={() => this.deleteDefinition(id)}>Delete</td>
                </tr>
              )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = ({getDefinitions, getCurrentMacro, getCurrentDefinition}) => ({
  currentMacro: getCurrentMacro,
  definition: getCurrentDefinition.definition,
});
const mapDispatchToProps = {
  deleteDefinition,
  currentDefinition,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(s)(MacroDefinitions));