import React from 'react';
import Layout from './../../../../components/Layout';
import ChangeDefinition from './../ChangeDefinition';

const title = 'Update definition';

const createQuery = (MacroOverviewId, definition, name, path, view) =>
  `updateDefinition(id: ${definition} name: "${name}" path: "${path}" size: ${view}) { id name path size}`;

const action = () => ({
  chunks: ['macro-update-definition'],
  component: (
    <Layout>
      <ChangeDefinition createQuery={createQuery} title={title}/>
    </Layout>
  ),
});

export default action;
