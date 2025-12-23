import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <div>
           <Link href={"/"} className='flex items-center gap-1'>
           <Image alt='logo-hero-kids' src={"/assets/logo.png"} width={50} height={40}></Image>
           <h2 className='text-xl font-black'>Hero<span className='text-primary'>Kids</span></h2>
           </Link> 
        </div>
    );
};

export default Logo;