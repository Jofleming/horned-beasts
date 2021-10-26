import { Component } from 'react';

class Hornedbeast extends Component {
    render() {
        return(
            <>
            <h2>{this.props.name}</h2>
            <img src={this.props.url} alt={this.props.alt} title={this.props.title}></img>
            <p>{this.props.description}</p>
            </>

        )
    }
}

export default Hornedbeast;