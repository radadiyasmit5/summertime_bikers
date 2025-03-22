import React from 'react';
import { Modal } from 'antd';
import { FaMotorcycle } from 'react-icons/fa';
import { MdDirectionsBike } from 'react-icons/md';
import Link from 'next/link';
import './FormModal.scss';

const FormModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      width={600}
      className="form-modal"
      closeIcon={<span className="close-icon">×</span>}
    >
      <div className="modal-content">
        <h2 className="modal-title">Choose Your Ride</h2>
        <p className="modal-subtitle">Select the option that best fits your needs</p>
        
        <div className="cards-container">
          <div className="license-card">
            <div className="card-content">
              <div className="card-title">
                <FaMotorcycle size={40} />
                <p>I have a driver's license</p>
              </div>
              <p className="card-description">
                Choose this option if you have a valid driver's license and want to ride a motorcycle.
              </p>
            </div>
          </div>

          <div className="license-card">
            <div className="card-content">
              <div className="card-title">
                <MdDirectionsBike size={40} />
                <p>I don't have a driver's license</p>
              </div>
              <p className="card-description">
                Choose this option if you don't have a driver's license and want to ride a bicycle.
              </p>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <p className="footer-text">Ready to start your journey?</p>
          <Link href="/form">
            <button className="fill-out-form-btn">Fill out Form</button>
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default FormModal; 