import React from 'react';

import Layout from '../../../components/Layout';
import ConvertGPT from './ConvertGPT';

const title = 'Convert GPT';

const action = () => ({
  chunks: ['convert-gpt'],
  component: (
    <Layout>
      <ConvertGPT title={title}/>
    </Layout>
  ),
});

export default action;
