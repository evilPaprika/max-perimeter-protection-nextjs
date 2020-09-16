module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'simple-import-sort',
  ],
  rules: {
    'react/jsx-indent': ['error', 4],
    'react/jsx-indent-props': ['error', 4],
    'comma-dangle': 'off',
    'max-len': ['error', 120],
    'no-console': 'error',
    'no-param-reassign': 'off',
    'object-curly-newline': [
      'error',
      {
        multiline: true,
        consistent: true
      }
    ],
    'arrow-body-style': 'off',
    'react/jsx-props-no-spreading': 'off',
    semi: 'error',
    'import/no-named-as-default': 'off',
    'newline-before-return': 'error',
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/no-array-index-key': 'off',
    'max-classes-per-file': 'off',
    'import/newline-after-import': ['error', { count: 2 }],
    'jsx-a11y/accessible-emoji': 'off',
    curly: ['error', 'all'],
    'simple-import-sort/sort': 'error',
    'sort-imports': 'off',
    'import/first': 'error',
    'import/no-duplicates': 'error',
    'react/prop-types': 'off',
    camelcase: 'off',
  },
};
