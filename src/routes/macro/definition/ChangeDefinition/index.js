import React, {Component} from 'react';
import {chunk, flattenDeep} from 'lodash';
import {connect} from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './ChangeDefinition.scss';

import ShowStatus from './../../../../components/ShowStatus';

import getCurrentMacro from '../../../../actions/macro/currentMacro';
import currentDefinition from '../../../../actions/definition/currentDefinition';
import {createArrays, graphQueryResp, unionInArray} from "../../../../helpers";
import Option from "../../../../components/Option";
import FooterButton from "../../../../components/FooterButton/index";

class ChangeDefinition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sizeItems: ['initial'],
      status: null,
      message: null,
    };
  }

  componentDidMount() {
    const {definition} = this.props;
  }

  sendData = null;
  bannersSize = ['1290x590', '928x590', '930x180', '930x600', '160x600', '726x590', '728x90', '300x250'];
  dependenciesItems = ['cncpt-1b1', 'def-rec1', 'def-rec2', 'def-rec3', 'def-mob3'];

  getSize = () => {
    const getWidth = this.width.value;
    const getHeight = this.height.value;

    const viewWidthArray = createArrays(getWidth);
    const viewHeightArray = createArrays(getHeight);

    const widthAndHeight = unionInArray(viewWidthArray, viewHeightArray);

    //remove excess braces (TODO refactor later)
    const size = flattenDeep(widthAndHeight);

    return size;
  };

  getBanners = () => {
    const bannerOptions = [...this.banners.options];

    const banners = bannerOptions
      .filter(item => item.selected)
      .map(item => item.value.replace("x", ", "));

    return banners;
  };

  getView = (size) => {
    const {sizes, banners} = size;
    const banner = chunk(banners, 1);

    const viewArray = [sizes, banner];

    const getViewString = JSON.stringify(viewArray);
    const view = getViewString.replace(/['"]+/g, '');

    return view;
  };

  MacroDefinitionQuery = async (event) => {
    event.preventDefault();

    const {name, path, size} = this.sendData;
    const {definition, createQuery} = this.props;
    const MacroOverviewId = this.props.currentMacro.macro;

    const view = this.getView(size);

    //TODO change params to object
    const query = createQuery(MacroOverviewId, definition, name, path, view);

    try {
      const resp = await graphQueryResp(query);
      const {data} = resp.data;
      const {id, name} = data.createDefinition || data.updateDefinition;
      const status = true;
      const message = `Definition with id ${id} and name ${name} created!`;

      this.setState(() => ({status, message}))
    }
    catch (err) {
      const status = false;
      const message = err.toString();

      this.setState(() => ({status, message}))
    }

    this.form.reset();
  };

  addSize = () => {
    const size = ['new'];
    this.setState(() => ({
      sizeItems: [...this.state.sizeItems, size]
    }));
  };

  handleInputChange = event => {
    const {value, name} = event.target;
    const sendData = {
      [name]: value,
      size: {
        sizes: this.getSize(),
        banners: this.getBanners(),
      }
    };

    this.setState(sendData, () => this.sendData = this.state);
  };

  render() {
    const {sizeItems, status, message} = this.state;

    return (
      <div className="card">
        <h4 className="card-header">Information</h4>
        <form
          ref={el => this.form = el}
          onSubmit={event => this.MacroDefinitionQuery(event)}>

          <div className="card-body">
            <label htmlFor="name">Name</label>
            <input
              className="form-control"
              ref="name"
              name="name"
              onChange={event => this.handleInputChange(event)}
            />

            <label htmlFor="path">Path</label>
            <input
              className="form-control"
              ref="path"
              name="path"
              onChange={event => this.handleInputChange(event)}
            />
          </div>

          <h4 className="card-header">Sizes</h4>
          <div className="card-body">
            {sizeItems &&
            sizeItems.map((item, index) =>
              <div className={s.size} key={index}>
                <label htmlFor="size">Size</label>
                <div className="flex">
                  <input
                    className="input form-control"
                    ref={input => this.width = input}
                    name="viewWidth"
                    onChange={event => this.handleInputChange(event)}
                  />
                  <div className="input-group-addon flex__center">X</div>
                  <input
                    className="input form-control"
                    ref={input => this.height = input}
                    name="viewHeight"
                    onChange={event => this.handleInputChange(event)}
                  />
                </div>
                <label htmlFor="banners">Banners</label>
                <select multiple ref={input => this.banners = input} className="form-control" name="banners"
                        onChange={event => this.handleInputChange(event)}>
                  <Option options={this.bannersSize}/>
                </select>
              </div>
            )}
            <div
              className={s.addSize}
              onClick={this.addSize}>
              <span className={s.addSize__button}>+</span>
            </div>
          </div>

          <h4 className="card-header">Settings</h4>
          <div className="card-body">
            <label htmlFor="inview">Inview</label>
            <input
              className="form-control"
              onChange={event => this.handleInputChange(event)}
            />
            <label htmlFor="refresh">Refresh</label>
            <input
              className="form-control"
              onChange={event => this.handleInputChange(event)}
            />
            <label htmlFor="dependencies">Dependencies</label>
            <select
              ref={dependencies => this.dependencies = dependencies}
              className="form-control"
              name="dependencies"
              onChange={event => this.handleInputChange(event)}>
              <Option options={this.dependenciesItems}/>
            </select>
          </div>
          <ShowStatus status={status} message={message}/>
          <FooterButton text={'Send'}/>
        </form>
      </div>
    )
  }
}


const mapStateToProps = ({getCurrentMacro, getCurrentDefinition}) => ({
  currentMacro: getCurrentMacro,
  definition: getCurrentDefinition.definition,
});
const mapDispatchToProps = {
  getCurrentMacro,
  currentDefinition,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(s)(ChangeDefinition));