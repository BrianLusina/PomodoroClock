import Buttons from './Buttons';
import Settings from './Settings';
import React, { Component } from 'react';
import '../../styles/body.css'

export default class Body extends Component{
    render(){
        return(
            <section className="clock">
                <Settings />
                <div className="pomodoro">
                    <div className="fill session"></div>
                    <div className="fill break"></div>
                    <div className="time-left"></div>
                <div className="status">Click to Start</div>
                </div>
                <Buttons />
            </section>
        )
    }
}
		