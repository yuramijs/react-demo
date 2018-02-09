import React from 'react';

import Layout from '../../../components/Layout';
import UpdateMacro from './UpdateMacro';

const title = 'Update macro';

const action = () => ({
  chunks: ['update-macro'],
  component: (
    <Layout>
      <UpdateMacro title={title}/>
    </Layout>
  ),
});

export default action;
