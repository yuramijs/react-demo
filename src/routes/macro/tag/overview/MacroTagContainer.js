import React, {Component} from 'react';
import {connect} from 'react-redux';
import MacroTag from './MacroTag';

import getTags from '../../../../actions/macro/getTags';

class MacroTagContainer extends Component {
  componentDidMount() {
    const macro = this.props.currentMacro;
    this.props.getTags(macro);
  }

  render() {
    const {title, tags} = this.props;
    return <MacroTag title={title} tags={tags}/>
  }
}

const mapStateToProps = ({getCurrentMacro, getTags}) => ({
  currentMacro: getCurrentMacro.macro,
  tags: getTags.tags
});
const mapDispatchToProps = {
  getTags
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MacroTagContainer);