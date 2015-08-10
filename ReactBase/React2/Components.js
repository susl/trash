var FilteredList = React.createClass({
  filter: function(e) {
    var initialItems = this.state.initialItems;
    var filterBy = e.target.value.toLowerCase();
    Actions.filter(initialItems, filterBy);
  },
  update: function(items) {
    this.setState({
      items: items
    });
  },
  getInitialState: function() {
    return {
      initialItems: [
        "Apples",
        "Broccoli",
        "Chicken",
        "Duck",
        "Eggs",
        "Fish",
        "Granola",
        "Hash Browns"],
      items: []
    };
  },
  componentWillMount: function() {
    this.setState({
      items: this.state.initialItems
    });
  },
  componentDidMount: function() {
    this.unsubscribe = foodStore.listen(this.update);
  },
  componentWillUnmount: function() {
    this.unsubscribe();
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

var List = React.createClass({
  render: function(){
    return (
      <ul>
      {
        this.props.items.map(function(item) {
          return <li key={item}>{item}</li>
        })
       }
      </ul>
    )  
  }
});
