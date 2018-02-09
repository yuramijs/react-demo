import React from 'react';

import Layout from './../../../../components/Layout';
import MacroCreateTagContainer from './MacroCreateTagContainer';

const title = 'Macro create tag';

const action = () => ({
  chunks: ['macro-create-tag'],
  component: (
    <Layout>
      <MacroCreateTagContainer title={title}/>
    </Layout>
  ),
});

export default action;
