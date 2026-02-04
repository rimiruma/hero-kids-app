import Logo from '@/components/layouts/Logo';
import React from 'react';

const loading = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen gap-5">
          <h2 className='text-5xl font-bold animate-bounce text-primary'>Loading</h2> 
          <div className='animate-ping'>
            <Logo></Logo>
            </div> 
        </div>
    );
};

export default loading;