import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './Size.scss';

const Size = ({index}) => {
  const bannersSize = ['1290x590', '928x590', '930x180', '930x600', '160x600', '726x590', '728x90', '300x250'];

  return (
    <div className={s.size} key={index}>
      <label htmlFor="size">Size</label>
      <div className="flex">
        <input
          className="input form-control"
          name="viewWidth"
          onChange={this.handleInputChangeM}
        />
        <div className="input-group-addon flex__center">X</div>
        <input
          className="input form-control"
          name="viewHeight"
          onChange={this.handleInputChangeM}
        />
      </div>
      <label htmlFor="banners">Banners</label>
      <select multiple className="form-control" name="banners"
              onChange={this.handleInputChangeM}>
        {bannersSize.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  )
};

export default withStyles(s)(Size);