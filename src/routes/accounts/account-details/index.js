import React from 'react';

import Layout from '../../../components/Layout';
import AccountDetails from './AccountDetails';

const title = 'Account details';

const action = () => ({
  chunks: ['account-details'],
  component: (
    <Layout>
      <AccountDetails title={title}/>
    </Layout>
  ),
});

export default action;
