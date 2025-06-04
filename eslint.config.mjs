import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import reactPlugin from 'eslint-plugin-react';
import prettier from 'eslint-config-prettier';

/**  @type {import("eslint").Linter.FlatConfig[]} */
export default [
  {
    ignores: [
      'dist',
      'node_modules',
      '.husky',
      '.gitignore',
      '.vscode',
      '.config.js',
      '.env',
      'package-lock.json',
      '.prettierrc',
      'src/routeTree.gen.ts',
      'eslint.config.mjs',
    ],
  },
  js.configs.recommended,
  {
    ...reactPlugin.configs.flat.recommended,
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  reactPlugin.configs.flat['jsx-runtime'],
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react/no-unescaped-entities': 'off',
      'react/prop-types': 'off',

      // 👇 Custom rule to block component-style arrow functions
      'no-restricted-syntax': [
        'error',
        {
          selector: 'ExportDefaultDeclaration > ArrowFunctionExpression',
          message:
            'Use function declaration instead of arrow function for default export.',
        },
        {
          selector: 'VariableDeclarator > ArrowFunctionExpression',
          message: 'Use function declaration instead of arrow function.',
        },
      ],
    },
  },
  prettier,
];
