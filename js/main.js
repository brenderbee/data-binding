new Vue({
	el: '#app',
  data: {
		counter: 0,
		result: ''
  },
	methods: {
		resultRender: function() {
			this.result = this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
		},
		increase: function() {
			this.counter++;
			this.resultRender();
		},
		decrease: function() {
			this.counter--;
			this.resultRender();
		}
	}
});
