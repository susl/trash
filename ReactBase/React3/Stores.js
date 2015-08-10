var initialFoodStore = Reflux.createStore({
	init: function() {
		this.listenTo(Actions.loadData, this.onLoaded.bind(this));
	},
	onLoaded: function(items) {
		this.items = items;
		this.trigger(items);
	}
});

var filterFoodStore = Reflux.createStore({
	init: function() {
		this.listenTo(Actions.filter, this.onFilter.bind(this));
		this.listenTo(initialFoodStore, this.onInitial.bind(this));
	},
	onFilter: function(filterBy) {
		this.filterBy = filterBy;
		this.filter();
	},
	onInitial: function(items) {
		this.initialItems = items;
		this.filter();
	},
	filter: function()
	{
		var that = this;
		this.items = this.initialItems.filter(function(item) {
			return item.toLowerCase().search(that.filterBy) !== -1;
		});
		this.trigger(this.items);
	}
});
