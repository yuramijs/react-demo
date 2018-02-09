import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './MacroOverview.scss';
import Link from './../../../components/Link';

import MacrosList from './MacrosList';
import TableHead from './../../../components/TableHead';

const MacroOverview = ({title, macros}) => {
  const captions = ['GUID', 'Name', 'Update macro', 'Open definition', 'Delete'];

  return (
    <div className="card">
      <h4 className="card-header">{title}</h4>
      <div className="card-body">
        <Link to="create" className="btn btn-primary">Create Macro</Link>
        <div className={s.macro__wrapper}>
          <table className="table table-bordered">
            <TableHead captions={captions}/>
            <tbody>
              <MacrosList macros={macros}/>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
};

export default withStyles(s)(MacroOverview);