import React, { Component } from 'react';
import '../styles/header.css'

export default class Header extends Component{
    render(){
        return(
		<header>
			<div className="row">
				<div className="small-12 medium-12 large-12 columns">
					<h2 id="title">Pomodoro Clock</h2>
					<hr className="underline"/>
				</div>
			</div>
		</header>
        )
    }
}
