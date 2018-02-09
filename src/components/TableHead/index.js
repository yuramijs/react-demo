import React from 'react';

const TableHead = ({captions}) =>
  <thead>
  <tr>
    {captions.map((item, index) =>
      <th key={index}>{item}</th>
    )}
  </tr>
  </thead>;

export default TableHead;