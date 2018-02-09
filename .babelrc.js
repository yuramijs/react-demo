
// Babel configuration
// https://babeljs.io/docs/usage/api/
module.exports = {
  presets: [
    [
      'env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    'stage-2',
    'flow',
    'react',
  ],
  ignore: ['node_modules', 'build'],
};


//templ config for test

/*
*
module.exports = {
  "env": {
    "test": {
      "presets":[
        "flow",
        "stage-0",
        "react"],
      "plugins": [
        "transform-es2015-modules-commonjs",
        "dynamic-import-node"
      ]
    }
  }
}
*
* */