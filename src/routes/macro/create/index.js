import React from 'react';

import Layout from './../../../components/Layout';
import CreateMacro from './CreateMacro';

const title = 'Create macro';

const action = () => ({
  chunks: ['create-macro'],
  component: (
    <Layout>
      <CreateMacro title={title}/>
    </Layout>
  ),
});

export default action;
