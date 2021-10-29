import { Component } from 'react';
import Hornedbeast from './Hornedbeast';
import { Row } from 'react-bootstrap';

class Main extends Component {
    render() {
        return(
            <Row xs={1} s={2} m={3} lg={4}>
                {this.props.beasts.map( beast => <Hornedbeast {...beast} openModal={this.props.openModal}/>)}
            </Row>
        )
    }
}

export default Main;