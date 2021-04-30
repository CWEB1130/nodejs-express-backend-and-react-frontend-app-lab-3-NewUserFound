import React, { Component } from 'react';


	class Properties extends Component {

	  state = { properties: [] }
	  

	  componentDidMount(){
		fetch('/offers')
		  .then(res => res.json())
		  .then(properties => this.setState( { properties }));
	  }

	  render(){
		return (
		  <div>
			{this.state.properties.map(Properties =>
			<section id="properties" key={Properties.id} >
			  <h5>{Properties.property}</h5>
			</section>
			)}
		  </div>
		);
	  }
	}

	export default Properties;