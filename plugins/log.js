import Vue from 'vue';
// import Spline from 'vue-spline';
/* eslint-disable */
const CHARS = [
	[0x1f600, 0x1f64f],
	[0x1f32d, 0x1f37f],
	[0x1f400, 0x1f4d3],
	[0x1f910, 0x1f92f],
];
const randomChar = () => {
	const [min, max] = CHARS[Math.floor(Math.random() * CHARS.length)];
	const charCode = Math.floor(Math.random() * (max - min) + min);
	return String.fromCodePoint(charCode);
};
const randomEmojiLog = {
	install(Vue) {
		Vue.prototype.$elog = function() {
			if (process.dev) {
				console.log(randomChar(), ...arguments);
			}
		};
	},
};
// Vue.component(Spline);
Vue.use(randomEmojiLog);
