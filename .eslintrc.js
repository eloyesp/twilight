module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  globals: {
    Shopify: 'readonly'
  },
  ignorePatterns: [
    /**
     * ignore certain files
     * docs: https://eslint.org/docs/user-guide/configuring#ignorepatterns-in-config-files
     */
    // 'my-file.js',
    // '**/my-directory/*.js'
  ],
  rules: {
    /**
     * add custom rules
     * docs: https://eslint.org/docs/rules
     */
    'no-unused-vars': 'off',
    // 'quotes': ['error', 'single'],
    // 'semi': ['error', 'never']
  }
}
