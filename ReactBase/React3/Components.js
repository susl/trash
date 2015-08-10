var FilteredList = React.createClass({
  mixins: [Reflux.connect(filterFoodStore, 'items')],

  getInitialState: function() {
    return {
      items: []
    };
  },

  filter: function(e) {
    var filterBy = e.target.value.toLowerCase();
    Actions.filter(filterBy);
  },

  refresh: function() {
    Actions.loadData(['a', 'b', 'c', 'd']);
  },

	render: function(){
		return (
				<div>
					<input type='text' placeholder='Search' onChange={this.filter}/>
          <button onClick={this.refresh}>Refresh</button>
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
