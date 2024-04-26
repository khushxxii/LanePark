import React from 'react';

import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('react-lottie'), {
  ssr: false  // This ensures Lottie is only loaded on the client-side
});

import animationData from '../../lotties/checkout.json';

export default function Loader() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    }
  };

  return (
    <div className="loader-animation">
      <Lottie
        options={defaultOptions}
        height={500}
        width={400}
      />
      <h1 className="text-center font-family-secondary">Your order is processing...</h1>
    </div>
  );
}
