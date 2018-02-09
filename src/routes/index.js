const routes = {
  path: '',
  children: [
    {
      path: '',
      load: () => import(/* webpackChunkName: 'admin' */ './admin'),
    },
    {
      path: '/login',
      load: () => import(/* webpackChunkName: 'login' */ './login'),
    },
    {
      path: '/register',
      load: () => import(/* webpackChunkName: 'register' */ './register'),
    },
    {
      path: '/admin',
      load: () => import(/* webpackChunkName: 'admin' */ './admin'),
    },
    {
      path: '/account',
      load: () => import(/* webpackChunkName: 'account' */ './accounts/account'),
    },
    {
      path: '/account-details',
      load: () => import(/* webpackChunkName: 'account-details' */ './accounts/account-details'),
    },
    {
      path: '/user-manager',
      load: () => import(/* webpackChunkName: 'user-manager' */ './accounts/user-manager'),
    },
    {
      path: '/create-tag',
      load: () => import(/* webpackChunkName: 'create-tag' */ './creators/create-tag'),
    },
    {
      path: '/create-inter-tag',
      load: () => import(/* webpackChunkName: 'create-inter-tag' */ './creators/create-inter-tag'),
    },
    {
      path: '/html-generator',
      load: () => import(/* webpackChunkName: 'html-generator' */ './creators/html-generator'),
    },
    {
      path: '/convert-gpt',
      load: () => import(/* webpackChunkName: 'convert-gpt' */ './creators/convert-gpt'),
    },
    {
      path: '/macro',
      children: [
        {
          path: '/overview',
          load: () => import(/* webpackChunkName: 'macro-overview' */ './macro/overview'),
        },
        {
          path: '/create',
          load: () => import(/* webpackChunkName: 'create-macro' */ './macro/create'),
        },
        {
          path: '/update',
          load: () => import(/* webpackChunkName: 'update-macro' */ './macro/update'),
        },
        {
          path: '/definition',
          children: [
            {
              path: '/overview',
              load: () => import(/* webpackChunkName: 'macro-definitions' */ './macro/definition/overview'),
            },
            {
              path: '/create',
              load: () => import(/* webpackChunkName: 'macro-create-definition' */ './macro/definition/create'),
            },
            {
              path: '/update',
              load: () => import(/* webpackChunkName: 'macro-update-definition' */ './macro/definition/update'),
            },
          ],

        },
        {
          path: '/tag',
          children: [
            {
              path: '/overview',
              load: () => import(/* webpackChunkName: 'macro-tag' */ './macro/tag/overview'),
            },
            {
              path: '/create',
              load: () => import(/* webpackChunkName: 'macro-create-tag' */ './macro/tag/create'),
            },
            {
              path: '/update',
              load: () => import(/* webpackChunkName: 'macro-update-tag' */ './macro/tag/update'),
            },
          ],

        }
      ]
    },
    {
      path: '(.*)',
      load: () => import(/* webpackChunkName: 'not-found' */ './not-found'),
    },
  ],

  async action({next}) {
    // Execute each child route until one of them return the result

    const route = await next();

    // Provide default values for title, description etc.
    route.title = `${route.title || 'Adnami'}`;
    route.description = route.description || '';

    return route;
  },
};

if (__DEV__) {
  routes.children.unshift({
    path: '/error',
    action: require('./error').default,
  });
}

export default routes;
