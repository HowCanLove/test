const { getPrettierConfig } = require('@applint/spec');

module.exports = getPrettierConfig('react', {
	'spaced-comment': ['always'],
	semi: true,
	printWidth: 120,
	useTabs: true,
});
