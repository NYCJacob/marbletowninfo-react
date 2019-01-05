import React, { Component } from 'react';
// import styled from "styled-components";
import {NavLink} from "react-router-dom";
import { styled, css, up, down } from '@smooth-ui/core-sc'

// hamburger style based on https://codepen.io/CreativeJuiz/pen/oCBxz

const StyledOverlayHamburger = styled.div`
${up('sm', css`
  display: none;
`)}

${down('sm', css`
  width: 50px;
`) }

#toggle {
  display: block;
  width: 28px;
  height: 30px;
  margin: 2em auto 10px;
}

#toggle span:after,
#toggle span:before {
  content: "";
  position: absolute;
  left: 0;
  top: -9px;
}
#toggle span:after{
  top: 9px;
}
#toggle span {
  position: relative;
  display: block;
}

#toggle span,
#toggle span:after,
#toggle span:before {
  width: 100%;
  height: 5px;
  background-color: #888;
  transition: all 0.3s;
  backface-visibility: hidden;
  border-radius: 2px;
}

#toggle.on span {
  background-color: transparent;
}
#toggle.on span:before {
  transform: rotate(45deg) translate(5px, 5px);
}
#toggle.on span:after {
  transform: rotate(-45deg) translate(7px, -8px);
}
#toggle.on + #menu {
  opacity: 1;
  display: inline;
}
.overlay {
    height: 100%;
    width: 0;
    position: fixed; 
    z-index: 1; 
    left: 0;
    top: 0;
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0, 0.8);
    overflow-x: hidden;
    transition: 0.5s; 
}

.overlay-content {
    padding: 0;
    position: relative;
    top: 10%; 
    width: 100%;
    text-align: center; 
    margin-top: 2vh;
}

.overlay a {
    padding: 8px;
    text-decoration: none;
    font-size: 36px;
    color: white;
    display: block;
    transition: 0.3s; 
}

.overlay a:hover, .overlay a:focus {
    color: #f1f1f1;
}

.overlay .closebtn {
    position: absolute;
    top: 20px;
    right: 45px;
    font-size: 1.5em;
}

.openNav {
    height: 100%;
    width: 100%;
}

.closeNav {
    height: 0;
}

@media screen and (max-height: 450px) {
    .overlay a {font-size: 1.5em}
    .overlay .closebtn {
        font-size: 1em;
        top: 15px;
        right: 35px;
    }
} 
`;

class OverlayHamburger extends Component {
    constructor(props){
        super(props);
        this.state = {
            isVisible: false,
        };
    }

    toggleMenu(e){
        this.setState({
            isVisible : !this.state.isVisible
        })
    }

    render(){
        return(
            <StyledOverlayHamburger>
                <a href="#menu" id="toggle" className={ `${this.state.isVisible ? 'on' : ''}` } onClick={(e)=> this.toggleMenu(e)}><span></span></a>

                <div id="menu" className={ `${this.state.isVisible ? 'overlay openNav' : 'overlay closeNav'}` }>
                    <button className="closebtn" onClick={(e)=> this.toggleMenu(e)} >&times;</button>
                    <ul className="overlay-content">
                        <li><NavLink to="/" onClick={(e)=> this.toggleMenu(e)}>Home</NavLink></li>
                        <li><NavLink to="/census" onClick={(e)=> this.toggleMenu(e)}>Census</NavLink></li>
                        <li><NavLink to="/townboard" onClick={(e)=> this.toggleMenu(e)}>Town Board</NavLink></li>
                        <li><NavLink to="/proposedlaws/events" onClick={(e)=> this.toggleMenu(e)}>Event Law</NavLink></li>
                        <li><NavLink to="/proposedlaws/accaptsup" onClick={(e)=> this.toggleMenu(e)}>Acc Apt. Law</NavLink></li>
                        <li><NavLink to="/petition" onClick={(e)=> this.toggleMenu(e)}>Petition</NavLink></li>
                        <li><NavLink to="/contact" onClick={(e)=> this.toggleMenu(e)}>Contact</NavLink></li>
                    </ul>
                </div>
            </StyledOverlayHamburger>
        )
    }
}

export default OverlayHamburger;
