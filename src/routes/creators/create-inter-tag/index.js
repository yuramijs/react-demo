import React from 'react';
import Layout from '../../../components/Layout';
import InterTag from './InterTag';

const title = 'Inter Tag';

const action = () => ({
  chunks: ['create-inter-tag'],
  component: (
    <Layout>
      <InterTag title={title}/>
    </Layout>
  ),
});

export default action;
