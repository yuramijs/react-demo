import React from 'react';

import Layout from '../../../../components/Layout';
import ChangeDefinition from './../ChangeDefinition';

const title = 'Create definition';

const createQuery = (MacroOverviewId, definition, name, path, view) =>
  `createDefinition(uuid: "${MacroOverviewId}" name: "${name}" path: "${path}" size: ${view}) { id name path size }`;

const action = () => ({
  chunks: ['macro-create-definition'],
  component: (
    <Layout>
      <ChangeDefinition createQuery={createQuery} title={title}/>
    </Layout>
  ),
});

export default action;
