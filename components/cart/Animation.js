import React from 'react';

import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('react-lottie'), {
  ssr: false  // This ensures Lottie is only loaded on the client-side
});

import animationData from '../../lotties/add-to-cart.json';

export default function Animation( props ) {
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="cart-animation">
      <Lottie
        options={defaultOptions}
        height={32}
        width={32}
        isStopped={!props.isStopped}
      />
    </div>
  );
}
