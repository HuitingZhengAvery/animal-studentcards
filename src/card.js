import React from 'react';

class Card extends React.Component {
    render () {   
        return(
            <div className = 'App'>
                <h1>{this.props.title}</h1>
                <img src={this.props.src} alt='cat'/>
                <h2>{this.props.name}</h2>
                <p>SID: {this.props.studentNumber}</p>
                <p>Valid: {this.props.valid}</p>
            </div>
 

        );

    }

}
export default Card;
