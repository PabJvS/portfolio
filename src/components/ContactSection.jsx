import React from 'react';

export const ContactSection = () => {
   return (
      <div className='max-w-lg w-full text-center mx-auto pt-24 pb-8'>
         <h1 className='text-2xl sm:text-4xl font-semibold'>
            Interested is working together?
         </h1>
         <h2 className='text-2xl sm:text-3xl font-semibold mb-2'>Contact me!</h2>
         <a className='text-lg sm:text-2xl'>
            <p className='animate-bounce pt-10 underline decoration-sky-500'>
               {' '}
               pablojovsa-94@hotmail.com{' '}
            </p>
         </a>
      </div>
   );
};
