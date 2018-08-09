new Vue({
	el: '#app',
  data: {
		counter: 0,
		secondCounter: 0,
		result: ''
  },
	computed: {
		output: function() {
			return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
		}
	},
	watch: {
		counter: function(value) {
			let that = this;
			setTimeout(function() {
				that.counter = 0;
			}, 2000);
		}
	},
	methods: {
		resultRender: function() {
			return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
		}
	}
});
