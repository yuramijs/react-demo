import React from 'react';

import Layout from '../../../components/Layout';
import Account from './Account';

const title = 'Account';

const action = () => ({
  chunks: ['account'],
  component: (
    <Layout>
      <Account title={title}/>
    </Layout>
  ),
});

export default action;
