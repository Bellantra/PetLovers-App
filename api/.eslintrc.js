module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "standard",
    "eslint-config-prettier",
  ],

  parserOptions: {
    ecmaFeatures: {
      js: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    semi: "off",
  },
};
