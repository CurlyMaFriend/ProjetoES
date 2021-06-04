import { Redirect } from "react-router"
import { Modal, Button, Form } from "react-bootstrap"
import { useState, useEffect } from 'react'

const ModalAlert = ({ car }) => {
    // const [show, setShow] = useState([]);

    const state = {
        isOpen: true
    };

    const handleClose = () => {
        state.isOpen = false
    }

    return (
        <>
            <Modal show={state.isOpen} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Please Insert </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group >
                        <Form.Label>Name: </Form.Label>
                        <Form.Control type="text" onChange={this.handleChange} value={this.state.name} placeholder="name input" />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='success' onClick={handleClose}>
                        Return
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default ModalAlert