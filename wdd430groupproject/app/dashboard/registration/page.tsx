'use client';

import React from 'react';
import { useState } from 'react';
import ArtisanForm from '../../ui/artisan-form';
import CustomerForm from '../../ui/customer-form';

const RegisterPage = () => {
  const [registrationType, setRegistrationType] = useState<'customer' | 'artisan' | null>(null);

  return (
    <div>
      <h1>Register Here</h1>
      {!registrationType ? (
        <div>
          <button onClick={() => setRegistrationType('customer')}>Register as Customer</button>
          <button onClick={() => setRegistrationType('artisan')}>Register as Artisan</button>
        </div>
      ) : (
        <div>
          {registrationType === 'customer' ? <CustomerForm /> : <ArtisanForm />}
        </div>
      )}
    </div>
  );
};

export default RegisterPage;