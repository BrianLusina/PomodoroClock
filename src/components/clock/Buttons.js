import React, { Component } from 'react';
import '../../styles/buttons.css';

export default class Buttons extends Component{
    render(){
        return(
            <div>
    			<div className="next-pomodoro">Next</div>
    			<div className="reset-pomodoro">Reset</div>
            </div>
        )
    }    
}
