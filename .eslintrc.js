module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  extends: ['plugin:react/recommended', 'standard-with-typescript'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension

      // As mentioned in the comments, you should extend TypeScript plugins here,
      // instead of extending them outside the `overrides`.
      // If you don't want to extend any rules, you don't need an `extends` attribute.
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
      ],
      plugins: ['react', '@typescript-eslint'],
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'] // Specify it only for TypeScript files
      }
    }
  ],

  /*  parserOptions: {
    proyect: './tsconfig.json',
  }, */

  rules: {}
}
