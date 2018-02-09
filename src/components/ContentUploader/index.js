import React, {Component, Fragment} from 'react';
import axios from 'axios';

import ShowStatus from "./../ShowStatus";
import FooterButton from "../FooterButton/index";
import {handleInputChange} from "../../helpers/index";

class ContentUploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditor: false,
      success: null,
      message: null,
    }
  }

  showEditor = () =>
    this.setState(() => ({showEditor: !this.state.showEditor}));

  uploadCss = async (event) => {
    event.preventDefault();
    const {currentMacro, type} = this.props;
    const {data} = this.state;

    const resp = await axios.post('/upload-file', {data, currentMacro, type});
    const {success, message} = resp.data;

    this.setState(() => ({
      success, message
    }));

    this.form.reset();
  };

  render() {
    const {showEditor, success, message} = this.state;
    const {name} = this.props;

    return (
      <Fragment>
        <div className="btn btn-primary" onClick={this.showEditor}>{name} editor</div>
        {showEditor &&
        <div>
          <form ref={el => this.form = el}
                onSubmit={event => this.uploadCss(event)}>
           <textarea
             name="data"
             rows="10"
             cols="120"
             onChange={event => handleInputChange(event, this)}/>
            <FooterButton text={'Upload'}/>
          </form>
          <ShowStatus status={success} message={message}/>
        </div>
        }
      </Fragment>
    )
  }
}

export default ContentUploader;
