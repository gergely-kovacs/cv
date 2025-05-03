import eslint from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import solid from 'eslint-plugin-solid';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
    eslint.configs.recommended,
    tseslint.configs.recommended,
    solid.configs['flat/typescript'],
    eslintConfigPrettier,
    {
        languageOptions: {
            globals: {
                ...globals.browser,
            },
            parser: tsParser,
            ecmaVersion: 'latest',
            sourceType: 'module',
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        files: ['**/*.ts', '**/*.tsx'],
    },
    {
        languageOptions: {
            globals: {
                ...globals.node,
            },
            sourceType: 'script',
            parserOptions: {},
        },
        files: ['**/*.{js,cjs}'],
    },
]);
