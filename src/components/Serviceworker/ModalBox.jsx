import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { onPaymentStatus } from '../../Action/ServiceAction';

function ModalBox({ show, setShow, onHide, bid, setpStatus }) {
  const dispatch = useDispatch()

  const formDataPayload = new FormData()
  formDataPayload.append("bid" , bid);
  formDataPayload.append("bookingstatus" , "1");
  const handleYes = () => {
    setpStatus("Complete");
    setShow(false);
    dispatch(onPaymentStatus(formDataPayload ))
  }

  const handleNo = () => {
    setpStatus("Pending");
    setShow(false);
  }

  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className='text-center'>
        <Modal.Title id="contained-modal-title-vcenter" className='text-center h1'>
          Payment Status
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='text-center'><AiOutlineQuestionCircle fontSize={50} style={{ color: '#dc3545' }} /></div>
        <h4 className='text-center h4'>Are you sure payment status complete?</h4>
        <p className='text-center h6'>
          You wouldn't be able to revert this
        </p>
      </Modal.Body>
      <Modal.Footer className='justify-content-between'>
        <Button onClick={handleYes}>Yes</Button>
        <Button variant='danger' onClick={handleNo}>No</Button>
      </Modal.Footer>
    </Modal>
  );
}


export default ModalBox;
