import React from 'react';

import Layout from '../../components/Layout';
import Admin from './Admin';

const title = 'Admin Panel';

const action = () => ({
  chunks: ['admin'],
  component: (
    <Layout>
      <Admin title={title}/>
    </Layout>
  ),
});

export default action;
