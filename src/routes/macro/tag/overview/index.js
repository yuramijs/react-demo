import React from 'react';
import Layout from './../../../../components/Layout';
import MacroTagContainer from './MacroTagContainer';

const title = 'Macro tag';

const action = () => ({
  chunks: ['macro-tag'],
  component: (
    <Layout>
      <MacroTagContainer title={title}/>
    </Layout>
  ),
});

export default action;
