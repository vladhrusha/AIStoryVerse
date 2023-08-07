module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    'react/prop-types': 'off',
    '@typescript-eslint/no-var-requires': 'warn',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'prettier/prettier': ['error', require('./.prettierrc.js')],
    'react/function-component-definition': [
      2,
      {
        namedComponents: ['arrow-function'],
        unnamedComponents: ['arrow-function'],
      },
    ],
    'max-len': ['error', { code: 200 }],
    'operator-linebreak': [
      'error',
      'after',
      {
        overrides: {
          '?': 'before',
          ':': 'before',
        },
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {
        extensions: ['.ts', '.tsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },

  overrides: [
    {
      files: ['**/*.jsx', '**/*.tsx', '**/*.js', '**/*.ts'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
      ],
    },
  ],
};
