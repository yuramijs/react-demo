import React from 'react';
import Layout from '../../../components/Layout';
import Tag from './Tag';

const title = 'Tag';

const action = () => ({
  chunks: ['create-tag'],
  component: (
    <Layout>
      <Tag title={title}/>
    </Layout>
  ),
});

export default action;
