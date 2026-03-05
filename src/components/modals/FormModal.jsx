import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import { FaCar } from 'react-icons/fa';
import { FaPersonWalking } from 'react-icons/fa6';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import './FormModal.scss';

const FormModal = ({ isOpen, onClose }) => {
  const [modalWidth, setModalWidth] = useState(600);
  const [isMobile, setIsMobile] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      
      if (width >= 1024) {
        setModalWidth(1000);
      } else if (width >= 768) {
        setModalWidth(700);
      } else {
        setModalWidth(width - 32);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCardClick = (path) => {
    onClose();
    router.push(path);
  };

  const cards = [
    {
      icon: <FaCar size={40} />,
      title: "I have a regular drivers licence.",
      description: "Click here if you already have a regular driver's licence.",
      path: '/withLicence'
    },
    {
      icon: <FaPersonWalking size={40} />,
      title: "I do not have a regular drivers licence.",
      description: "Click here if you don't have a regular driver's licence yet.",
      path: '/withoutLicence'
    }
  ];

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
        <p className="modal-subtitle">Select the appropriate option or fill out the form by clicking the button below</p>
        
        <div className="cards-container">
          {!isMobile ? (
            // Desktop and tablet view - show cards side by side
            cards.map((card, index) => (
              <div 
                key={index}
                className="license-card"
                onClick={() => handleCardClick(card.path)}
                role="button"
                tabIndex={0}
              >
                <div className="card-content">
                  <div className="card-title">
                    {card.icon}
                    <p>{card.title}</p>
                  </div>
                  {/* <p className="card-description">
                    {card.description}
                  </p> */}
                </div>
              </div>
            ))
          ) : (
            // Mobile view - stack cards vertically
            <div className="mobile-cards-stack">
              {cards.map((card, index) => (
                <div 
                  key={index}
                  className="license-card"
                  onClick={() => handleCardClick(card.path)}
                  role="button"
                  tabIndex={0}
                >
                  <div className="card-content">
                    <div className="card-title">
                      {card.icon}
                      <p>{card.title}</p>
                    </div>
                    {/* <p className="card-description">
                      {card.description}
                    </p> */}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="modal-footer">
          <p className="footer-text">Ready to start your journey?</p>
          <Link href="/callbackGform">
            <button className="fill-out-form-btn">
              Fill out Form
            </button>
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default FormModal; 