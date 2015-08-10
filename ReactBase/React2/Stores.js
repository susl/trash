var foodStore = Reflux.createStore({
	init: function() {
		this.listenTo(Actions.filterComplete, this.filter.bind(this));
	},
	filter: function(filteredItems) {
		this.items = items;
		this.trigger(filteredItems);
	}
});