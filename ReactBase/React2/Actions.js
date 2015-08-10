var Actions = Reflux.createActions([
	'filter',
	'filterComplete']);

Actions.filter.listen(function(initialItems, filterBy) {
	var filteredList = initialItems.filter(function(item) {
		return item.toLowerCase().search(filterBy) !== -1;
	});
	Actions.filterComplete(filteredList);
});