module.exports = {
    root: true,
    extends: ["custom"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: ["tsconfig.json"]

    },
};
  