import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class SelectedBeast extends React.Component {



    render() {
        return (
            <Modal size="lg" show={this.props.show} onHide={this.props.closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {this.props.renderedBeast.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={this.props.renderedBeast.image_url} alt={this.props.renderedBeast.keyword} style = {{ width: "100%"}} />
                    {this.props.renderedBeast.description}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.closeModal}>
                        Close
                    </Button>
                </Modal.Footer>

            </Modal>
        )
    }
}

export default SelectedBeast;