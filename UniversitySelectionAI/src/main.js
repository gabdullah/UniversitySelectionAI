// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { App },
	data() {
		return {
			pos: [],
			college: {
				'name': [
					'Penn State',
					'Kent State',
					'Cincinnati',
					'Ohio State',
					'Ohio University',
					'Harvard',
					'Princeton',
					'Yale',
					'Brown',
					'Stanford',
					'ITT Tech',
				],
				'gpa': [
					'3.6',
					'2.0',
					'3.0',
					'3.2',
					'2.0',
					'3.8',
					'3.8',
					'3.8',
					'3.8',
					'3.7',
					'3.5'
				],
				'sat': [
					'1270',
					'1030',
					'1110',
					'1300',
					'1250',
					'1550',
					'1540',
					'1500',
					'1530',
					'1550',
					'1500'
				],
				'act': [
					'24',
					'25',
					'26',
					'26',
					'26',
					'34',
					'34',
					'33',
					'35',
					'32',
					'30'
				],
				'tuition': [
					'44,600',
					'34,100',
					'43,300',
					'44,700',
					'36,100',
					'63,000',
					'43,400',
					'47,600',
					'47,400',
					'64,500',
					'30,410'
				],
				'ielts': [
					'6.5',
					'6.0',
					'6.5',
					'7.0',
					'6.0',
					'7.0',
					'8.0',
					'7.0',
					'8.0',
					'7.0',
					'n/a'
				],
			},
		};
	},
})
