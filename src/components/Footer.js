import React, { Component } from 'react';
import '../styles/footer.css';

export default class Footer extends Component{
    render(){
        return(
        <footer className="footer">
			<p>Created by <a href="http://codepen.io/thelusina">The Lusina</a> using 
                <i className="fa fa-clock-o"></i>.
            </p>
        </footer>
        )
    }
}
