import React from 'react';
import Layout from '../../../components/Layout';
import HtmlGenerator from './HtmlGenerator';

const title = 'Html generator';

const action = () => ({
  chunks: ['html-generator'],
  component: (
    <Layout>
      <HtmlGenerator title={title}/>
    </Layout>
  ),
});

export default action;
