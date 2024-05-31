'use client';

import React from 'react';
import { useState } from 'react';
import ArtisanForm from '../../ui/artisan-form';
import CustomerForm from '../../ui/customer-form';
import Button from '@/app/ui/button';

const RegisterPage = () => {
  const [registrationType, setRegistrationType] = useState<'customer' | 'artisan' | null>(null);

  return (
    <div>
      {!registrationType ? (
        <div className="flex flex-col text-center">
          <div className="flex justify-center ">
            <Button onClick={() => setRegistrationType('customer')} className="sm:text-2xl md:text-3xl lg:text-4xl">Customer Registration</Button>
            </div>
          <div className="flex justify-center">
            <Button onClick={() => setRegistrationType('artisan')} className="sm:text-2xl md:text-3xl lg:text-4xl">Artisan Registration</Button>
            </div>
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