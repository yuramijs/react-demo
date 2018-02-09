import React from 'react';
import Layout from '../../../components/Layout';
import MacroOverviewContainer from './MacroOverviewContainer';

const title = 'Macro overview';

const action = () => ({
  chunks: ['macro-overview'],
  component: (
    <Layout>
      <MacroOverviewContainer title={title}/>
    </Layout>
  ),
});

export default action;
