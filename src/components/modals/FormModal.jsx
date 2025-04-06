import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import { FaMotorcycle } from 'react-icons/fa';
import { MdDirectionsBike } from 'react-icons/md';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import './FormModal.scss';

const FormModal = ({ isOpen, onClose }) => {
  const [modalWidth, setModalWidth] = useState(600);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setModalWidth(window.innerWidth >= 992 ? 1400 : 600);
    };

    // Set initial width
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCardClick = (path) => {
    onClose();
    router.push(path);
  };

  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      width={modalWidth}
      className="form-modal"
      closeIcon={<span className="close-icon">×</span>}
      centered
    >
      <div className="modal-content">
        <h2 className="modal-title">Find more information here</h2>
        <p className="modal-subtitle">Select the appropriate option</p>
        
        <div className="cards-container">
          <div 
            className="license-card"
            onClick={() => handleCardClick('/withLicence')}
            role="button"
            tabIndex={0}
          >
            <div className="card-content">
              <div className="card-title">
                <FaMotorcycle size={40} />
                <p>I have a regular drivers license.</p>
              </div>
              <p className="card-description">
                Click here if you already have a regular driver's license.
              </p>
            </div>
          </div>

          <div 
            className="license-card"
            onClick={() => handleCardClick('/withoutLicence')}
            role="button"
            tabIndex={0}
          >
            <div className="card-content">
              <div className="card-title">
                <MdDirectionsBike size={40} />
                <p>I do not have a regular drivers license.</p>
              </div>
              <p className="card-description">
                Click here if you don't have a regular driver's license yet.
              </p>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <p className="footer-text">Ready to start your journey?</p>
          <Link href="/callbackGform">
            <button className="fill-out-form-btn flex justify-center items-center gap-2 px-7 py-2 border font-montserrat text-lg leading-none btn bg-blue-600 text-white rounded-full">
              Fill out Form anyways
            </button>
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default FormModal; 