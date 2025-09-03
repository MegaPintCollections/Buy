import React from 'react';
import {AddressElement} from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  return (
    <form style={{position: 'relative', zIndex: 2 }}>
      <AddressElement options={{mode: 'billing'}}/>
    </form>
  )
};

export default CheckoutForm