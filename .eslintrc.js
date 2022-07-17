module.exports = {
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
    extraFileExtensions: ['.vue']
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.js'],
      parser: '@typescript-eslint/parser',
    }
  ],
  plugins: ['@typescript-eslint', 'vue'],
  // 忽略 src 外的文件，防止 指定的 tsconfig.json 中不包含
  ignorePatterns: ['/**/*.*', '!src/**/*.*'],
  extends: ['./.eslintrc-auto-import', '@ziloen/eslint-config-vue'],
  rules: {}
}