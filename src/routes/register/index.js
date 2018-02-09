import React from 'react';
import Layout from '../../components/Layout';
import Register from './Register';

const title = 'New User Registration';

const action = () => ({
  chunks: ['register'],
  component: (
    <Layout>
      <Register title={title}/>
    </Layout>
  ),
})

export default action;
