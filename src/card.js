import React from 'react';

class Card extends React.Component {
    render () {   
        return(
            <div>
                <h1>{this.props.title}</h1>
                <img src={this.props.src} alt='cat'/>
                <p>{this.props.subTitle}</p>
            </div>
 

        );

    }

}
export default Card;