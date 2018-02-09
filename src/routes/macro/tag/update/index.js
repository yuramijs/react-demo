import React from 'react';

import Layout from './../../../../components/Layout';
import MacroUpdateTag from './MacroUpdateTag';

const title = 'Macro update tag';

const action = () => ({
  chunks: ['macro-update-tag'],
  component: (
    <Layout>
      <MacroUpdateTag title={title}/>
    </Layout>
  ),
});

export default action;
