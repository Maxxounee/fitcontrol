module.exports = {
	extends: ['stylelint-config-standard-scss', 'stylelint-config-standard-vue/scss', 'stylelint-config-clean-order'],
	rules: {
		'custom-property-pattern': null,
		'scss/dollar-variable-pattern': null,
		'block-no-empty': null,
		'no-descending-specificity': null,
		'scss/no-global-function-names': null,
		'selector-class-pattern': ['^[a-zA-Z]([-]?[a-zA-Z0-9]+)*(__[a-zA-Z0-9]([-]?[a-zA-Z0-9]+)*)?(_[a-zA-Z0-9]([-]?[a-zA-Z0-9]+)*)?$', {
			resolveNestedSelectors: true,
			message: function expected(selectorValue) {
				return `Expected class selector "${selectorValue}" to match BEM CSS pattern;`;
			},
		}],
		'scss/at-mixin-pattern': ['^([a-z][a-z0-9]*)([A-Z]{1}[a-z0-9]*)*$', { message: 'Expected mixin name to be camelCase' }],
		'scss/at-function-pattern': ['^([a-z][a-z0-9]*)([A-Z]{1}[a-z0-9]*)*$', { message: 'Expected mixin name to be camelCase' }],
	},
};
