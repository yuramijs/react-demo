import React from 'react';
import Layout from '../../../components/Layout';
import UserManager from './UserManager';

const title = 'User  manager';

const action = () => ({
  chunks: ['user-manager'],
  component: (
    <Layout>
      <UserManager title={title}/>
    </Layout>
  ),
});

export default action;
