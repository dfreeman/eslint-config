/* eslint-env node */
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin', 'eslint-plugin-prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': ['warn', { allowExpressions: true }]
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
      )
    }
  ]
};
