module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['@underscope/eslint-config'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {},
};
