import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default class MomsModal extends Component {

  handleClose = () => {
    // we need to pass a function to momsModal from mom(parent) that turns off the modal aka sets show to false this.props.hideModal()
    this.props.hideModal();
  }

  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Overdraft Notice</Modal.Title>
          </Modal.Header>
          <Modal.Body>Mom! Stop giving Billy money!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}
