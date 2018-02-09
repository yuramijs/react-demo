import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {isEmpty} from 'lodash';
import moment from 'moment';

import {changeFormatTime} from './../../../../helpers';
import history from '../../../../history';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './MacroTag.scss';

import getCurrentMacro from '../../../../actions/macro/currentMacro';
import deleteMacroTag from '../../../../actions/macro/deleteMacroTag';
import getTags from '../../../../actions/macro/getTags';
import getCurrentTag from '../../../../actions/tag/currentTag';

const TagsList = props => {

  const {tags} = props;

  const deleteTag = id => {
    props.deleteMacroTag(id);

    const macro = props.currentMacro.macro;
    props.getTags(macro);
  };

  const openTag = id => {
    props.getCurrentTag(id);
    history.push('update');
  };

  const handleTag = (id, event) => {
    const targetId = event.target.id;

    if (targetId === 'delete') {
      deleteTag(id);
      return;
    }

    openTag(id);
  };

  const date = data => changeFormatTime(moment, data);

  return (
    <Fragment>
      {tags && tags.map(({id, name, definition, createdAt, updatedAt}) =>
        <tr className={s.macro__item} key={id} onClick={event => handleTag(id, event)}>
          <td>{name}</td>
          <td>{!isEmpty(definition) && definition.name}</td>
          <td>{date(createdAt)}</td>
          <td>{date(updatedAt)}</td>
            <td id='delete' className={s.macro__delete}>Delete</td>
          </tr>
      )}
    </Fragment>
  );

};


const mapStateToProps = ({getCurrentMacro, getCurrentTag}) => ({
  currentMacro: getCurrentMacro,
  currentTag: getCurrentTag,
});
const mapDispatchToProps = {
  getCurrentMacro,
  deleteMacroTag,
  getTags,
  getCurrentTag,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(s)(TagsList));