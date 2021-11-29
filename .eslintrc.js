module.exports = {
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
  ],
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",

    "no-await-in-loop": "warn",
    "no-compare-neg-zero": "error",
    "no-extra-parens": ["warn", "all", {
      nestedBinaryExpressions: false,
    }],
    "no-template-curly-in-string": "error",
    "no-unsafe-negation": "error",
    "valid-jsdoc": ["error", {
      requireReturn: false,
      requireReturnDescription: false,
      prefer: {
        return: "returns",
        arg: "param",
      },
      preferType: {
        String: "string",
        Number: "number",
        Boolean: "boolean",
        Symbol: "symbol",
        object: "Object",
        function: "Function",
        array: "Array",
        date: "Date",
        error: "Error",
        null: "void",
      },
    }],

    "accessor-pairs": "warn",
    "array-callback-return": "error",
    complexity: "warn",
    "consistent-return": "error",
    curly: ["error", "multi-line", "consistent"],
    "dot-location": ["error", "property"],
    "dot-notation": "error",
    eqeqeq: "error",
    "no-console": "off",
    "no-empty-function": "error",
    "no-floating-decimal": "error",
    "no-implied-eval": "error",
    "no-invalid-this": "error",
    "no-lone-blocks": "error",
    "no-multi-spaces": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-new": "error",
    "no-octal-escape": "error",
    "no-return-assign": "error",
    "no-return-await": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-throw-literal": "error",
    "no-unmodified-loop-condition": "error",
    "no-unused-expressions": "error",
    "no-useless-call": "error",
    "no-useless-concat": "error",
    "no-useless-escape": "error",
    "no-useless-return": "error",
    "no-void": "error",
    "no-warning-comments": "warn",
    "prefer-promise-reject-errors": "error",
    "require-await": "warn",
    "wrap-iife": "error",
    yoda: "error",

    "no-label-var": "error",
    "no-shadow": "error",
    "no-undef-init": "error",

    "callback-return": "error",
    "handle-callback-err": "error",
    "no-mixed-requires": "error",
    "no-new-require": "error",
    "no-path-concat": "error",

    "array-bracket-spacing": "error",
    "block-spacing": "error",
    "brace-style": ["error", "1tbs", { allowSingleLine: true }],
    "capitalized-comments": ["error", "always", { ignoreConsecutiveComments: true }],
    "comma-spacing": "error",
    "comma-style": "error",
    "computed-property-spacing": "error",
    "consistent-this": ["error", "$this"],
    "eol-last": "error",
    "func-names": "error",
    "func-name-matching": "error",
    "func-style": ["error", "declaration", { allowArrowFunctions: true }],
    indent: ["error", 2, { SwitchCase: 1 }],
    "key-spacing": "error",
    "keyword-spacing": "error",
    "max-depth": "error",
    // 'max-len': ['error', 120, 2],
    "max-nested-callbacks": ["error", { max: 4 }],
    "max-statements-per-line": ["error", { max: 2 }],
    "new-cap": "error",
    "newline-per-chained-call": ["error", { ignoreChainWithDepth: 3 }],
    "no-array-constructor": "error",
    "no-inline-comments": "error",
    "no-lonely-if": "error",
    "no-mixed-operators": "error",
    "no-multiple-empty-lines": ["error", { max: 2, maxEOF: 1, maxBOF: 0 }],
    "no-new-object": "error",
    "no-spaced-func": "error",
    "no-trailing-spaces": "error",
    "no-unneeded-ternary": "error",
    "no-whitespace-before-property": "error",
    "nonblock-statement-body-position": "error",
    "object-curly-spacing": ["error", "always"],
    "operator-assignment": "error",
    "operator-linebreak": ["error", "after"],
    "padded-blocks": ["error", "never"],
    "quote-props": ["error", "as-needed"],
    quotes: ["error", "double", { avoidEscape: true, allowTemplateLiterals: true }],
    "semi-spacing": "error",
    semi: "error",
    "space-before-blocks": "error",
    "space-before-function-paren": ["error", "never"],
    "space-in-parens": "error",
    "space-infix-ops": "error",
    "space-unary-ops": "error",
    "spaced-comment": "error",
    "template-tag-spacing": "error",
    "unicode-bom": "error",

    "arrow-body-style": "error",
    "arrow-parens": ["error", "as-needed"],
    "arrow-spacing": "error",
    "no-duplicate-imports": "error",
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "prefer-arrow-callback": "error",
    "prefer-numeric-literals": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "rest-spread-spacing": "error",
    "template-curly-spacing": "error",
    "yield-star-spacing": "error",
  },
};
