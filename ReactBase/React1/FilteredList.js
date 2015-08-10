var FilteredList = React.createClass({
	filter: function(e){
		var list = this.state.initialItems;
		var filteredList = list.filter(function(item){
			return item.toLowerCase().search(e.target.value.toLowerCase()) !==-1;
		}); 
		this.setState({items:filteredList});
	},
	getInitialState: function(){
    		return {
       			initialItems: [
         			"Apples",
         			"Broccoli",
         "Chicken",
         "Duck",
         "Eggs",
         "Fish",
         "Granola",
         "Hash Browns"
       ],
       items: []
     };
  },
  componentWillMount: function(){
      this.setState({items:this.state.initialItems});
  },
	render: function(){
		return (
				<div>
					<input type='text' placeholder='Search' onChange={this.filter}/>
					<List items={this.state.items}/>
				</div>	
			);
	},
});

