const path = require('path');

module.exports = api => {
  const presets = ['next/babel', '@babel/preset-env', '@babel/preset-react'];
  api.cache(true);
  const plugins = [
    [
      '@babel/transform-runtime',
      {
        regenerator: true
      }
    ]
  ];
  return {
    presets,
    plugins
  };
};
