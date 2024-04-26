import React from 'react';

import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('react-lottie'), {
  ssr: false  // This ensures Lottie is only loaded on the client-side
});

import animationData from '../../lotties/login.json';

export default function LoginAnimation() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    }
  };

  return (
    <div className="login-animation pt-20">
      <Lottie
        options={defaultOptions}
        height={175}
        width={200}
      />
      <h2 className="login-animation__title text-center font-family-secondary">Logging in...</h2>
    </div>
  );
}
