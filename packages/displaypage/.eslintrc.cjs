module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'indent': ['warn', 4, {
			'SwitchCase': 1,
			'MemberExpression': 'off',
			'flatTernaryExpressions': true,
			'ArrayExpression': 'first',
			'ObjectExpression': 'first',
		}],
    'semi': ['error', 'always'],
    'semi-spacing': ['error', { 'before': false, 'after': true }],
		'quotes': ['warn', 'double'],
		'comma-dangle': ['warn', 'always-multiline'],
  },
}
