module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'plugin:testing-library/react',
    'plugin:jest/recommended',
    'standard-with-typescript',
    'next'
  ],
  plugins: ['react', 'testing-library', 'react-hooks', 'jest', 'turbo'],
  parser: '@babel/eslint-parser',
  //   parserOptions: {
  //     ecmaFeatures: {
  //       jsx: true,
  //     },
  //     ecmaVersion: 13,
  //     sourceType: "module",
  //   },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'testing-library/await-async-query': 'error',
    'testing-library/no-await-sync-query': 'error',
    // 'testing-library/no-debugging-utils': 'warn',
    'testing-library/no-dom-import': 'off',
    'testing-library/no-node-access': 'off',
    'testing-library/no-container': 'off',
    indent: ['error', 2],
    'no-multi-spaces': ['error'],
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error'
    // 'jest/expect-expect': [
    //   'error',
    //   {
    //     assertFunctionNames: ['expect'],
    //     additionalTestBlockFunctions: []
    //   }
    // ]
  }
}
