import Vue from 'vue';

function intersectingClass(Vue) {
	Vue.directive('inter-class', {
		inserted(el, {
			value,
			modifiers,
		}) {
			try {
				const options = {
					threshold: value.threshold ?? 0,
					rootMargin: value.rootMargin ?? '0px',
				};

				function setStyleAttributes(entries) {
					if (entries[0].isIntersecting) {
						console.log(entries, value);
						el.classList.add(value.class);
					} else if
					(!modifiers.once) {
						el.classList.remove(value.class);
					}
				}

				new IntersectionObserver(setStyleAttributes, options).observe(el);
			} catch (error) {
				console.warn(error);
			}
		},
	});
}

function noLineBreak(Vue) {
	function addNbsp(value) {
		return value ? value.replace(/(\s[а-яa-z]{1,2})\s+/ig, '$1&nbsp;') : value;
	}

	Vue.directive('nbsp', {
		inserted(el) {
			el.innerHTML = addNbsp(el.innerHTML);
		},
		update(el) {
			el.innerHTML = addNbsp(el.innerHTML);
		},
	});
}

function stripTags(Vue) {
	function stripTags(string) {
		if (string) {
			return string.replace(/<{1}\/*(?!b|em|i|small|strong|sub|sup|ins|del|mark)(\b([a-z0-9]+)\b)\/*>{1}/gm, '');
		} else {
			return string;
		}
	}

	Vue.directive('strip-tags', {
		inserted(el) {
			el.innerHTML = stripTags(el.innerHTML);
		},
		update(el) {
			el.innerHTML = stripTags(el.innerHTML);
		},
	});
}

function formatNumber(Vue) {
	function addSpace(num) {
		if (!num) {
			return num;
		}
		num = String(num);
		if (num.includes('.')) {
			num = num.split('.');
			return `${num[0].replace(/(\d)(?=(\d{3})+$)/g, '$1 ')}.${num[1]}`;
		} else {
			return num.replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
		}
	}

	Vue.directive('format-number', {
		inserted(el) {
			el.innerHTML = addSpace(el.innerHTML);
		},
		update(el) {
			el.innerHTML = addSpace(el.innerHTML);
		},
	});
}

function brBreak(Vue) {
	function addBrBrake(text) {
		const array = text.replace(/<br\s\/>|<br>/gi, '<br/>').split('<br/>');
		return array.map((item, index) => {
			return `<span style="--i: ${index}">${item}</span>`;
		}).join('');
	}

	Vue.directive('br-break', {
		inserted(el) {
			el.innerHTML = addBrBrake(el.innerHTML);
		},
		update(el) {
			el.innerHTML = addBrBrake(el.innerHTML);
		},
	});
}

/** v-intersect="'className'".
 *  *  Intersection observer, добавляющий класс, при появлении блока во viewport. */
intersectingClass(Vue);
/** v-nbsp
 *  * Добавить &nbsp для висячих предлогов */
noLineBreak(Vue);
/** v-format-number
 *  * Разделение числа пробелами  */
formatNumber(Vue);
/** v-strip-tags
 * * Удалить html теги из текста  */
stripTags(Vue);
/** v-br-break
 *  * Разбиение текста по <br /> и замена на <span> ...someText... </span>
 *  * Добавляет каждому span инлайновую переменную --i со значением индекса */
brBreak(Vue);
