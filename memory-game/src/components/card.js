import React, { Component } from 'react';
import './../App.css';


class Card extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div class="memory-card" data-num={this.props.num}>
                <img src={this.props.img} alt={this.props.name}/>
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}

export default Card;