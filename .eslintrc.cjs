const { getESLintConfig } = require('@applint/spec');

module.exports = getESLintConfig('common-ts', {
	plugins: ['react-hooks'],
	rules: {},
});
