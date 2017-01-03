import Buttons from './Buttons';
import Settings from './Settings';
import React, { Component } from 'react';


export default class Body extends Component{
    render(){
        return(
            <div>
                <Settings />
                <div className="pomodoro">
                    <div className="fill session"></div>
                    <div className="fill break"></div>
                    <div className="time-left"></div>
                <div className="status">Click to Start</div>
                </div>
                <Buttons />
            </div>
        )
    }
}
		