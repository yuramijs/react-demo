import React, {Component} from 'react';
import {connect} from 'react-redux';
import MacroOverview from './MacroOverview';

import getMacros from '../../../actions/macro/getMacros';

class MacroOverviewContainer extends Component {
  componentDidMount() {
    this.props.getMacros();
  }

  render() {
    const {title, macros} = this.props;
    return <MacroOverview title={title} macros={macros}/>
  }
}

const mapStateToProps = ({getMacros}) => ({
  macros: getMacros.macros,
});
const mapDispatchToProps = {
  getMacros,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MacroOverviewContainer);