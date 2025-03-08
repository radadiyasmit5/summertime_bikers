'use client';

import React, { Suspense, useEffect } from 'react';
import Header from '../header/Header';
import PromotionBar from '../PromotionBar/PromotionBar';
import StickyGformbtn from '../buttons/StickyGformbtn';
import StickyEstimateBtn from '../buttons/StickyEstimateBtn';
import { LoadingSpinner } from '../loadingSpinners/LoadingSpinner';
import './EstimationForm.scss';

const EstimationForm = () => {
  // Control body scroll when component mounts/unmounts
  useEffect(() => {
    // Disable scrolling on body when form is shown
    document.body.classList.add('no-scroll');
    document.documentElement.classList.add('no-scroll');
    
    // Re-enable scrolling when component unmounts
    return () => {
      document.body.classList.remove('no-scroll');
      document.documentElement.classList.remove('no-scroll');
    };
  }, []);

  return (
    <div className="estimation-container">
      <PromotionBar />
      <div className="estimation-outer-container">
        <Header />
        <div className="estimation-content">
          <Suspense fallback={<LoadingSpinner />}>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeXTBJWxN_MvRdVEzx8rr-G3pV_CCODVKHjqTjNt45u6MuniQ/viewform?embedded=true"
              title="Cost Estimation Form"
              allowFullScreen={true}
            >
              Loading...
            </iframe>
          </Suspense>
        </div>
      </div>
      <StickyGformbtn />
      <StickyEstimateBtn />
    </div>
  );
};

export default EstimationForm; 