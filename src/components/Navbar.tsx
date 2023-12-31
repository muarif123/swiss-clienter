
'use client';

import Link from 'next/link';
import { Navbar } from 'flowbite-react';
import { ModeToggle } from '@/components/ModdleToggle'
import { Button } from 'flowbite-react';




function Nav() {
  return (
    // <Navbar fluid rounded className='border'>
    //   <Navbar.Brand as={Link} href="https://flowbite-react.com">
    //     <img src="/swisslogo.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
    //     <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Swiss International</span>
    //   </Navbar.Brand>
    //   <Navbar.Toggle />
    //   <Navbar.Collapse style={{width:'40%'}} className='p-3  '>
    //     <Navbar.Link className='text-lg' href="/" active>
    //       Home
    //     </Navbar.Link>
    //     <Link href={'/Routes/about'}>
    //     <Navbar.Link className='text-lg'  as={Link} href="/Routes/about">
    //       About
    //     </Navbar.Link>
        
    //     </Link>
        
    //     <Navbar.Link className='text-lg'  href="/Routes/services">Services</Navbar.Link>
    //     <Navbar.Link className='text-lg' href="/Routes/gallery">Gallery</Navbar.Link>
    //     <Navbar.Link className='text-lg' href="/Routes/contact">Contact</Navbar.Link>
    //   </Navbar.Collapse>
    //     <ModeToggle/>
    // </Navbar>
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
        <img src="/swisslogo.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Swiss International</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
       <ModeToggle/>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" >
          Home
        </Navbar.Link>
        <Navbar.Link href="/Routes/about">About</Navbar.Link>
        <Navbar.Link href="/Routes/services">Services</Navbar.Link>
        <Navbar.Link href="/Routes/gallery">Gallery</Navbar.Link>
        <Navbar.Link href="/Routes/contact">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Nav
