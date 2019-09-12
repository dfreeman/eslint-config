/* eslint-env node */
module.exports = {
  plugins: ['eslint-plugin-prettier'],
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    'prefer-const': 'off',
  },
  overrides: [
    {
      files: ['**/*.ts'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint/eslint-plugin', 'eslint-plugin-prettier'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
      ],
      rules: {
        'no-dupe-class-members': 'off',
        '@typescript-eslint/explicit-function-return-type': ['warn', { allowExpressions: true }],
        '@typescript-eslint/no-use-before-define': 'off',
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
  ],
};
