import React, {Component} from 'react';
import {connect} from 'react-redux';
import MacroDefinitions from './MacroDefinitions';

import getDefinitions from '../../../../actions/definition/getDefinitions';

class MacroDefinitionsContainer extends Component {
  componentDidMount() {
    const {currentMacro} = this.props;
    this.props.getDefinitions(currentMacro);
  }

  render() {
    const {title, definitions} = this.props;
    return <MacroDefinitions title={title} definitions={definitions}/>
  }
}

const mapStateToProps = ({getCurrentMacro, getDefinitions}) => ({
  currentMacro: getCurrentMacro.macro,
  definitions: getDefinitions.definitions,
});
const mapDispatchToProps = {
  getDefinitions,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MacroDefinitionsContainer);