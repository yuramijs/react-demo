import React from 'react';

import Layout from '../../components/Layout';
import Login from './Login';

const title = 'Log in';

const action = () => ({
  chunks: ['login'],
  component: (
    <Layout>
      <Login title={title}/>
    </Layout>
  ),
});

export default action;
