import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { GoThumbsup } from 'react-icons/go'

class Hornedbeast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likesNum: 0
        }
    }

    handleClick = () => {
        this.props.openModal(this.props.title);
    }

    handleLike = () => {
        this.setState({ likesNum: this.state.likesNum + 1});
    }

    render() {
        return(
            <Card style ={{ width: '18rem'}}>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Img onClick={this.handleClick} src={this.props.image_url} alt={this.props.keyword} />
                <Card.Body>
                    <Card.Text>{this.props.description}</Card.Text>
                    <Button onClick={this.handleLike}><GoThumbsup/> {this.state.likesNum}</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default Hornedbeast;