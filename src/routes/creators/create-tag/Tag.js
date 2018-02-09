import React, {Component} from 'react';
import PropTypes from 'prop-types';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Tag.scss';

import MacroCreateInsert from './MacroCreateInsert';
import Output from '../../../components/Output';
import {getData, handleInputChange} from './../../../helpers';

class Tag extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  createTag = event => {
    event.preventDefault();
    const data = this.state;
    const link = event.target.action;

    const fileLink = getData(link, data);
    fileLink.then(({data}) => {
      const fileLink = data;
      this.setState(() => ({fileLink}))
    });

    this.form.reset();
  };

  render() {
    const {macroOutput, fileLink} = this.state;

    return (
      <div className="card">
        <div className="card-header">
          <h2 className={s.admin__caption}>Create a tag</h2>
        </div>
        <form
          ref={el => this.form = el}
          action="/create-tag"
          onSubmit={event => this.createTag(event)}
          className={s.admin__form}>
          <div className="card-body">
            <label htmlFor="backgroundURL">Background URL</label>
            <input
              className="form-control"
              ref="backgroundURL"
              name="backgroundURL"
              onChange={event => handleInputChange(event, this)}
              required
            />
            <br/>
            <label htmlFor="backgroundWideURL">Background wide URL</label>
            <input
              className="form-control"
              ref="backgroundWideURL"
              name="backgroundWideURL"
              onChange={event => handleInputChange(event, this)}
              required
            />
            <br/>
            <label htmlFor="clickURL">Click URL</label>
            <input
              className="form-control"
              ref="clickURL"
              name="clickURL"
              onChange={event => handleInputChange(event, this)}
              required
            />
          </div>
          <div className="card-footer">
            <button className="btn btn-primary">Send</button>
          </div>
        </form>
        <Output output={fileLink}/>

        <form>
          <div className="card-body">
            <label htmlFor="backgroundURL">Macro insert</label>
            <textarea
              className="form-control"
              rows="5"
              name="macroInsert"
              onChange={event => handleInputChange(event, this)}/>
            <label htmlFor="backgroundURL">Macro output</label>
            <textarea
              className="form-control"
              rows="5"
              value={macroOutput}
              name="macroOutput"
              onChange={event => handleInputChange(event, this)}/>
          </div>
          <div className="card-footer">
            <div className="btn btn-primary" onClick={() => MacroCreateInsert.create(this)}>Create</div>
          </div>
        </form>
      </div>
    );
  }
}

export default withStyles(s)(Tag);

