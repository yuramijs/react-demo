const outputTemplate = (name, path, sizes) =>
  `adsmtag.define('def-${name}', {
    path: '${path}',
    size: [
      [[0, 0], ${sizes}]
    ],
    inview: [],
    refresh: 0,
    dependencies: [],
});

`;

export default outputTemplate;