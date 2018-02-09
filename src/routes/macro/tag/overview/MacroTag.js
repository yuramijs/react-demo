import React, {Component} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {connect} from 'react-redux';
import axios from 'axios';

import s from './MacroTag.scss';
import Link from './../../../../components/Link';
import Output from './../../../../components/Output';

import getCurrentMacro from '../../../../actions/macro/currentMacro';
import getCurrentTag from '../../../../actions/tag/currentTag';
import deleteMacroTag from '../../../../actions/macro/deleteMacroTag';

import adsmtag from './templates/template';
import TagsList from './TagsList'
import ShowStatus from "./../../../../components/ShowStatus";
import TableHead from "../../../../components/TableHead";
import ContentUploader from "../../../../components/ContentUploader";

class MacroTag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      generateMacroStatus: {
        success: null,
        message: null
      },
    };
  }

  generateTag = id =>
    this.setState(() => {
      output: adsmtag(id)
    });

  generateMacro = async (tags, currentMacroId) => {
    const data = await axios.post('/upload-macro', {tags, currentMacroId});
    const {success, message} = data.data;

    this.setState(() => ({
      generateMacroStatus: {
        success, message
      }
    }));
  };

  render() {
    const {title, currentMacro, tags} = this.props;
    const {output, generateMacroStatus} = this.state;
    const {success, message} = generateMacroStatus;

    const captions = ['Name', 'Definition', 'Created', 'Last edited', 'Delete'];

    return (
      <div className="card">
        <h4 className="card-header">{title}</h4>
        <div className="card-body">
          <Link to="create" className="btn btn-primary" role="button">New tag</Link>
          <div className={s.macro__wrapper}>
            <table className="table table-bordered">
              <TableHead captions={captions}/>
              <tbody>
              <TagsList tags={tags}/>
              </tbody>
            </table>
          </div>
          <div>
            <ShowStatus status={success} message={message}/>
            <div className='btn btn-primary'
                 onClick={() => this.generateMacro(tags, currentMacro)}>
              Upload macro to store
            </div>
            <br/><br/>
            <div className='btn btn-primary'
                 onClick={() => this.generateTag(currentMacro)}>
              Generate tag
            </div>
            <br/><br/>
            <ContentUploader currentMacro={currentMacro} type={'css.css'} name={'Css'}/>
            <br/><br/>
            <ContentUploader currentMacro={currentMacro} type={'script.js'} name={'JS'}/>
          </div>
        </div>
        <Output output={output} rows={5}/>
      </div>
    )
  }
}


const mapStateToProps = ({getCurrentMacro, getTags}) => ({
  currentMacro: getCurrentMacro.macro,
});
const mapDispatchToProps = {
  getCurrentMacro,
  getCurrentTag,
  deleteMacroTag,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(s)(MacroTag));