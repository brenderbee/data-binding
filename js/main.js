new Vue({
	el: '#app',
  data: {
		counter: 0,
		result: ''
  },
	methods: {
		resultRender: function() {
			return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
		}
	}
});
