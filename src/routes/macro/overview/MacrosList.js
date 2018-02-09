import React, {Fragment} from 'react';
import {connect} from 'react-redux';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './MacroOverview.scss';

import history from '../../../history';

import getCurrentMacro from '../../../actions/macro/currentMacro';
import deleteMacro from '../../../actions/macro/deleteMacro';
import getMacros from '../../../actions/macro/getMacros';

const MacrosList = props => {
  const macros = props.macros && props.macros.macros;

  const openTagPage = id => {
    props.getCurrentMacro(id);
    history.push('tag/overview');
  };
  const openUpdatePage = id => {
    props.getCurrentMacro(id);
    history.push('update');
  };
  const openDefinitionPage = id => {
    props.getCurrentMacro(id);
    history.push('definition/overview');
  };
  const deleteMacro = id => {
    props.deleteMacro(id);
    props.getMacros();
  };

  return (
    <Fragment>
      {macros && macros.map(({uuid, name}) =>
        <tr className={s.macro__item} key={uuid}>
          <td onClick={() => openTagPage(uuid)}>{uuid}</td>
          <td onClick={() => openTagPage(uuid)}>{name}</td>
          <td className={s.macro__delete} onClick={() => openUpdatePage(uuid)}>Update macro</td>
          <td className={s.macro__delete} onClick={() => openDefinitionPage(uuid)}>Open definition</td>
          <td className={s.macro__delete} onClick={() => deleteMacro(uuid)}>Delete</td>
        </tr>
      )}
    </Fragment>
  );
};


const mapStateToProps = ({getCurrentMacro, getMacros}) => ({
  currentMacro: getCurrentMacro,
  macros: getMacros.macros,
});
const mapDispatchToProps = {
  getCurrentMacro,
  deleteMacro,
  getMacros,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(s)(MacrosList));