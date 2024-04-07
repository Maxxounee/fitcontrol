export default {
	head: {
		title: 'components',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
		],
	},
	css: [],
	plugins: [
		'@/plugins/directives',
		'@/plugins/log',
	],
	components: true,
	buildModules: [],
	build: {},
	module: {},
};
