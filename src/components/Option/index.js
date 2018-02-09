import React from 'react';

const Option = ({options}) => options.map(item => <option key={item}>{item}</option>);

export default Option;
