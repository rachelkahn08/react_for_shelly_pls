import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';



class Sidebar extends Component {

	componentDidMount() {
		console.log(this.props.homeURL);
	}

	// componentDidMount(argument) {

	// 	 fetch('http://circuslabs.net/~michele.james/php/handle_fetch.php?type=categoryPage',{

 //            method: 'GET',
 //            headers: {
 //            },
 //        })
 //        .then( response => response.json())
 //        .then(json => (
        
 //           this.setState({
 //            data:json,
 //           })
          
 //        ))
	// }
	render() {
		
		return (
			<div className="Sidebar">
				<nav className="Sidebar__nav">
					<h1>Narrow By Category</h1>
					<div className="Sidebar__navlink-container">
					<NavLink className="Sidebar__nav--link" to='/ImageCollection'>All</NavLink>
					<NavLink className="Sidebar__nav--link" to='/cat'>Cat</NavLink>
					<NavLink className="Sidebar__nav--link" to='/dog'>Dog</NavLink>
					</div>
				</nav>
			</div>
		)
	}
}

export default Sidebar;

// links for each category , cat, dog , gallery , ajax call
