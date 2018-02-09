import React, {Component} from 'react';
import {connect} from 'react-redux';
import MacroCreateTag from './MacroCreateTag';

import getDefinitions from './../../../../actions/definition/getDefinitions';
import getCurrentMacro from '../../../../actions/macro/currentMacro';
import deleteDefinition from '../../../../actions/definition/deleteDefinition';

class MacroCreateTagContainer extends Component {

  componentDidMount() {
    const macro = this.props.currentMacro;
    this.props.getDefinitions(macro);
  }

  render() {
    let {title, definitions} = this.props;
    const macro = this.props.currentMacro;

    return <MacroCreateTag title={title} macro={macro} definitions={definitions}/>
  }
}

const mapStateToProps = ({getCurrentMacro, getDefinitions}) => ({
  currentMacro: getCurrentMacro.macro,
  definitions: getDefinitions.definitions,
});
const mapDispatchToProps = {
  getCurrentMacro,
  getDefinitions,
  deleteDefinition
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MacroCreateTagContainer);