module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'object-curly-spacing': [0, "never"] // 大括号内是否允许不必要的空格,never标识不允许
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  // 全局对象
  globals: {
    '$lib': true
  }
}
