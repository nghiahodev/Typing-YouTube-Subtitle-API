import pluginJs from '@eslint/js'
import globals from 'globals'

export default [
  {
    languageOptions: {
      ecmaVersion: 'latest', // Use latest ECMAScript
      sourceType: 'module', // Support import/export
      globals: {
        ...globals.node, // Add global variables of Node.js (process, __dirname, etc.)
      },
    },
  },
  pluginJs.configs.recommended, // Apply ESLint's default configuration
  {
    rules: {
      'no-unused-vars': 'warn', // Warn about unused variables
    },
  },
]
