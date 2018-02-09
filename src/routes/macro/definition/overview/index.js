import React from 'react';
import Layout from './../../../../components/Layout';
import MacroDefinitionsContainer from './MacroDefinitionsContainer';

const title = 'Macro definitions';

const action = () => ({
  chunks: ['macro-definitions'],
  component: (
    <Layout>
      <MacroDefinitionsContainer title={title}/>
    </Layout>
  ),
});

export default action;
