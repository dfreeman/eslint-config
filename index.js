/* eslint-env node */
module.exports = {
  plugins: ['eslint-plugin-prettier'],
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    'prefer-const': 'off',
  },
  overrides: [
    {
      // TypeScript files
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint/eslint-plugin', 'eslint-plugin-prettier'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
      ],
      rules: {
        'no-undef': 'off',
        'prefer-const': 'off',
        '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/array-type': ['error', { default: 'generic' }],
        '@typescript-eslint/explicit-member-accessibility': 'error',
      },
    },
    {
      // Typical project config files
      files: ['.*.js', '*.config.js'],
      env: {
        node: true,
        browser: false,
      },
    },
    {
      // Test files
      files: ['*.test.js', '*.test.ts'],
      env: {
        jest: true,
      },
    },
  ],
};
