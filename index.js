/* eslint-env node */
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin', 'eslint-plugin-prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prefer-const': 'off',
    '@typescript-eslint/explicit-function-return-type': ['warn', { allowExpressions: true }],
    '@typescript-eslint/no-use-before-define': 'off',
  },
  overrides: [
    {
      files: ['**/*.js'],
      rules: Object.keys(require('@typescript-eslint/eslint-plugin/dist/configs/recommended').rules).reduce(
        (rules, rule) => {
          rules[rule] = 'off';
          return rules;
        },
        {}
      ),
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
