module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'class-methods-use-this': 'off',
    'no-use-before-define': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    camelcase: 'off',
  },
};
