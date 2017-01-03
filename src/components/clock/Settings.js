import React, { Component } from 'react';
import '../../styles/settings.css';

export default class Settings extends Component{
    render(){
        return(
            <div className="settings">
				<div className="break">
			  		<div className="description">Break</div>
			  		<div className="value">
						<span className="control db">-</span> 
                        <span className="v">5</span> 
                        <span className="control ib">+</span>
			  		</div>
				</div>
				<div className="session">
			  		<div className="description">Session</div>
			  		<div className="value">
						<span className="control ds">-</span> 
                        <span className="v">25</span> 
                        <span className="control is">+</span>
			  		</div>
				</div>
		  	</div>
        )
    }
}
